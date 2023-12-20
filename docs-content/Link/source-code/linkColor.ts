import LinkColor from '../blocks/LinkColor';

export const LINKCOLOR = {
  html: `<a href='#' class='link link-info'>I'm simple link</a>
<a href='#' class='link link-success'>I'm simple link</a>
<a href='#' class='link link-warning'>I'm simple link</a>
<a href='#' class='link link-danger'>I'm simple link</a>
  `,
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

.link-info {
  color: #4ba3e3;
}

.link-info:hover {
  color: #007cd7;
}

.link-success {
  color: #14b789;
}

.link-success:hover {
  color: #0d8a66;
}

.link-warning {
  color: #ffd43b;
}

.link-warning:hover {
  color: #e6b800;
}

.link-danger {
  color: #e03131;
}

.link-danger:hover {
  color: #b21f1f;
}`,
  element: LinkColor,
};
