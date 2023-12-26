import Phone from "../blocks/Phone";

export const PHONE = {
  html: `<div class="mockup-phone">
  <div class="notch">
    <span class="speaker"></span>
  </div>
  <div class="screen">Hi</div>
</div>`,
  css: `.mockup-phone {
  position: relative;
  margin: auto;
  padding: 10px;
  width: 348px;
  height: 596px;
  background: #fff;
  box-shadow: 0 0 20px #e2e2e2;
  border-radius: 50px;
}

.screen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 40px;
  overflow-y: auto;
}

.notch {
  width: 50%;
  height: 20px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 20px 20px;
}

.speaker {
  width: 35%;
  height: 5px;
  background: #f2f2f2;
  display: block;
  margin: auto;
  margin-top: 5px;
  border-radius: 20px;
}`,
  element: Phone,
};
