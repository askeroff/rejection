/* global beforeEach, describe, it, afterEach */

import { assert } from 'chai';
import { checkInputs, checkScore, prepareObjectForStorage, addToStorage } from './add';
import init from './init';

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
    const inputAccepted = addElement('input');
    const inputRejected = addElement('input');
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    inputAccepted.className = 'accepted-button add';
    inputRejected.className = 'rejected-button add';
    inputFirst.value = 'A girl out';
    inputSecond.value = 'My coworker';

    const result = prepareObjectForStorage(inputFirst.value,
                                           inputSecond.value,
                                           checkScore(inputAccepted));
    const negResult = prepareObjectForStorage(inputFirst.value,
                                              inputSecond.value,
                                              checkScore(inputRejected));

    const resultDate = new Date(result.date);
    resultDate.setHours(0, 0, 0, 0);

    assert.isObject(result, 'it is an object');
    assert.equal(result.askedWhat, inputFirst.value, 'askedWhat corresponds to the value of the first argument');
    assert.equal(result.askedWhom, inputSecond.value, 'askedWhom corresponds to the value of the second argument');
    assert.equal(result.answer, 1, 'answer is 1 when accepted button is passed (clicked)');
    assert.equal(negResult.answer, 10, 'answer is 10 when rejected button is passed (clicked)');
    assert.equal(resultDate.getTime(), today.getTime(), 'object is created with today`s date');
  });

  it('Adds prepareObjectForStorage to localStorage', () => {
    init();
    const inputFirst = addElement('input');
    const inputSecond = addElement('input');
    const inputAccepted = addElement('input');

    inputAccepted.className = 'accepted-button add';
    inputFirst.value = 'A girl out';
    inputSecond.value = 'My coworker';
    const result = prepareObjectForStorage(inputFirst.value,
                                           inputSecond.value,
                                           checkScore(inputAccepted));

    addToStorage(result);
    const newState = JSON.parse(localStorage.getItem('rejectionData'));
    assert.equal(JSON.stringify(newState.data[newState.data.length - 1]),
    JSON.stringify(result), 'added value matches the last item in the data array');
  });
});

