import AvatarGroup from "../blocks/AvatarGroup";

export const AVATARGROUP = {
  html: `<div class="avatar-group">
        <img src='https://i.pravatar.cc/80' alt='avatar' />
        <img src='https://i.pravatar.cc/80' alt='avatar' />
        <img src='https://i.pravatar.cc/80' alt='avatar' />
        <img src='https://i.pravatar.cc/80' alt='avatar' />
        <img src='https://i.pravatar.cc/80' alt='avatar' />
    </div>`,
  css: `.avatar-group{
  display: flex;
  align-items: center;
}

.avatar-group img{
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.avatar-group img:nth-child(1) {
  transform: translateX(10px);
}

.avatar-group img:nth-child(2) {
  transform: translateX(0px);
}

.avatar-group img:nth-child(3) {
  transform: translateX(-10px);
}

.avatar-group img:nth-child(4) {
  transform: translateX(-20px);
}

.avatar-group img:nth-child(5) {
  transform: translateX(-30px);
}`,
  element: AvatarGroup,
};
