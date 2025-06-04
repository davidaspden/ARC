// Export utility functions to a separate module
export const alphabet = [];
export const words = [];
export const letterPrimeMap = {};

export function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function buildData(data) {
  for (const key in data) {
    words.push({
      word: key,
      score: scoreWord(key),
    });
  }
}

export function scoreWord(word) {
  let score = 1;
  for (let i = 0; i < word.length; i++) {
    score *= letterPrimeMap[word[i].toUpperCase()];
  }
  return score;
}

export function factorWord(word) {
  let factors = [];
  for (let i = 0; i < word.length; i++) {
    factors.push(letterPrimeMap[word[i].toUpperCase()]);
  }
  return factors;
}

export function uniqueFactors(factors) {
  let unique = [];
  for (let i = 0; i < factors.length; i++) {
    if (!unique.includes(factors[i])) {
      unique.push(factors[i]);
    }
  }
  return unique;
}

export function multiplyLetters(word) {
  let added = [];
  let score = scoreWord(word);
  for (let i = 0; i < Object.values(letterPrimeMap).length; i++) {
    added.push(score * Object.values(letterPrimeMap)[i]);
  }
  return added;
}

export function makeIndex(data) {
  const index = {};
  for (let i = 0; i < data.length; i++) {
    const word = data[i].word;
    const score = data[i].score;
    if (!index[score]) {
      index[score] = [];
    }
    index[score].push(word);
  }
  return index;
}