import ProgressDanger from '../blocks/ProgressDanger';

export const PROGRESSDANGER = {
  html: `<div className='progress progress-danger' data-value='0'></div>
<div className='progress progress-danger' data-value='25'></div>
<div className='progress progress-danger' data-value='50'></div>
<div className='progress progress-danger' data-value='75'></div>
<div className='progress progress-danger' data-value='100'></div>`,
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

div[data-value='0'].progress-danger::before {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: #e03131;
  border-radius: 99px;
}

div[data-value='25'].progress-danger::before {
  content: '';
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #e03131;
  border-radius: 99px;
}

div[data-value='50'].progress-danger::before {
  content: '';
  position: absolute;
  width: 50%;
  height: 100%;
  background-color: #e03131;
  border-radius: 99px;
}

div[data-value='75'].progress-danger::before {
  content: '';
  position: absolute;
  width: 75%;
  height: 100%;
  background-color: #e03131;
  border-radius: 99px;
}

div[data-value='100'].progress-danger::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e03131;
  border-radius: 99px;
}`,
  element: ProgressDanger,
};
