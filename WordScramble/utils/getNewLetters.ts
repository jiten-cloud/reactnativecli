const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = 'bcdfghjklmnpqrstvwxyz';
function getVowel() {
  return vowels[Math.floor(Math.random() * vowels.length)];
}
function getConsonant() {
  return consonants[Math.floor(Math.random() * consonants.length)];
}
function checkincludeConstant(letters: string[], letter: string) {
  let getIndex = letters.indexOf(letter);
  if (getIndex == -1) {
    letters.unshift(letter);
    console.log(letters);
    return letters;
  } else {
    let newalpha = getConsonant();
    checkincludeConstant(letters, newalpha);
  }
}
function getNewLetters(letters: string[]) {
  let slicedLetters = letters.slice(0, 5);
  let checkIsItIncludeVowel = slicedLetters.some(letter =>
    vowels.includes(letter),
  );
  if (!checkIsItIncludeVowel) {
    return [getVowel(), ...slicedLetters];
  } else {
    let consonant = getConsonant();

    checkincludeConstant(slicedLetters, consonant);
  }
}

export default getNewLetters;
