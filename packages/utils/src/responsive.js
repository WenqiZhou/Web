const _ = {
  camelCase: require('lodash/camelCase')
};

/**
 * 获取element的具体某个属性,主要是实际尺寸
 * @param element element
 * @param prop string
 * @returns {*}
 */
export const style = (element, prop) => {
  if (typeof window !== 'object') return;
  if (window.getComputedStyle) {
    return window.getComputedStyle(element)[_.camelCase(prop)];
  } else {
    return element.currentStyle[prop];
  }
};

// 获取基本缩放font-size
export const root = () => {
  if (typeof window !== 'object') return;
  const html = window.document.getElementsByTagName('html')[0];
  return Number(style(html, 'font-size').replace(/px$/, ''));
};

/**
 * 用来获取不需要太高精度的尺寸,直接输入rem的数字,返回尺寸
 * @param rem number
 * @returns {number}
 */
export const size = (rem) => {
  return Number(rem) * root();
};
