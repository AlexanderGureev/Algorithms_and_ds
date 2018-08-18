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

function filter(fn, tree) {
  const _filter = (fn, tree) => {
    if (fn(tree)) {
      return { ...tree, children: tree.children.map(item => filter(fn, item)) };
    }
    return null;
  };

  if (!tree.children) {
    return { ..._filter(fn, tree) };
  }
  return {
    ..._filter(fn, tree),
    children: tree.children.map(item => filter(fn, item))
  };
}

const actual = filter(n => n.type === "directory", tree);
