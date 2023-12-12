import React from 'react';
import '../styles/style.css';

export default function TweetDark() {
  return (
    <div className='tweet tweet-dark'>
      <div className='tweet-profile'>
        <div className='tweet-image'></div>
        <div className='tweet-username'>
          <div>Eazy Labs</div>
          <div>@eazylabs</div>
        </div>
      </div>
      <div className='tweet-desc'>It's like @Figma but you're actually building the site.</div>
    </div>
  );
}
