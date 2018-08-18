const inverseString = str =>
  [...str].reduce((acc, curr) => {
    return `${curr}${acc}`;
  }, "");

function inverseString(str) {
  let resStr = [...str];

  if (!str) return "";

  for (let i = 0; i < resStr.length / 2; i++) {
    [ resStr[i], resStr[resStr.length - 1 - i] ] = [ resStr[resStr.length - 1 - i], resStr[i] ];
  }

  return resStr;
}

function inverseString(str) {
  function _rev(s, tail) {
    return s === "" ? tail : _rev(s.substring(1), str[0] + tail);
  }
  return _rev(str, "");
}

inverseString("alerts");
