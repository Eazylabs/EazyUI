import { hexToRGBA } from '../service';

export const useValueFilter = (property, value) => {
  if (!value) return 0;

  const propertyWithoutPixel = [
    'color',
    'borderStyle',
    'borderPosition',
    'backgroundColor',
    'borderColor',
    'shadowColor',
    'shadowOpacity',
  ];

  if (propertyWithoutPixel.includes(property)) {
    return value;
  }

  if (property.includes('shadow')) {
    const [shadowX, shadowY, shadowBlur, shadowSpread, shadowColor] = value.split(' ');

    console.log(shadowX, shadowY, shadowBlur, shadowSpread, shadowColor);
    if (property == 'shadowX') return shadowX.toString().replace(/[^0-9.]+/, '');
    if (property == 'shadowY') return shadowY.toString().replace(/[^0-9.]+/, '');
    if (property == 'shadowBlur') return shadowBlur.toString().replace(/[^0-9.]+/, '');
    if (property == 'shadowSpread') return shadowSpread.toString().replace(/[^0-9.]+/, '');
    if (property == 'shadowColor') return hexToRGBA(shadowColor, 1);
  }
  return value.toString().replace(/[^0-9.]+/, '');
};
