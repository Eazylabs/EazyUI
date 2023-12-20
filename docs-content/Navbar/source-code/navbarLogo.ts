import NavbarLogo from "../blocks/NavbarLogo";

export const NAVBARLOGO = {
  html: `<nav class="nav">
        <div class="brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 34" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.31818 12C9.31818 9.79086 11.1904 8 13.5 8C15.8095 8 17.6818 9.79086 17.6818 12C17.6818 14.2091 15.8095 16 13.5 16H5.13636C4.55898 16 4.09091 15.5523 4.09091 15C4.09091 14.4477 4.55898 14 5.13636 14L13.5 14C14.6548 14 15.5909 13.1046 15.5909 12C15.5909 10.8954 14.6548 10 13.5 10C12.3452 10 11.4091 10.8954 11.4091 12V12.1C11.4091 12.6523 10.941 13.1 10.3636 13.1C9.78625 13.1 9.31818 12.6523 9.31818 12.1V12ZM19.6682 13C19.6682 12.4477 20.1362 12 20.7136 12H20.8182C23.1277 12 25 13.7909 25 16C25 18.2091 23.1277 20 20.8182 20H7.22727C6.64989 20 6.18182 19.5523 6.18182 19C6.18182 18.4477 6.64989 18 7.22727 18H20.8182C21.973 18 22.9091 17.1046 22.9091 16C22.9091 14.8954 21.973 14 20.8182 14H20.7136C20.1362 14 19.6682 13.5523 19.6682 13ZM2 19C2 18.4477 2.46807 18 3.04545 18H4.09091C4.66829 18 5.13636 18.4477 5.13636 19C5.13636 19.5523 4.66829 20 4.09091 20H3.04545C2.46807 20 2 19.5523 2 19Z"
                    fill="#4BA3E3" />
                <rect x="2" y="22" width="8" height="2" rx="1" fill="#4BA3E3" />
                <rect x="11" y="22" width="14" height="2" rx="1" fill="#4BA3E3" />
            </svg>
            <a href="">Eazy</a>
        </div>
        <ul class="nav-list">
            <li><a class="no-underline" href=""><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.57587 1.3758C5.68838 1.26332 5.84097 1.20013 6.00007 1.20013C6.15917 1.20013 6.31175 1.26332 6.42427 1.3758L10.6243 5.5758C10.7082 5.65971 10.7653 5.76661 10.7884 5.88298C10.8116 5.99935 10.7997 6.11997 10.7543 6.22959C10.7089 6.33921 10.632 6.43291 10.5333 6.49884C10.4347 6.56477 10.3187 6.59997 10.2001 6.6H9.60007V10.2C9.60007 10.3591 9.53685 10.5117 9.42433 10.6243C9.31181 10.7368 9.1592 10.8 9.00007 10.8H7.80007C7.64094 10.8 7.48833 10.7368 7.3758 10.6243C7.26328 10.5117 7.20007 10.3591 7.20007 10.2V8.4C7.20007 8.24087 7.13685 8.08826 7.02433 7.97573C6.91181 7.86321 6.7592 7.8 6.60007 7.8H5.40007C5.24094 7.8 5.08833 7.86321 4.9758 7.97573C4.86328 8.08826 4.80007 8.24087 4.80007 8.4V10.2C4.80007 10.3591 4.73685 10.5117 4.62433 10.6243C4.51181 10.7368 4.3592 10.8 4.20007 10.8H3.00007C2.84094 10.8 2.68833 10.7368 2.5758 10.6243C2.46328 10.5117 2.40007 10.3591 2.40007 10.2V6.6H1.80007C1.68142 6.59997 1.56544 6.56477 1.46679 6.49884C1.36815 6.43291 1.29126 6.33921 1.24586 6.22959C1.20046 6.11997 1.18858 5.99935 1.21172 5.88298C1.23486 5.76661 1.29198 5.65971 1.37587 5.5758L5.57587 1.3758Z" fill="#4BA3E3"/>
</svg>Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Produk</a></li>
        </ul>
    </nav>`,
  css: `.nav {
    display: flex;
    width: 499px;
    height: 42px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
}

.nav-list{
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 0px 0px 0px 0px
}

.nav-list li{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2em;
}

.nav a {
    text-decoration: none;
    color: #C3C6D1;
    margin: 1em;
    font-size: 12px;
    font-weight: 500;
    font-family: Cera Pro;
}

.nav-list a:hover {
    color: #4BA3E3;
}

a.no-nunderline{
    color: #4BA3E3;
    text-decoration: none;
    font-style: normal;
    line-height: normal;
}

a.no-nunderline:hover {
    font-weight: 600;
}

.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 0px 0px 16px;
}

.brand a {
    color: var(--black, #183153);
    margin: -0.5em;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
}

.brand a:hover {
    color: #4BA3E3;
}`,
  element: NavbarLogo,
};
