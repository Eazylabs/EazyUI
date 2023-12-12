import React, { useEffect, useRef } from 'react';
import '../styles/style.css';

export default function ModalImageNeu() {
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
      <button onClick={openDialog} className='btn btn-neu'>
        Click Me
      </button>
      <dialog ref={dialog} className='dialog dialog-image dialog-neu'>
        <div className='modal-btn'>
          <div className='left'>
            <div className='profile-image'></div>
            <div className='profile'>
              <div className='name'>Eazy Labs</div>
              <div className='username'>@eazylabs</div>
            </div>
          </div>
          <div className='right'>
            <button className='btn'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='22' viewBox='0 0 24 22' fill='none'>
                <path
                  d='M2.23125 13.0813L10.7016 20.9891C11.0531 21.3172 11.5172 21.5 12 21.5C12.4828 21.5 12.9469 21.3172 13.2984 20.9891L21.7687 13.0813C23.1937 11.7547 24 9.89376 24 7.94844V7.67657C24 4.40001 21.6328 1.60626 18.4031 1.06719C16.2656 0.710944 14.0906 1.40938 12.5625 2.93751L12 3.50001L11.4375 2.93751C9.90938 1.40938 7.73438 0.710944 5.59688 1.06719C2.36719 1.60626 0 4.40001 0 7.67657V7.94844C0 9.89376 0.80625 11.7547 2.23125 13.0813Z'
                  fill='#183153'
                />
              </svg>
            </button>
            <button className='btn btn-neu'>
              <span>Free Download</span>
            </button>
          </div>
        </div>
        <div className='dialog-photo'></div>
        <div className='dialog-desc'>
          <div>
            <div>Views</div>
            <div>1.000.000</div>
          </div>
          <div>
            <div>Downloads</div>
            <div>985.289</div>
          </div>
        </div>
      </dialog>
    </>
  );
}
