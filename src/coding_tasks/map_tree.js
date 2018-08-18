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

function map(fn, tree) {
  if (!tree.children) {
    return { ...fn(tree) };
  }
  return { ...fn(tree), children: tree.children.map(item => map(fn, item)) };
}

const actual = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);
