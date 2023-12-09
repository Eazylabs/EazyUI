import { Listbox } from '@headlessui/react';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiCopy, FiCheck } from 'react-icons/fi';
import CodeHighlight from '../Editor/CodeHighlight';
import './CodePreview.css';

export default function CodePreview({ children }) {
  const Element = children.element;
  const { element = null, ...choices } = { preview: <Element />, ...children };

  const [tab, setTab] = useState('preview');
  const [copy, setCopy] = useState(false);

  const handleClipboard = () => {
    navigator.clipboard.writeText(choices[tab]).then(() => {
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 3000);
    });
  };

  return (
    <div className='preview-wrapper'>
      <div className='tab'>
        <div className='dot-wrapper'>
          <div className='dot red'></div>
          <div className='dot yellow'></div>
          <div className='dot green'></div>
        </div>
        <div className='listbox-wrapper'>
          <Listbox value={tab} onChange={setTab}>
            <Listbox.Button className='listbox-btn'>{tab}</Listbox.Button>
            <Listbox.Button className='listbox-btn-chevron'>
              <FaChevronDown />
            </Listbox.Button>
            <Listbox.Options className='listbox-options'>
              {Object.keys(choices).map((key) => {
                if (key !== tab)
                  return (
                    <Listbox.Option key={key} value={key} className='listbox-option'>
                      {key}
                    </Listbox.Option>
                  );
              })}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className='copy-btn' onClick={handleClipboard}>
          {copy ? <FiCheck /> : <FiCopy />}
        </div>
      </div>
      <div className={`${tab == 'preview' && 'active'} preview`}>
        {tab == 'preview' ? choices[tab] : <CodeHighlight code={choices[tab]} lang={tab} />}
      </div>
    </div>
  );
}
