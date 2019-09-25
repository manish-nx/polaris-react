<<<<<<< HEAD
import {names} from './color-map';
import {RGBColor, RGBAColor} from './color-types';

export const nameHexMap: Record<string, string> = names;
const SIX_DIGIT_HEX = '[0-9A-F]{6}$';
const THREE_DIGIT_HEX = '[0-9A-F]{3}$';
const HEX_REGEX = new RegExp(
  `(^#${SIX_DIGIT_HEX})|(^#${THREE_DIGIT_HEX})`,
  'i',
);
const HASHLESS_HEX_REGEX = new RegExp(
  `(^${SIX_DIGIT_HEX})|(^${THREE_DIGIT_HEX})`,
  'i',
);
=======
import {names} from 'tinycolor2';
import {RGBColor, RGBAColor} from './color-types';

export const nameHexMap: Record<string, string> = names;
export const TRANSPARENT = 'rgba(0,0,0,0)';
const IS_RGB_STRING_REGEX = /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/i;
>>>>>>> Add named colours

// implements: https://www.w3.org/WAI/ER/WD-AERT/#color-contrast
export function isLight({red, green, blue}: RGBColor | RGBAColor): boolean {
  const contrast = (red * 299 + green * 587 + blue * 114) / 1000;
  return contrast > 125;
}

export function isDark(color: RGBColor | RGBAColor): boolean {
  return !isLight(color);
}

export function isColorName(value: string) {
<<<<<<< HEAD
  return Boolean(nameHexMap[value]);
}

export function isHexString(value: string) {
  return HEX_REGEX.test(value);
}

export function isHashlessHex(value: string) {
  return HASHLESS_HEX_REGEX.test(value);
}

export function isRgbString(value: string) {
  return /rgb\(\s*(0*((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?)){2}(0*(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?))\s*,?\s*([01]\.?\d*?)?\s*\)/i.test(
    value,
  );
=======
  if (nameHexMap[value]) {
    return true;
  }
  return false;
}

export function isHexString(value: string) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
}

export function isHashlessHex(value: string) {
  return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(value);
}

export function isRgbString(value: string) {
  return IS_RGB_STRING_REGEX.test(value);
}
export function isTransparentUserInput(value: string) {
  return value === 'transparent' || value === TRANSPARENT;
>>>>>>> Add named colours
}
