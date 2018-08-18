const path = require("path");

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
          children: [{ meta: {}, name: "config.json", type: "file" }],
          meta: {},
          name: "CONSUL",
          type: "directory"
        }
      ],
      meta: {},
      name: "eTc",
      type: "directory"
    },
    { meta: {}, name: "coSTS", type: "file" }
  ],
  meta: {},
  name: "/",
  type: "directory"
};

function findFilesByName(tree, str) {
  const iter = (tree, innerAcc, currentPath = "/") => {
    const { type, name } = tree;

    let _currentPath = path.join(currentPath, name);

    if (type === "file" && name.includes(str)) {
      return [...innerAcc, _currentPath];
    }

    if (!tree.children) {
      return [...innerAcc];
    }

    return tree.children.reduce(
      (acc, item) => iter(item, acc, _currentPath),
      innerAcc
    );
  };

  return iter(tree, []);
}

//findFilesByName(tree, 'co');
