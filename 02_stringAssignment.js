/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
/******Example 1 : Given a string s consisting of words and spaces, return the length of the last word in the string***************************************************************************************************************************************************************************************/
let s = "Hello World";
let Arr = s.split(" ");
let lastword = (Arr[Arr.length-1]);
console.log(lastword);
console.log(lastword.length);

/******************************************************************************************************************************** */
/**********Example 2: ************************************************************************************ */
let s1 = "   fly me   to   the moon  "; 
let Arr1 = s1.trim().split(" ");
let last_word = (Arr1[Arr1.length-1]);
console.log(last_word);
console.log(last_word.length);

/******************************************************************************************************************************** */
/**********Example 3:function to check if two strings are anagrams ************************************************************************************ */
let A1 =["listen" , "silent"];
let A2 =["hello" , "world"];

function Anagramcheck1() {
    if (A1[0].length != A1[1].length){
        console.log(`The given words ${A1} are not Anagrams`);
    }
else if (A1[0].length == A1[1].length){
    let word1 = A1[0].split("");
    let sortedword1 = word1.sort();

    let word2 = A1[1].split("");
    let sortedword2 = word2.sort();


      if(JSON.stringify(sortedword1) == JSON.stringify(sortedword2)){
        console.log(`the words ${A1} are Anagrams`);
    }
        else{
            console.log(`the words in ${A1} are not Anagrams`);

        }
    

    }
}

function Anagramcheck2() {
    if (A2[0].length != A2[1].length){
        console.log(`The given words ${A2} are not Anagrams`);
    }
    else if (A2[0].length == A2[1].length){
        let word1 = A2[0].split("");
        let sortedword1 = word1.sort();
    
        let word2 = A2[1].split("");
        let sortedword2 = word2.sort();
    
    
          if(JSON.stringify(sortedword1) == JSON.stringify(sortedword2)){
            console.log(`the words ${A2} are Anagrams`);
        }
            else{
                console.log(`the words in ${A2} are not Anagrams`);
    
            }
        
    
        }
    }
    Anagramcheck1();
    Anagramcheck2();

    /******************************************************************************************************************************** */
    /**********Example 4:given string is palindrome ************************************************************************************ */
    console.log("++++++++++++ Exercise 4-Palindrome ++++++++++++");
    function checkPalindrome(str) {
        let reversedString = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedString = reversedString + str[i];
        }
        if (reversedString === str)
            return "the given string is a: palindrome";
        else
            return "the given string is not a: palindrome";
    }
    console.log(checkPalindrome("LakskaL"));

        
      

    

