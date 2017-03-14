/* global global, describe, it */

import {assert} from 'chai';
import {checkInputs} from './add';

describe('Accepted/Rejected Buttons', () => {

  it('should make sure that asked and askee input are not empty', () => {

    const input_first = global.document.createElement('input');
    const input_second = global.document.createElement('input');
    input_first.value = 'test'; input_second.value = 'test';


    
    assert.equal(true, checkInputs(input_first, input_second));

  });

});