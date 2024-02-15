function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr: string = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    const reversedStr: string = cleanedStr.split('').reverse().join('');
   
    return cleanedStr === reversedStr;
}

const testString: string = "level";
console.log(isPalindrome(testString));