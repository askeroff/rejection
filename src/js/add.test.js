/* global global, describe, it, chai */

import {assert} from 'chai';
import {checkInputs} from './add';


describe('Accepted/Rejected Buttons', () => {
  let container;
  beforeEach(function() {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
    
  afterEach(function() {
    removeElement(container);
  });

  function addElement(tagName) {
    let elem = document.createElement(tagName);
    container.appendChild(elem);
    return elem;
  }

  function removeElement(element) {
      element.parentNode.removeChild(element);
  }

  it('length of asked and askee input equals or is more than 3', () => {

    const input_first = addElement('input');
    const input_second = addElement('input');

    input_first.value = ''; input_second.value = '';

    assert.equal(false, checkInputs(input_first, input_second), 'Empty inputs should not pass');

    input_first.value = 'Asked something'; input_second.value = 'Answer is';

    assert.equal(true, checkInputs(input_first, input_second), 'Filled inputs should pass');

    // to make sure that just spaces won't pass
    input_first.value = '    '; input_second.value = '  ';

    assert.equal(false, checkInputs(input_first, input_second), "Inputs filled only with spaces should fail");

  });
});

