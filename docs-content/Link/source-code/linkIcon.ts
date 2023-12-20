import LinkIcon from '../blocks/LinkIcon';

export const LINKICON = {
  html: `<a href='#' class='link link-icon'>I'm simple link</a>`,
  css: `.link {
  color: #aaa;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-weight: bold;
  cursor: pointer;
}

.link:hover {
  color: #ccc;
}

.link:active {
  color: #bbb;
}

.link-icon {
  text-decoration: none;
  position: relative;
}

.link-icon::after {
  content: '\\2192';
  margin-left: 4px;
  position: absolute;
  top: -2px;
  transition: 150ms ease-in-out;
}

.link-icon:hover::after {
  transform: translateX(10px);
}`,
  element: LinkIcon,
};
