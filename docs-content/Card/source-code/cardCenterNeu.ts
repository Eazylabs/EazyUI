import CardCenterNeu from '../blocks/CardCenterNeu';

export const CARDCENTERNEU = {
  html: `<div class="card card-neu">
  <div class="card-img">Image</div>
  <div class="card-body">
    <h3>Shoes!</h3>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <button class="btn btn-neu">Add</button>
  </div>
</div>`,
  css: `.card {
  border-radius: 8px;
  max-width: 286px;
  border: 1px solid #e6e6e6;
}

.card-neu {
  color: #183153;
  border: 1px solid #183153;
  box-shadow: 4px 4px 0px 0px #183153;
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

.card-center {
  align-items: center;
  text-align: center;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 44px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-neu {
  border: 1px solid #183153;
  box-shadow: 0px 4px 0px 0px #183153;
}

.btn-neu:hover {
  box-shadow: 4px 4px 0px 0px #183153;
}`,
  element: CardCenterNeu,
};
