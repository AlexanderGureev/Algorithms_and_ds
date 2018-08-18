function downcaseFileNames(tree) {
  const deepCopy = tree => {
    if (!tree.children) {
      return { ...tree };
    }
    return { ...tree, children: tree.children.map(deepCopy) };
  };

  const dfs = node => {
    const { type, name, children } = node;

    if (type === "file") {
      node.name = name.toLowerCase();
    }
    if (!children) {
      return;
    }

    return children.forEach(dfs);
  };

  const copyTree = deepCopy(tree);
  dfs(copyTree);

  return copyTree;
}

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
downcaseFileNames(tree);