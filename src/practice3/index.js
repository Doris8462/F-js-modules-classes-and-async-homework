export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin"
  })
    .then(response => response.json())
    .then(data => {
      return [data.origin, data.author, data.content];
    })
    .catch(err => console.log(err))
};

// export const getPoetry = async () => {
//   const url = "https://v1.jinrishici.com/all.json";
//   try {
//     const data = await (await fetch(url)).json();
//     return [data.origin, data.author, data.content];
//   }
//   catch (err) {
//     console.log(err);
//   }
// };
