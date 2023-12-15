import CardBasic from '../blocks/CardBasic';

export const CARDBASIC = {
  html: `<div class="card">
  <div class="card-img">Image</div>
  <div class="card-body">
    <h3>Shoes!</h3>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <button class="btn btn-primary">Add</button>
  </div>
</div>`,
  css: `.card {
  border-radius: 8px;
  max-width: 286px;
  border: 1px solid #e6e6e6;
}

.card-img {
  width: 100%;
  height: 135px;
  background-color: #f3f4f6;
  object-fit: cover;
}

.card-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
  align-self: end;
}

.btn-primary {
  background-color: #4ba3e3;
  color: #fff;
}`,
  element: CardBasic,
};
