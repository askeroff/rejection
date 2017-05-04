/* global beforeEach, describe, it, afterEach */

import { assert } from 'chai'; // eslint-disable-line no-unused-vars
import renderData from './view';
import { prepareObjectForStorage, addToStorage } from './add';

describe('Rendering elements from localStorage', () => {
  let container;
  function addElement(tagName) { // eslint-disable-line no-unused-vars
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

  it('Function renderData takes data from localStorage and renders each item in li\'s.', () => {
    const dataForStorage = prepareObjectForStorage('whatAsked', 'whomAsked', 10);
    addToStorage(dataForStorage, 10);
    const state = JSON.parse(localStorage.getItem('rejectionData'));
    const spanScore = addElement('span');
    spanScore.className = 'overall-score';

    const list = addElement('ul');
    list.className = 'results';
    renderData();
    let everyWhom = true;
    let everyWhat = true;
    let checkAnswer = true;

    state.data.forEach((item, i) => {
      const listNodes = [].slice.call(document.querySelectorAll('.results li'));
      const answer = item.answer === 1 ? 'accepted' : 'rejected';
      if (listNodes[i].querySelector('.whom').innerHTML !== item.askedWhom) {
        everyWhom = false;
      }
      if (listNodes[i].querySelector('.what').innerHTML !== item.askedWhat) {
        everyWhat = false;
      }
      if (listNodes[i].querySelector('.result').innerHTML !== answer) {
        checkAnswer = false;
      }
    });

    assert.equal(everyWhom, true, 'span.whom equals to the i-th object`s askedWhom property');
    assert.equal(everyWhat, true, 'span.what equals to the i-th object`s askedWhat property');
    assert.equal(checkAnswer, true, 'span.result renders proper result (accepted/rejected)');
  });
});

