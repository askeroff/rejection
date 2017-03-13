/* global describe, it */

import {assert} from 'chai';
import index from './index';

describe('Index function', () => {
  describe('return', () => {
    it('should return 2', () => {
      assert.equal(2, index());
    });
  });
});