import React, { useEffect, useRef } from 'react';
import '../styles/style.css';

export default function ModalBasic() {
  const dialog = useRef(null);

  useEffect(() => {
    const dialogElement = dialog.current;

    if (dialogElement) {
      dialogElement.addEventListener('click', (e) => {
        const dialogDimensions = dialogElement.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialogElement.close();
        }
      });
    }
  }, []);

  function openDialog() {
    const dialogElement = dialog.current;

    if (dialogElement) {
      dialogElement.showModal();
    }
  }

  return (
    <>
      <button onClick={openDialog} className='btn btn-basic'>
        Click Me
      </button>
      <dialog ref={dialog} className='dialog'>
        <h3>It's a Simple Modal</h3>
        <p>
          The key to more success is to have a lot of pillows. Put it this way, it took me twenty five years to get
          these plants, twenty five years of blood sweat and tears, and I'm never giving up, I'm just getting started.
          I'm up to something. Fan luv.
        </p>
        <div className='modal-btn'>
          <button className='btn'>Cancel</button>
          <button className='btn btn-basic'>
            <svg xmlns='http://www.w3.org/2000/svg' width='23' height='18' viewBox='0 0 23 18' fill='none'>
              <path
                d='M5.175 17.3125C2.31797 17.3125 0 14.9189 0 11.9688C0 9.63828 1.44469 7.65664 3.45719 6.92559C3.45359 6.82539 3.45 6.7252 3.45 6.625C3.45 3.34453 6.02312 0.6875 9.2 0.6875C11.3311 0.6875 13.1891 1.88242 14.1845 3.66367C14.7308 3.28516 15.392 3.0625 16.1 3.0625C18.0047 3.0625 19.55 4.6582 19.55 6.625C19.55 7.07773 19.4673 7.5082 19.32 7.90898C21.4187 8.34688 23 10.2654 23 12.5625C23 15.1861 20.9408 17.3125 18.4 17.3125H5.175ZM8.01406 9.25977C7.67625 9.60859 7.67625 10.1727 8.01406 10.5178C8.35187 10.8629 8.89812 10.8666 9.23234 10.5178L10.6339 9.07051V14.0469C10.6339 14.5404 11.0184 14.9375 11.4964 14.9375C11.9744 14.9375 12.3589 14.5404 12.3589 14.0469V9.07051L13.7605 10.5178C14.0983 10.8666 14.6445 10.8666 14.9787 10.5178C15.313 10.1689 15.3166 9.60488 14.9787 9.25977L12.1037 6.29102C11.7659 5.94219 11.2197 5.94219 10.8855 6.29102L8.01047 9.25977H8.01406Z'
                fill='#fff'
              />
            </svg>
            <span>Save</span>
          </button>
        </div>
      </dialog>
    </>
  );
}
