function $(selector) {
  return {
    element: selector,
    __proto__: $.fn
  };
}

$.fn = {
  toString() {
    console.log(this.element);
  },
  get length() {
    return this.element.length;
  }
};

// $("div").toString();

$.fn.max = function() {
  return "5";
};

console.log($("div").max());
console.log($("div").length);
