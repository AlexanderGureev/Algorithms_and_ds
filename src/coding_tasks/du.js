const tree = {
  children: [
    {
      children: [
        {
          children: [],
          meta: {},
          name: "NgiNx",
          type: "directory"
        },
        {
          children: [
            { meta: { size: 3200 }, name: "config.json", type: "file" }
          ],
          meta: {},
          name: "CONSUL",
          type: "directory"
        }
      ],
      meta: {},
      name: "eTc",
      type: "directory"
    },
    { meta: { size: 1200 }, name: "hoSTS", type: "file" },
    { meta: { size: 2200 }, name: "resolve", type: "file" }
  ],
  meta: {},
  name: "/",
  type: "directory"
};

function du(tree) {
  const fn = (type, size, acc) => (type === "file" ? acc + size : acc);

  const reduce = (fn, tree, acc) => {
    const { type, children, meta } = tree;
    let newAcc = fn(type, meta.size, acc);

    if (!children) {
      return newAcc;
    }
    return tree.children.reduce((acc, item) => reduce(fn, item, acc), newAcc);
  };

  return tree.children
    .map(i => [i.name, reduce(fn, i, 0)])
    .sort(([, a], [, b]) => b - a);
}

du(tree);
