import { css } from 'lit';
import { bg } from './colors.js';

const _utils = new Map([[bg.name, bg.css]]);

export class VmCssUtils {
  static get(name) {
    if (!name || !_utils.has(name)) return css``;
    return _utils.get(name);
  }
}
