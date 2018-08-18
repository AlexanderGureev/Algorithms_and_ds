function calculateFilesCount(tree) {
  const reduce = (fn, tree, acc) => {
    const { type, children } = tree;
    let newAcc = fn(type, acc);

    if (!children) {
      return newAcc;
    }
    return tree.children.reduce((acc, item) => reduce(fn, item, acc), newAcc);
  };

  return reduce((type, acc) => (type === "file" ? acc + 1 : acc), tree, 0);
}

const res = tree.children
  .filter(i => i.type === "directory")
  .map(i => [i.name, calculateFilesCount(i)]);
