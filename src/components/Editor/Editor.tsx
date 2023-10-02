import React, { useCallback, useState } from 'react';
import './style.css';
import { IStyle } from '@site/src/utils/interfaces/style';
import { useUnitFilter } from '@site/src/utils/hooks/useUnitFilter';
import { editorInput } from '@site/src/constant';
import { IconContext } from 'react-icons';
import { jsonToCss, borderMerge, shadowOpacity } from '@site/src/utils/service';

export function Editor({ element, initStyle, initContent }) {
  const [width, setWidth] = useState(70);
  const [editorView, setEditorView] = useState<string>(Object.keys(initStyle)[0]);
  const [style, setStyle] = useState<IStyle>(initStyle);
  const [content, setContent] = useState(initContent);
  const [propertyShow, setPropertyShow] = useState({
    border: initStyle[editorView].hasOwnProperty('borderWidth'),
    shadow: initStyle[editorView].hasOwnProperty('boxShadow'),
  });

  const dragHandler = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const w =
        ((e.clientX - e.currentTarget.parentElement.parentElement.getBoundingClientRect().left) /
          e.currentTarget.parentElement.parentElement.getBoundingClientRect().width) *
        100;
      if (w > 0 && w !== width) {
        setWidth(w);
      }
    },
    [width],
  );

  const handleChangeStyle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const [property, value] = useUnitFilter(e.target, style[editorView]);

      if (property === 'borderPosition') {
        borderMerge(style, setStyle, removeProperty, editorView, value);
      } else if (property === 'shadowOpacity') {
        shadowOpacity(style, setStyle, editorView, property, value);
      } else {
        setStyle({
          ...style,
          [editorView]:
            parseInt(e.target.value) !== 0 && e.target.value !== ''
              ? { ...style[editorView], [property]: value }
              : { ...removeProperty(property, style[editorView]) },
        });
      }
    },
    [style],
  );

  const removeProperty = (remove: string, data) => {
    if (!data.hasOwnProperty(remove)) {
      return data;
    }

    const newProperty = { ...data };
    delete newProperty[remove];

    return newProperty;
  };

  const handleChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent({
        ...content,
        [editorView]: e.target.value,
      });
    },
    [content],
  );

  const handleShowProperty = useCallback((e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const property = e.currentTarget.id;
    if (property === 'border') {
    }
  }, []);

  const handleEditorView = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setEditorView(e.currentTarget.id);
  }, []);

  const cssString = jsonToCss(style);

  const Element = element;

  return (
    <div className='main'>
      <div className='preview' id='preview'>
        <Element style={style} handleEditorView={handleEditorView} content={content} />
      </div>
      <div className='custom'>
        <div className='primary-div' style={{ width: `${width}%` }}>
          {cssString}
        </div>
        <div onDrag={dragHandler} className='divider'></div>
        <div className='secondary-div' style={{ width: `${100 - width}%` }}>
          <div className='editor-section'>
            <p>{editorView}</p>
          </div>
          <div className='editor-input'>
            <IconContext.Provider value={{ size: '20px' }}>
              {editorInput.map((data) => {
                return (
                  <div className='editor-input-section'>
                    <div className='editor-input-title'>
                      {data.icons()}
                      <p>{data.section}</p>
                    </div>
                    <div>
                      <input type='checkbox' id={data.section} onClick={handleShowProperty} />
                    </div>
                    <div className='input-section'>
                      {data.input.map((input) => {
                        return (
                          <div className='input-body' role='button'>
                            {input.icons()}
                            {['text', 'number', 'color'].includes(input.type) && (
                              <input
                                type={input.type}
                                property={input.property}
                                defaultValue={
                                  input.type === 'text'
                                    ? content[editorView]
                                      ? content[editorView]
                                      : 'content'
                                    : style[editorView][input.property]
                                    ? style[editorView][input.property].toString().replace(/[^0-9.]+/, '')
                                    : 0
                                }
                                min={0}
                                name={input.property}
                                onChange={input.type === 'text' ? handleChangeContent : handleChangeStyle}
                                autoComplete='off'
                              />
                            )}
                            {input.type === 'select' && (
                              <select name={input.property} onChange={handleChangeStyle}>
                                {input.options.map((option) => {
                                  return (
                                    <option
                                      value={option}
                                      selected={style[editorView][input.property] === option ? true : false}
                                    >
                                      {option}
                                    </option>
                                  );
                                })}
                              </select>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
