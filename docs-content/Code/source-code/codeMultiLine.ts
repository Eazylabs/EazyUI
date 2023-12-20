import CodeMultiLine from '../blocks/CodeMultiLine';

export const CODEMULTILINE = {
  html: `<div class="mockup-code">
  <div class="three-dots">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  <pre class='text-info'><code>~ npm run dev</code></pre>
  <pre class='text-success'><code>~ npm run dev</code></pre>
  <pre class='text-warning'><code>~ npm run dev</code></pre>
  <pre class='text-danger'><code>~ npm run dev</code></pre>
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

.text-info {
  color: #4ba3e3;
}

.text-success {
  color: #14b789;
}

.text-warning {
  color: #ffd43b;
}

.text-danger {
  color: #e03131;
}`,
  element: CodeMultiLine,
};
