import AvatarGroup from "../blocks/AvatarGroup";

export const AVATARGROUP = {
  html: `<div class="avatar-group">
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
  <div class="avatar avatar-circle">
    <img src="https://i.pravatar.cc/80" alt="avatar" />
  </div>
</div>`,
  css: `.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  background-color: gray;
  overflow: hidden;
}

.avatar-circle {
  border-radius: 50%;
}

.avatar-group{
  display: flex;
  align-items: center;
}

.avatar-group{
  display: flex;
  align-items: center;
}

.avatar-group .avatar:not(:first-child){
  margin-left: -10px;
}`,
  element: AvatarGroup,
};
