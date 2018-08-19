import url from "url";
import http from "http";

const getTitle = body => body.match(/<h1>(.*?)<\/h1>/)[1];
const getLinks = body =>
  (body.match(/href="\/(.*?)">/g) || []).map(
    item => item.match(/href="\/(.*?)">/)[1]
  );

const once = fn => {
  let call = false;
  return (...args) => {
    if (call) {
      return;
    }
    call = true;
    return fn(...args);
  };
};

function solution(title, address, callback) {
  const { pathname, protocol, host } = url.parse(address);
  let checked = new Set();
  let onceCallback = once(callback);

  const iter = links => {
    if (!links.length) {
      return onceCallback(new Error("not found"));
    }
    let [first, ...rest] = links;

    if (checked.has(first)) {
      return iter(rest);
    }
    let addr = url.format({ protocol, host, pathname: first });

    http.get(addr, res => {
      const body = [];
      res
        .on("data", chunk => {
          body.push(chunk.toString());
        })
        .on("end", () => {
          const html = body.join();
          let str = getTitle(html);
          checked.add(first);

          if (str === title) {
            return onceCallback(null, addr);
          }

          let links = getLinks(html);
          iter([...links, ...rest]);
        });
    });
  };

  iter([pathname]);
}
