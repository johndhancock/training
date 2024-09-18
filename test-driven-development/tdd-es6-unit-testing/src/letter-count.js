// 'cat' -> {c: 1, a: 1, t: 1}
// 'better' => { b: 1, e: 2, t:2, r:1}

export const getLetterCount = (string) => {
  const letters = string.split('');
  let letterCount = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {})
    
  return letterCount;
};