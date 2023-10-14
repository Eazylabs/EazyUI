import { IStyle } from '@site/src/utils/interfaces/style';
import { minify } from 'csso';

export function jsonToCss(json: IStyle) {
  const selectors = Object.keys(json);
  let cssString = '';

  selectors.forEach((selector) => {
    const definition = json[selector];
    const rules = Object.keys(definition);
    let ruleString = '';

    rules.forEach((rule) => {
      let value = definition[rule];

      rule = rule.replace(/([A-Z])/g, '-$1').toLowerCase(); // Ubah ke format dash-case
      ruleString += `${rule}:${value};`;
    });

    cssString += `${selector}{${ruleString}}`;
  });

  // Merapikan kode CSS
  cssString = cssString.replace(/\s+/g, ' ').trim();
  cssString = cssString.replace(/\s*{\s*/g, ' {\n\t');
  cssString = cssString.replace(/\s*}\s*/g, '}');
  cssString = cssString.replace(/\s*;\s*/g, ';\n\t');
  cssString = cssString.replace(/;}/g, '\n}');
  cssString = cssString.replace(/(^|[\n\r])\s*}(?![\t\s])/g, '\n}');

  let minifiedCss = minify(cssString).css;

  minifiedCss = cssString.replace(/}/g, '}\n').toString();

  return minifiedCss;
}
