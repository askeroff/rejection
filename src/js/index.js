import css from 'raw-loader!../css/style.css'; // eslint-disable-line no-unused-vars
import {addEntry} from './add';

(function() {
  // our entry point. doesn't do much now, does it
  addEntry();
  return true;
}());