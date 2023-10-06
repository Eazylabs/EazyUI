import { editorInput } from '@site/src/constant';
import { useUnitFilter } from '@site/src/utils/hooks/useUnitFilter';
import { IStyle } from '@site/src/utils/interfaces/style';
import { borderMerge, jsonToCss, shadowOpacity } from '@site/src/utils/service';
import React, { useCallback, useState } from 'react';
import { IconContext } from 'react-icons';
import './style.css';

export function Editor({ element, initStyle, initContent, initHover }) {
  const [width, setWidth] = useState(65);
  const [editorView, setEditorView] = useState<string>(Object.keys(initStyle)[0]);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [style, setStyle] = useState<IStyle>(initStyle);
  const [styleStorage, setStyleStorage] = useState<IStyle>(initHover);
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

  const handleShowProperty = useCallback(
    (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      const property = e.currentTarget.id.toLowerCase();
      setPropertyShow({ ...propertyShow, [property]: !propertyShow[property] });
      if (property === 'border') {
        if (!style[editorView]['borderWidth']) {
          setStyle({
            ...style,
            [editorView]: { ...style[editorView], borderWidth: '10px', borderColor: 'black', borderStyle: 'solid' },
          });
        }
      } else if (property === 'shadow') {
        if (!style[editorView]['boxShadow']) {
          setStyle({
            ...style,
            [editorView]: { ...style[editorView], boxShadow: '6px 10px 5px 0px rgba(188,188,188,0.75)' },
          });
        }
      }
    },
    [propertyShow],
  );

  const handleEditorView = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setEditorView(e.currentTarget.id);
  }, []);

  const handleIsHover = (mode) => {
    if (mode == 'normal') {
      const temp = style;
      setStyle(styleStorage);
      setStyleStorage(temp);
      setIsHover(false);
    } else {
      const temp = style;
      setStyle(styleStorage);
      setStyleStorage(temp);
      setIsHover(true);
    }
  };

  const cssString = jsonToCss(style);

  const Element = element;

  return (
    <div className='main'>
      <div className='preview' id='preview'>
        <Element
          style={style}
          handleEditorView={handleEditorView}
          content={content}
          setStyle={setStyle}
          styleStorage={styleStorage}
          setStyleStorage={setStyleStorage}
        />
      </div>
      <div className='custom'>
        <div className='primary-div' style={{ width: `${width}%` }}>
          {cssString}
        </div>
        <div onDrag={dragHandler} className='divider'></div>
        <div className='secondary-div' style={{ width: `${100 - width}%` }}>
          <div className='editor-section'>
            <button onClick={() => handleIsHover('normal')}>normal</button>
            <button onClick={() => handleIsHover('hover')}>hover</button>
          </div>
          <div className='editor-input'>
            <IconContext.Provider value={{ size: '20px' }}>
              {editorInput.map(({ section, icons, input }) => {
                return (
                  <div className='editor-input-section'>
                    <div className='editor-input-title'>
                      {icons()}
                      <p>{section}</p>
                    </div>
                    <div className='editor-input-checkbox'>
                      {(section === 'Border' || section === 'Shadow') && (
                        <input
                          type='checkbox'
                          id={section}
                          defaultChecked={propertyShow[section.toLowerCase()]}
                          onClick={handleShowProperty}
                        />
                      )}
                    </div>
                    <div className='input-section'>
                      {input.map(({ type, property, icons, options }) => {
                        return (
                          <div className='input-body' role='button'>
                            {icons()}
                            {['text', 'number', 'color'].includes(type) && (
                              <input
                                type={type}
                                property={property}
                                defaultValue={
                                  type === 'text'
                                    ? content[editorView]
                                      ? content[editorView]
                                      : 'content'
                                    : style[editorView][property]
                                    ? style[editorView][property].toString().replace(/[^0-9.]+/, '')
                                    : 0
                                }
                                value={
                                  type === 'text'
                                    ? content[editorView]
                                      ? content[editorView]
                                      : 'content'
                                    : style[editorView][property]
                                    ? style[editorView][property].toString().replace(/[^0-9.]+/, '')
                                    : 0
                                }
                                min={0}
                                name={property}
                                onChange={type === 'text' ? handleChangeContent : handleChangeStyle}
                                autoComplete='off'
                                disabled={
                                  section === 'Border' || section === 'Shadow'
                                    ? !propertyShow[section.toLowerCase()]
                                    : false
                                }
                              />
                            )}
                            {type === 'select' && (
                              <select name={property} onChange={handleChangeStyle}>
                                {options.map((option) => {
                                  return (
                                    <option
                                      value={option}
                                      selected={style[editorView][property] === option ? true : false}
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
