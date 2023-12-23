import React from 'react';
import '../styles/style.css';

export default function NavbarProfile() {
  return (
    <nav className="nav">
        <div className="brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 34" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M9.31818 12C9.31818 9.79086 11.1904 8 13.5 8C15.8095 8 17.6818 9.79086 17.6818 12C17.6818 14.2091 15.8095 16 13.5 16H5.13636C4.55898 16 4.09091 15.5523 4.09091 15C4.09091 14.4477 4.55898 14 5.13636 14L13.5 14C14.6548 14 15.5909 13.1046 15.5909 12C15.5909 10.8954 14.6548 10 13.5 10C12.3452 10 11.4091 10.8954 11.4091 12V12.1C11.4091 12.6523 10.941 13.1 10.3636 13.1C9.78625 13.1 9.31818 12.6523 9.31818 12.1V12ZM19.6682 13C19.6682 12.4477 20.1362 12 20.7136 12H20.8182C23.1277 12 25 13.7909 25 16C25 18.2091 23.1277 20 20.8182 20H7.22727C6.64989 20 6.18182 19.5523 6.18182 19C6.18182 18.4477 6.64989 18 7.22727 18H20.8182C21.973 18 22.9091 17.1046 22.9091 16C22.9091 14.8954 21.973 14 20.8182 14H20.7136C20.1362 14 19.6682 13.5523 19.6682 13ZM2 19C2 18.4477 2.46807 18 3.04545 18H4.09091C4.66829 18 5.13636 18.4477 5.13636 19C5.13636 19.5523 4.66829 20 4.09091 20H3.04545C2.46807 20 2 19.5523 2 19Z"
                    fill="#4BA3E3" />
                <rect x="2" y="22" width="8" height="2" rx="1" fill="#4BA3E3" />
                <rect x="11" y="22" width="14" height="2" rx="1" fill="#4BA3E3" />
            </svg>
            <a href="">Eazy</a>
        </div>
        <ul className="nav-list">
            <li><a className="underline" href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Produk</a></li>
            <div className="avatar circle">
                <img src='https://i.pravatar.cc/80' alt='avatar' />
            </div>
        </ul>
    </nav>
  );
}
