/* global describe, it */

import { assert } from 'chai';
import init from './init';

describe('Initializing app', () => {
  it('State returns proper object from localstorage', () => {
    init();
    const stateFromStorage = JSON.parse(localStorage.getItem('rejectionData'));
    assert.isObject(stateFromStorage, 'it is an object');
    assert.property(stateFromStorage, 'data');
    assert.property(stateFromStorage, 'overAllPoints');
    assert.isArray(stateFromStorage.data, 'object`s data property is an array');
  });
});

