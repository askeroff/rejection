/* global beforeEach, describe, it, afterEach */

import { assert } from 'chai';
import { checkInputs, checkScore, prepareObjectForStorage } from './add';


describe('Accepted/Rejected Buttons', () => {
  let container;
  function addElement(tagName) {
    const elem = document.createElement(tagName);
    container.appendChild(elem);
    return elem;
  }

  function removeElement(element) {
    element.parentNode.removeChild(element);
  }

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    removeElement(container);
  });

  it('checkInputs function should make sure that inputs are not empty', () => {
    const inputFirst = addElement('input');
    const inputSecond = addElement('input');

    inputFirst.value = ''; inputSecond.value = '';
    assert.equal(false, checkInputs(inputFirst, inputSecond), 'Empty inputs should not pass');

    inputFirst.value = 'Asked something'; inputSecond.value = 'Answer is';
    assert.equal(true, checkInputs(inputFirst, inputSecond), 'Filled inputs should pass');

    inputFirst.value = '    '; inputSecond.value = '  ';
    assert.equal(false, checkInputs(inputFirst, inputSecond), 'Inputs filled only with spaces should fail');
  });

  it('checkScore should give the right score for accepted and rejected buttons', () => {
    const inputFirst = addElement('input');
    const inputSecond = addElement('input');
    inputFirst.className = 'accepted-button add';
    inputSecond.className = 'rejected-button add';

    assert.equal(1, checkScore(inputFirst), 'should give 1 for accepted');
    assert.equal(10, checkScore(inputSecond), 'should give 10 for rejected');
  });

  it('prepareObjectForStorage should return a properly formatted object', () => {
    const inputFirst = addElement('input');
    const inputSecond = addElement('input');
    inputFirst.value = 'A girl out'; inputSecond.value = 'My coworker';
    const result = prepareObjectForStorage(inputFirst.value, inputSecond.value);

    assert.isObject(result, 'it is an object');
  });
});

