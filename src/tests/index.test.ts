import { expect } from 'chai';
import array_flatten from '../index';

describe('array_flatten', () => {
  it('returns empty array when input is []', () => {
    let result = array_flatten([], 0, []);
    expect(result.length).equal(0);
  });

  it('returns 123 sequence after join when input is [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const expected = '123';
    let result = array_flatten(input, 0, []);
    expect(result.join('')).equal(expected);
  });

  it('returns 12345 sequence after join when input is [1, 2, 3, [4, 5]]', () => {
    const input = [1, 2, 3, [4, 5]];
    const expected = '12345';
    let result = array_flatten(input, 0, []);
    expect(result.join('')).equal(expected);
  });

  it('returns 1234567 sequence after join when input is [1, 2, 3, [4, 5, [6, 7]]]', () => {
    const input = [1, 2, 3, [4, 5, [6, 7]]];
    const expected = '1234567';
    let result = array_flatten(input, 0, []);
    expect(result.join('')).equal(expected);
  });

  it('returns 1234567 sequence after join when input is [1, 2, 3, [4, 5], 6, 7]', () => {
    const input = [1, 2, 3, [4, 5], 6, 7];
    const expected = '1234567';
    let result = array_flatten(input, 0, []);
    expect(result.join('')).equal(expected);
  });
});