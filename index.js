// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

// function reverseString(str) {
//   const strArr = str.split('');
//   strArr.reverse();
//   return strArr.join('');
// }

/////////////////////////////////////////

// function reverseString(str) {
//    return str
//     .split('')
//     .reverse()
//     .join('');
// }

/////////////////////////////////////////

// function reverseString(str){
//   let revString = '';
//   for(let i = str.length -1; i >= 0; i--){
//      revString = revString + str[i];
//   }
//   return revString;
// }

// function reverseString(str){
//   let revString = '';
//   for(let i = 0; i <= str.length -1; i++){
//      revString = str[i] + revString;
//   }
//   return revString;
// }

/////////////////////////////////////////////



// function reverseString(str){
//   let revString = '';
//   for(let char of str){
//       revString = char + revString;
//   }
//   return revString;
// }

// function reverseString(str){
//   let revString = '';
//   str.split('').forEach(char => revString = char + revString);

//   return revString;
// }

// function reverseString(str){
//   return str.split().reduce((revString, char) => char +
// revString, '');
// }


// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false



// function isPalindrome(str){
//   let revString = str.split('')
//   .reverse()
//   .join('');

//   return revString === str;
// }



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

// function reverseInt(int){
//   const revString = int.toString().split('').reverse().join('');

//   return parseInt(revString);
// }



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'


// function capitalizeLetters(str){
//   const strArr = str.toLowerCase().split(' ');
  
//   for(let i = 0; i < strArr.length; i++){
//      strArr[i] = strArr[i].substring(0, 1).toUpperCase() +
//      strArr[i].substring(1);
//   }

//   return strArr.join(' ');
// }

////////////////////////////////////////////////////////////////

// function capitalizeLetters(str){
//   return str
//     .toLowerCase()
//     .split(' ')
//     .map(function(word){
//       return word[0].toUpperCase() + word.substring(1);
//     })
//     .join(' ');
// }




// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz(){
  for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0 ){
       console.log('FizzBuzz')
    }
    else if(i % 3 === 0){
      console.log('Fizz');
    } else if(i % 5 === 0){
      console.log(' Buzz')
    }
     else{
      console.log(i);
    }
  }
}



// // Call Function for solution two
// const output = isPalindrome('racecar');

// console.log(output);

// call function

const output = fizzBuzz();

console.log(output);