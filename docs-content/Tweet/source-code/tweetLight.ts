import TweetLight from '../blocks/TweetLight';

export const TWEETLIGHT = {
  html: `<div class="tweet tweet-light">
  <div class="tweet-profile">
    <div class="tweet-image"></div>
    <div class="tweet-username">
      <div>Eazy Labs</div>
      <div>@eazylabs</div>
    </div>
  </div>
  <div class="tweet-desc">
    It's like @Figma but you're actually building the site.
  </div>
</div>`,
  css: `.tweet {
  padding: 24px;
  border-radius: 8px;
  max-width: 280px;
}

.tweet-light {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  element: TweetLight,
};
