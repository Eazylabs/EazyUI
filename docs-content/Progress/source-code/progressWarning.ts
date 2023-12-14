import ProgressWarning from '../blocks/ProgressWarning';

export const PROGRESSWARNING = {
  html: `<div className='progress progress-warning' data-value='0'></div>
<div className='progress progress-warning' data-value='25'></div>
<div className='progress progress-warning' data-value='50'></div>
<div className='progress progress-warning' data-value='75'></div>
<div className='progress progress-warning' data-value='100'></div>`,
  css: `.progress {
  position: relative;
  margin-bottom: 16px;
  height: 10px;
  width: 100%;
  border-radius: 99px;
  position: relative;
  background-color: #f8f8f8;
  overflow: hidden;
}

div[data-value='0'].progress-warning::before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: #ffd43b;
  border-radius: 99px;
}

div[data-value='25'].progress-warning::before {
  content: '';
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #ffd43b;
  border-radius: 99px;
}

div[data-value='50'].progress-warning::before {
  content: '';
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #ffd43b;
  border-radius: 99px;
}

div[data-value='75'].progress-warning::before {
  content: '';
  position: absolute;
  width: 75%;
  height: 100%;
  background-color: #ffd43b;
  border-radius: 99px;
}

div[data-value='100'].progress-warning::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffd43b;
  border-radius: 99px;
}`,
  element: ProgressWarning,
};
