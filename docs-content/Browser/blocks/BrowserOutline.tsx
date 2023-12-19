import React from 'react';
import '../styles/style.css';

export default function BrowserOutline() {
  return (
    <div className="mockup outline">
        <div className="browser-mockup outline">
            <div className="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                        d="M12.25 12.25L9.21838 9.21845M9.21838 9.21845C10.0389 8.39794 10.4998 7.2851 10.4998 6.12474C10.4998 4.96437 10.0389 3.85153 9.21838 3.03103C8.39788 2.21053 7.28504 1.74957 6.12468 1.74957C4.96431 1.74957 3.85147 2.21053 3.03097 3.03103C2.21047 3.85153 1.74951 4.96437 1.74951 6.12474C1.74951 7.2851 2.21047 8.39794 3.03097 9.21845C3.85147 10.0389 4.96431 10.4999 6.12468 10.4999C7.28504 10.4999 8.39788 10.0389 9.21838 9.21845Z"
                        stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input type="text" name="searching" id="" placeholder="https://eazyui.com" />
            </div>
        </div>
    </div>
  );
}
