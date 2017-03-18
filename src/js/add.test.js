/* global beforeEach, describe, it, afterEach */

import {assert} from 'chai';
import {checkInputs, checkScore, prepareObjectForStorage} from './add';


describe('Accepted/Rejected Buttons', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
    
  afterEach(() => {
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

    assert.equal(false, checkInputs(input_first, input_second), 'Inputs filled only with spaces should fail');

  });

  it('should give the right score for accepted and rejected buttons', () => {
    const input_first = addElement('input');
    const input_second = addElement('input');
    input_first.className = 'accepted-button add';
    input_second.className = 'rejected-button add';

    assert.equal(1, checkScore(input_first), 'should give 1 for accepted');
    assert.equal(10, checkScore(input_second), 'should give 10 for rejected');
  });

  it('should return a properly formatted object', () => {
    const input_first = addElement('input');
    const input_second = addElement('input');
    input_first.value = 'A girl out'; input_second.value = 'My coworker';
    const result = prepareObjectForStorage(input_first.value, input_second.value);

    assert.isObject(result, 'it is an object');

    assert.property(result, 'data', 'object has data property');

    assert.property(result, 'overallPoints', 'object has points property');

    assert.isObject(result.data, 'data property should be an object');

    assert.property(result.data, 'askedWhat', 'result.data has askedWhat property');
    assert.property(result.data, 'askedWhom', 'result.data has askedWhom property');
    assert.property(result.data, 'answer', 'result.data has answer property');
    assert.property(result.data, 'date', 'result.data has date property');
    assert.property(result.data, 'points', 'result.data has points property');

    assert.equal(input_first.value, result.data.askedWhat, 'askedWhat property equals first @param value');
    assert.equal(input_second.value, result.data.askedWhom, 'askedWhat property equals second @param value');

  });

});

