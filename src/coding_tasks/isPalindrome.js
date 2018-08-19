function isPalindrome(str) {
  const iter = subStr => {
    if (subStr.length < 2) {
      return true;
    }
    if (subStr[0] === subStr[subStr.length - 1]) {
      return iter(subStr.substr(1, subStr.length - 2));
    }
    return false;
  };

  return iter(str);
}

isPalindrome("radar"); // => true
isPalindrome("a"); // => true
isPalindrome("abs"); // => false
