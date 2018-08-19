// function shiftVowel([...str]) { //попарная замена через стек
//   const stack = [],
//         vowel = new Set(["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"]);

//   str.forEach((s, i) => {
//     if (!stack.length && vowel.has(s)) {
//       stack.push(i);
//     } else if (vowel.has(s)) {
//       let index = stack.pop();
//       [str[index], str[i]] = [str[i], str[index]];
//     }
//   });
//   return str.join("");
// }

function shiftVowel([...str]) { //поочередная замена без стека
  let index,
      vowel = new Set(["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"]);

  str.forEach((s, i) => {
    if (vowel.has(s)) {
      if (index !== undefined) {
        [str[index], str[i]] = [str[i], str[index]];
      }
      index = i;
    }
  });
  return str.join("");
}
//shiftVowel("внедорожник"); //внодерижнок
shiftVowel("омега"); //емаго
