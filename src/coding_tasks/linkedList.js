function Node(value = "", next = null) {
  return {
    value,
    next
  };
}

function forList(head) {
  if (!head) {
    return;
  }
  const iter = (head, acc) => {
    acc = [...acc, head.value];
    let tail = head.next;

    if (!tail) {
      return acc;
    }
    return iter(tail, acc);
  };
  return iter(head, []);
}

// function reverseList(head) {

// 	const rev = (head, acc) => {
//     let _h = { ...head };
//     let tail = { ...head.next};

//     if(tail.next) {
//       acc = rev(tail, acc);
//     }
//     acc.next = { ..._h };
//     acc.next.next = null;
//     acc.value = tail.value;

//     return acc.next;
//   };

//   let revNode = new Node();
// 	rev(head, revNode);

//   return revNode;
// }

function reverseList(head) {
  if (!head.next) {
    return head;
  }
  if (!head) {
    return;
  }

  const rev = (head, tail) => {
    const _h = { ...head };
    const _copyT = { ...tail };

    _h.next = null;
    _copyT.next = _h;

    if (!tail.next) {
      return _copyT;
    }
    return rev(_copyT, tail.next);
  };

  return rev({ ...head, next: null }, head.next);
}

let head = new Node("1", new Node("2", new Node("3", new Node("4", null))));
forList(head);
let revNode = reverseList(head);
forList(head);
forList(revNode);
console.log(head === revNode);
