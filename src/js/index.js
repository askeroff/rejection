/*eslint-disable */
import css from 'raw-loader!../css/style.css';
/*eslint-enable */

import { addEntry } from './add';
import init from './init';
import renderData from './view';

init();
addEntry();
renderData();
