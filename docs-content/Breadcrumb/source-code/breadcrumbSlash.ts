import BreadcrumbSlash from '../blocks/BreadcrumbSlash';

export const BREADCRUMBSLASH = {
  html: `<ul class='breadcrumb slash'>
  <li>
    <a href='#'>Docs</a>
  </li>
  <li>
    <a href='#'>Component</a>
  </li>
  <li>
    <a href='#'>Breadcrumbs</a>
  </li>
</ul>`,
  css: `.breadcrumb {
    list-style: none;
    background-color: #fff;
    border-radius: 0;
    font-size: 20px;
    padding: 8px 15px;
}
  
  .breadcrumb li {
    display: inline;
}
  
  .breadcrumb a {
    color: black;
    text-decoration: none;
}
  
  .breadcrumb li:last-child a {
    padding: 5px;
    color: #787878;
    background-color: #f7f7f7;
    border-radius: 10px;
}
  
  .slash li + li:before {
    margin: 0 10px;
    content: '\u002F002F';
}`,
  element: BreadcrumbSlash,
};
