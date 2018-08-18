function dfc(tree) {
  const [name, children] = tree;
  console.log(name);

  if (!children) {
    return;
  }
  return children.forEach(dfc);
}

const tree = ["A", [["B", [["E"], ["F"]]], ["C"], ["D", [["G"], ["J"]]]]];
dfc(tree);
