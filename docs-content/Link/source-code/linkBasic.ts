import LinkBasic from '../blocks/LinkBasic';

export const LINKBASIC = {
  html: `<a href='#' class='link'>I'm simple link</a>`,
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
}`,
  element: LinkBasic,
};
