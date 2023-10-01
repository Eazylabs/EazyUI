import { hexToRGBA } from '@site/src/utils/service';

export const useUnitFilter = ({ name, value }, data): [string, string] => {
  const propertyWithoutUnit: Array<string> = [
    'backgroundColor',
    'color',
    'borderColor',
    'borderStyle',
    'borderPosition',
    'shadowOpacity',
    'fontWeight',
    'textTransform',
  ];

  if (name == 'borderWidth') {
    return [
      `border${data.borderPosition ? (data.borderPosition !== 'All' ? data.borderPosition : '') : ''}Width`,
      `${value}px`,
    ];
  }

  // if (name == 'borderPosition')
  if (['shadowColor', 'shadowBlur', 'shadowSpread', 'shadowX', 'shadowY'].includes(name)) {
    if (value == 0) return [name, 'none'];

    if (data.boxShadow) {
      const [shadowX, shadowY, shadowBlur, shadowSpread, shadowColor] = data.boxShadow.split(' ');
      if (name == 'shadowX') {
        console.log('jalan');
        return ['boxShadow', `${value}px ${shadowY} ${shadowBlur} ${shadowSpread} ${shadowColor}`];
      } else if (name == 'shadowY') {
        return ['boxShadow', `${shadowX} ${value}px ${shadowBlur} ${shadowSpread} ${shadowColor}`];
      } else if (name == 'shadowBlur') {
        return ['boxShadow', `${shadowX} ${shadowY} ${value}px ${shadowSpread} ${shadowColor}`];
      } else if (name == 'shadowSpread') {
        return ['boxShadow', `${shadowX} ${shadowY} ${shadowBlur} ${value}px ${shadowColor}`];
      } else if (name == 'shadowColor') {
        return [
          'boxShadow',
          `${shadowX} ${shadowY} ${shadowBlur} ${shadowSpread} ${hexToRGBA(
            value,
            data.shadowOpacity ? parseInt(data.shadowOpacity) / 100 : 0.5,
          )}`,
        ];
      }
    }
  }
  //   return [`border${data.borderPosition === 'all' || data.borderPosition === undefined ? '' : value}Width`, `${10}px`];

  if (propertyWithoutUnit.includes(name)) return [name, value];
  if (name === 'rotate') return ['transform', `rotate(${value}deg)`];

  return [name, value + 'px'];
};
