export function generateRandomAlphabets() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const randomVowel = vowels[Math.floor(Math.random() * vowels.length)];
  let randomConsonants = '';
  while (randomConsonants.length < 5) {
    const randomIndex = Math.floor(Math.random() * consonants.length);
    const randomConsonant = consonants[randomIndex];
    if (!randomConsonants.includes(randomConsonant)) {
      randomConsonants += randomConsonant;
    }
  }
  const randomAlphabets = randomVowel + randomConsonants;
  return randomAlphabets.split('');
}
