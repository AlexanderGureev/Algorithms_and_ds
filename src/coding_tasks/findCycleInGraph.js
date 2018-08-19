const deps2 = {
  mongo: [],
  tzinfo: ["thread_safe"],
  uglifier: ["execjs"],
  execjs: ["execjs", "thread_safe", "json"],
  redis: []
};

function findCycleInGraph(graph) {
  //есть недостатки, при нахождении цикла, продолжаем ходить по всем узлам до конца.
  const processed = new Map();
  let hasCycle = false;

  const isCycle = item => processed.get(item) === "gray";
  const changeColor = (item, color) => processed.set(item, color);

  const dfs = (keys = []) => {
    for (let i = 0; i < keys.length; i++) {
      if (isCycle(keys[i])) {
        return true;
      }
      changeColor(keys[i], "gray");
      hasCycle = dfs(graph[keys[i]]);
      changeColor(keys[i], "black");
    }
    return hasCycle;
  };

  return dfs(Object.keys(graph));
}

findCycleInGraph(deps2);
