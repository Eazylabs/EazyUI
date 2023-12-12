import AvatarVariants from '../blocks/AvatarVariants';

export const AVATARVARIANTS = {
  html: `<div className='avatar avatar-circle'></div>
<div className='avatar avatar-rounded'></div>
<div className='avatar avatar-square'></div>`,
  css: `.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  background-color: gray;
}

.avatar-circle {
  border-radius: 50%;
}

.avatar-rounded {
  border-radius: 8px;
}`,
  element: AvatarVariants,
};
