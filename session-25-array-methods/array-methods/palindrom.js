function palindrom(word) {
    word=word.toLowerCase(); //convertInto LowerCase
    let array = word.split(''); // creates an array [ 'm', 'a', 'd', 'a', 'm' ]
    let reverse = array.reverse(); // have reversed array
    let reverseWord = reverse.join(''); // covert array into string

    // let reverseWord = word.toLowerCase().split('').reverse().join('');
    if (word == reverseWord)
        console.log(`${word} is Palindrome`);
    else
        console.log(`${word} is not Palindrome`);
}

palindrom("Madam");
palindrom("Hello");
palindrom("Malayalam");
palindrom("Nitin");