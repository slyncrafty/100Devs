//Chapter08_Work with strings

// Word info
// Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
let word = prompt("Enter a word")
console.log(`Length: ${word.length}; Lowercase: ${word.toLowerCase()}; Uppercase: ${word.toUpperCase()}}`)

// Vowel count
// Improve the previous program so that it also shows the number of vowels inside the word.
let vowelMatch = 'aeiuo'
let vowels = Array.from(word).filter(char => vowelMatch.includes(char)).length;
console.log(`Number of vowels: ${vowels}`);

// Backwards word
// Improve the previous program so that it shows the word written backwards.
let backwords = word.split('').reverse().join('');
console.log(backwords);

// Palindrome
// Improve the previous program to check if the word is a palindrome. 
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// For example, "radar" should be detected as a palindrome, "Radar" too.
function removePunctuation(str) {
    return str.split('').filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    }).join('').toLowerCase()
}
let palindrome = removePunctuation(word.split('').reverse().join(''));
let word_trimmed =removePunctuation(word)
console.log(`The word is palindrome? ${word_trimmed} , ${palindrome}, ${word_trimmed === palindrome}`)