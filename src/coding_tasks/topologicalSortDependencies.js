// Реализуйте и экспортируйте по умолчанию функцию sortDeps, 
// которая принимает на вход список зависимостей и возвращает список (массив) отсортированных узлов.
// Пример:

const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['execjs', 'thread_safe', 'json'],
  redis: [],
};

// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
// Независимые библиотеки и цепочки библиотек должны быть в порядке, соответствующему порядку элементов в графе зависимостей.

function sortDeps(deps) {
  const stack = [],
        processed = new Map(), //хранит все посещаемые вершины и их статус (цвет)
        keysDeps = Object.keys(deps);

  const checkColor = key => {
    if (processed.get(key) === "gray") {
      throw new Error("Graph has cycle");
    }
    if (processed.get(key) === "black") {
      return false;
    }
    return true;
  }

  const topSort = keys => { //перебираем каждый ключ
    keys.forEach(key => {
      if (!checkColor(key)) { //проверяем какого цвета вершина (белый, серый, черный)
        return;
      }
      processed.set(key, "gray"); //при первом посещении вершина меняем цвет на серый (в процессе обработки)
      dfs(deps[key]); //запускает обход в глубину для всех детей
      stack.push(key); //после обхода всех детей пушим вершину в стек
      processed.set(key, "black"); //меняем цвет на черный - обработано
    });
    return stack;
  };

  const dfs = children => { //обход в глубину для всех детей
    if (!children.length) {
      return;
    }
    children.forEach(key => { //перебор детей
      if (!checkColor(key)) { //проверка на цикл и обработанность текущей вершины
        return;
      }
      if (deps[key]) { //если у этой вершины есть свои дети, запускаем обход в глубину для них
        processed.set(key, "gray");
        dfs(deps[key]);
      }
      stack.push(key);
      processed.set(key, "black");
    });
  };

  return topSort(keysDeps); //запускаем сортировку передавая массив ключей 
}

const sortDepsTruncated = (deps) => { //укороченный вариант, нет проверки на цикличность графа
  const add = (acc, node) => {
    const subDeps = deps[node];
    const subAcc = subDeps ? subDeps.reduce(add, []) : [];
    return { ...acc, ...subAcc, [node]: true };
  };
  const set = Object.keys(deps).reduce(add, {});
  return Object.keys(set);
};

//последняя версия 
function sortDeps(deps) {

  const stack = [],
        processed = new Map(), //хранит все посещаемые вершины и их статус (цвет)
        keysDeps = Object.keys(deps);

  const checkColor = key => {
    if (processed.get(key) === "gray") {
      throw new Error("Graph has cycle");
    }
    if (processed.get(key) === "black") {
      return false;
    }
    return true;
  }

  const dfs = children => { //обход в глубину для всех детей
    children.forEach(key => { //перебор детей
      if (!checkColor(key)) { //проверка на цикл и обработанность текущей вершины
        return;
      }
      if (deps[key]) { //если у этой вершины есть свои дети, запускаем обход в глубину для них
        processed.set(key, "gray");
        dfs(deps[key]);
      }
      stack.push(key);
      processed.set(key, "black");
    });
    return stack;
  };

  return dfs(keysDeps); //запускаем сортировку передавая массив ключей 
}

console.log(sortDeps(deps1));