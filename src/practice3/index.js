export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";

  // TODO feedback: 这个场景下，fetch的第二个参数不传也OK的
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((data) => {
      return [data.origin, data.author, data.content];
    })
    .catch((err) => console.log(err));
};

// export const getPoetry = async () => {
//   const url = "https://v1.jinrishici.com/all.json";
//   try {
// TODO feedback：两个await可以拆成两个行，可读性会更高些
//     const data = await (await fetch(url)).json();
//     return [data.origin, data.author, data.content];
//   }
//   catch (err) {
//     console.log(err);
//   }
// };
