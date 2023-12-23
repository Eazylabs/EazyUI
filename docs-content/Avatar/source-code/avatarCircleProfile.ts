import AvatarCircleProfile from "../blocks/AvatarCircleProfile";

export const AVATARCIRCLEPROFILE = {
  html: `<div class='avatar-wrapper'>
      <div class='avatar avatar-circle'>
        <img src='https://i.pravatar.cc/80' alt='avatar' />
      </div>
      <div class="text">
        <h2>
          Kanon Shizaki
        </h2>
        <p>Roselia Keyboard</p>
      </div>
    </div>`,
  css: `.avatar {
  width: 80px;
  height: 80px;
  object-fit: cover;
  background-color: gray;
}

.avatar-circle {
  border-radius: 50%;
}

.text{
  color: var(--black, #183153);
  font-family: Cera Pro;
  font-style: normal;
}

.text h2{
  margin: auto;
  font-weight: 500;
  font-size: 10px;
}

.text p{
  margin:auto;
  font-weight: 400;
  font-size: 8px;
}`,
  element: AvatarCircleProfile,
};
