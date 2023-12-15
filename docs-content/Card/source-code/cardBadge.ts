import CardBadge from '../blocks/CardBadge';

export const CARDBADGE = {
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

.card-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: end;
}

.badges {
  padding: 6px 16px;
  border-radius: 99px;

  font-size: 10px;
}

.badge-info {
  color: #fff;
  background-color: #4ba3e3;
}`,
  element: CardBadge,
};
