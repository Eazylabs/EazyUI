import { Listbox } from '@headlessui/react';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';
import CodeHighlight from '../Editor/CodeHighlight';
import './CodePreview.css';

export default function CodePreview({ children }) {
  const Element = children[0].element;
  const { element = null, ...choices } = { preview: <Element />, ...children[0] };

  const [tab, setTab] = useState('preview');

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
              {Object.keys(choices).map((key) => (
                <Listbox.Option key={key} value={key} className='listbox-option'>
                  {key}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className='copy-btn'>
          <FiCopy />
        </div>
      </div>
      <div className={`${tab == 'preview' && 'active'} preview`}>
        {tab == 'preview' ? choices[tab] : <CodeHighlight code={choices[tab]} lang={tab} />}
      </div>
    </div>
  );
}
