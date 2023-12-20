import CodeHighlight from '../blocks/CodeHighlight';

export const CODEHIGHLIGHT = {
  html: `<div class="mockup-code">
  <div class="three-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <pre><code>~ npm i axios</code></pre>
  <pre><code>~ installing...</code></pre>
  <pre class='danger'><code>~ error</code></pre>
</div>`,
  css: `.mockup-code {
  background-color: #183153;
  border-radius: 8px;
  color: #f1f5f9;
  padding-bottom: 8px;
  width: min(100%, 400px);
}

.three-dots {
  padding: 16px 16px 8px 16px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #6b7280;
  margin: 0 4px;
  display: inline-block;
}

pre {
  padding: 8px 16px;
}

.info {
  background-color: #4ba3e3;
  color: #fff;
}

.success {
  background-color: #14b789;
  color: #fff;
}

.warning {
  background-color: #ffd43b;
  color: #183153;
}

.danger {
  background-color: #e03131;
  color: #fff;
}`,
  element: CodeHighlight,
};
