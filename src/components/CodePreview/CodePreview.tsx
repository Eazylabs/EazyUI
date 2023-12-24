import { Listbox } from "@headlessui/react";
import { cn } from "@site/src/utils/service";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiCheck, FiCopy } from "react-icons/fi";
import CodeHighlight from "../Editor/CodeHighlight";
import "./CodePreview.css";

interface IHeight {
  sm: string;
  md: string;
  lg: string;
  auto: string;
}

interface IOrigin {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  center: string;
}

type ICodePreview = {
  children: any;
  height?: keyof IHeight;
  origin?: keyof IOrigin;
};

const containerHeight = ({ height }: ICodePreview) => {
  const heightClass = {
    sm: "h-sm",
    md: "h-md",
    lg: "h-lg",
    auto: "h-auto",
  };

  return cn(heightClass[height || "md"]);
};

const originPosition = ({ origin }: ICodePreview) => {
  const originClass = {
    topLeft: "origin-top-left",
    topRight: "origin-top-right",
    bottomLeft: "origin-bottom-left",
    bottomRight: "origin-bottom-right",
    center: "origin-center",
  };

  return cn(originClass[origin || "center"]);
};

export default function CodePreview(
  { children, height, origin }: ICodePreview,
) {
  const Element = children.element;
  const { element = null, ...choices } = { preview: <Element />, ...children };

  const [tab, setTab] = useState("preview");
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
    <div className="preview-wrapper">
      <div className="tab">
        <div className="dot-wrapper">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="listbox-wrapper">
          <Listbox value={tab} onChange={setTab}>
            <Listbox.Button className="listbox-btn">{tab}</Listbox.Button>
            <Listbox.Button className="listbox-btn-chevron">
              <FaChevronDown />
            </Listbox.Button>
            <Listbox.Options className="listbox-options">
              {Object.keys(choices).map((key) => {
                if (key !== tab) {
                  return (
                    <Listbox.Option
                      key={key}
                      value={key}
                      className="listbox-option"
                    >
                      {key}
                    </Listbox.Option>
                  );
                }
              })}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="copy-btn" onClick={handleClipboard}>
          {copy ? <FiCheck /> : <FiCopy />}
        </div>
      </div>
      <div
        className={`${
          tab == "preview" && originPosition({ origin } as ICodePreview)
        } ${
          containerHeight({
            height,
          } as ICodePreview)
        } preview`}
      >
        {tab == "preview"
          ? choices[tab]
          : <CodeHighlight code={choices[tab]} lang={tab} />}
      </div>
    </div>
  );
}
