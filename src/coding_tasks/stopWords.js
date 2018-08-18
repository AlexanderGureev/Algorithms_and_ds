const stopWords = ["and", "or", "a", "the", ""];
const words = [
  "HellO",
  "h",
  "And",
  "heLlo",
  "",
  "AND",
  "DOG",
  "oR",
  "cat",
  "HELLO",
  "caT"
];

function wordsCount(listWords, listStopWords) {
  let resMap = listWords.filter(
    word => !stopWords.includes(word.toLowerCase())
  );

  resMap = resMap.map(word => [
    word.toLowerCase(),
    words.reduce((acc, curr) => {
      return curr.toLowerCase() === word.toLowerCase() ? acc + 1 : acc;
    }, 0)
  ]);

  return new Map(resMap);
}

wordsCount(words, stopWords);
