import ModalImage from '../blocks/ModalImage';

export const MODALIMAGE = {
  html: `<button class="btn btn-basic">
  Click Me
</button>; 
<dialog class="dialog">
  <div class="modal-btn">
    <div class="left">
      <div class="profile-image"></div>
      <div class="profile">
        <div class="name">Eazy Labs</div>
        <div class="username">@eazylabs</div>
      </div>
    </div>
    <div class="right">
      <button class="btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
        >
          <path
            d="M2.23125 13.0813L10.7016 20.9891C11.0531 21.3172 11.5172 21.5 12 21.5C12.4828 21.5 12.9469 21.3172 13.2984 20.9891L21.7687 13.0813C23.1937 11.7547 24 9.89376 24 7.94844V7.67657C24 4.40001 21.6328 1.60626 18.4031 1.06719C16.2656 0.710944 14.0906 1.40938 12.5625 2.93751L12 3.50001L11.4375 2.93751C9.90938 1.40938 7.73438 0.710944 5.59688 1.06719C2.36719 1.60626 0 4.40001 0 7.67657V7.94844C0 9.89376 0.80625 11.7547 2.23125 13.0813Z"
            fill="#4BA3E3"
          />
        </svg>
      </button>
      <button class="btn btn-basic">
        <span>Free Download</span>
      </button>
    </div>
  </div>
  <div class="dialog-photo"></div>
  <div class="dialog-desc">
    <div>
      <div>Views</div>
      <div>1.000.000</div>
    </div>
    <div>
      <div>Downloads</div>
      <div>985.289</div>
    </div>
  </div>
</dialog>;`,
  css: `.dialog {
  z-index: 10;
  margin-top: 10px;
  margin: auto;
  width: 100%;
  max-width: 768px;
  padding: 16px;
  background: #fff;
  border: none;
  border-radius: 8px;
}

.dialog::backdrop {
  background-color: #00000030;
  backdrop-filter: blur(4px);
}

.modal-btn {
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.left,
.right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-image {
  width: 40px;
  height: 40px;
  background-color: #c3c6d1;
  border-radius: 50%;
}

.name {
  font-weight: 600;
}

.dialog-photo {
  margin-top: 16px;
  width: 100%;
  height: 300px;
  background-color: #c3c6d1;
  border-radius: 8px;
}

.dialog-desc {
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
}
  `,
  javascript: `const dialog = document.querySelector('dialog');
  
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  dialog.showModal();
});

dialog.addEventListener('click', (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});
`,
  element: ModalImage,
};
