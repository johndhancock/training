import { getLetterCount } from './letter-count';
import _ from 'lodash';

export const findAnagrams = (string1, string2) => {
  const count1 = getLetterCount(string1.replaceAll(' ', '').toLowerCase());
  const count2 = getLetterCount(string2.replaceAll(' ', '').toLowerCase());

  return (_.isEqual(count1, count2));
}