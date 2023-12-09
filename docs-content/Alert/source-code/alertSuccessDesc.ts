import AlertSuccessDesc from '../blocks/AlertSuccessDesc';

export const ALERTSUCCESSDESC = {
  html: `<div className="alert-desc alert-desc-success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
  >
    <path
      d="M12.8333 19.8333H15.1666V12.8333H12.8333V19.8333ZM13.9999 10.5C14.3305 10.5 14.6078 10.388 14.8318 10.164C15.0558 9.93998 15.1674 9.66309 15.1666 9.33331C15.1666 9.00276 15.0546 8.72548 14.8306 8.50148C14.6066 8.27748 14.3297 8.16587 13.9999 8.16665C13.6694 8.16665 13.3921 8.27865 13.1681 8.50265C12.9441 8.72665 12.8325 9.00353 12.8333 9.33331C12.8333 9.66387 12.9453 9.94115 13.1693 10.1651C13.3933 10.3891 13.6701 10.5008 13.9999 10.5ZM13.9999 25.6666C12.386 25.6666 10.8694 25.3602 9.44992 24.7473C8.03047 24.1344 6.79575 23.3034 5.74575 22.2541C4.69575 21.2041 3.8647 19.9694 3.25259 18.55C2.64047 17.1305 2.33403 15.6139 2.33325 14C2.33325 12.3861 2.6397 10.8694 3.25259 9.44998C3.86547 8.03054 4.69653 6.79581 5.74575 5.74581C6.79575 4.69581 8.03047 3.86476 9.44992 3.25265C10.8694 2.64054 12.386 2.33409 13.9999 2.33331C15.6138 2.33331 17.1305 2.63976 18.5499 3.25265C19.9694 3.86554 21.2041 4.69659 22.2541 5.74581C23.3041 6.79581 24.1355 8.03054 24.7484 9.44998C25.3613 10.8694 25.6674 12.3861 25.6666 14C25.6666 15.6139 25.3601 17.1305 24.7473 18.55C24.1344 19.9694 23.3033 21.2041 22.2541 22.2541C21.2041 23.3041 19.9694 24.1356 18.5499 24.7485C17.1305 25.3614 15.6138 25.6674 13.9999 25.6666Z"
      fill="#14B789"
    />
  </svg>
  <div>
    <div>A simple alert for showing message.</div>
    <ul>
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., !</li>
    </ul>
  </div>
</div>`,
  css: `.alert-desc li {
  list-style: disc;
}

.alert-desc {
  padding: 10px 16px;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  width: 80%;
}

.alert-desc-success {
  background-color: #d3fff2;
  color: #14b789;
  border-left: 10px solid #14b789;
}`,
  element: AlertSuccessDesc,
};
