import TweetNeu from '../blocks/TweetNeu';

export const TWEETNEU = {
  html: `<div className="tweet tweet-neu">
  <div className="tweet-profile">
    <div className="tweet-image"></div>
    <div className="tweet-username">
      <div>Eazy Labs</div>
      <div>@eazylabs</div>
    </div>
  </div>
  <div className="tweet-desc">
    It's like @Figma but you're actually building the site.
  </div>
</div>`,
  css: `.tweet {
  padding: 24px;
  border-radius: 8px;
  max-width: 280px;
}

.tweet-neu {
  color: #183153;
  background-color: #fff;
  border: 1px solid #183153;
  box-shadow: 4px 4px 0px 0px #183153;
}

.tweet-profile {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tweet-image {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
}

.tweet-username div:nth-child(1) {
  font-weight: 700;
}

.tweet-username div:nth-child(2) {
  font-weight: 500;
}

.tweet-desc {
  margin-top: 16px;
}`,
  element: TweetNeu,
};
