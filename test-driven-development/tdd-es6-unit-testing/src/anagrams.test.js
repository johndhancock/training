import { expect } from 'chai';
import { findAnagrams } from './anagrams';

describe('findAnagrams - basic functionality', () => {
  it('returns true if both words contain the same letters in a different order', () => {
    const expected = true;
    const actual = findAnagrams('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false if one word has a letter the other word does not', () => {
    const expected = false;
    const actual = findAnagrams('elbows', 'below');
    expect(actual).to.equal(expected);
  });

  it('returns false if two strings have the same letters but not the same count of letters', () => {
    const expected = false;
    const actual = findAnagrams('listens', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns true if two strings are anagrams but one of them has spaces that are ignored', () => {
    const expected = true;
    const actual = findAnagrams('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  it('returns true if two strings are anagrams but and case is ignored', () => {
    const expected = true;
    const actual = findAnagrams('STATE', 'taste');
    expect(actual).to.equal(expected);
  });
});
