// Promise

// Something that happens outside of our code
//  ... leave me alone
//  ... I'll get back to you when I'm done

// Future

// pending - Waiter is gone!
// settled
//    - Waiter comes with food - resolved
//    - Waiter comes with a refusal to feed me - rejected

// Observable

// Uncancellable - AbortController

new Promise((resolve, reject) => {
  // do something!
  resolve("good result");

  reject("bad result");
});

import fs from "node:fs/promises";

type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

// fs.readFile("./user.json", "utf8")
//   .then((userData) => {
//     return fs
//       .readFile("./regions.json", "utf8")
//       .then((regionsData) => ({ regionsData, userData }));
//   })
//   .then(({ regionsData, userData }) => {
//     fs.readFile("./news.json", "utf8").then((newsData) => {
//       const { region } = JSON.parse(userData);

//       const userRegionIds = JSON.parse(regionsData)[region];

//       const userNews = JSON.parse(newsData).filter((article) =>
//         userRegionIds.includes(article.id)
//       );
//       userNews.forEach((news) => {
//         console.log(news.headline);
//         console.log(news.content);
//         console.log("-----");
//       });
//     });
//   })
//   .catch((error) => console.log(error));

const promise1 = new Promise<string>((resolve, reject) => resolve("Hello!"));

let var1: Awaited<typeof promise1> = "hello";

Promise.all([
  fs.readFile("./user.json"),
  fs.readFile("./regions.json"),
  fs.readFile("./news.json"),
]).then(([userData, regionsData, newsData]) => {
  const { region } = JSON.parse(userData);

  const userRegionIds = JSON.parse(regionsData)[region];

  const userNews = JSON.parse(newsData).filter((article) =>
    userRegionIds.includes(article.id)
  );
  userNews.forEach((news) => {
    console.log(news.headline);
    console.log(news.content);
    console.log("-----");
  });
});

Promise.allSettled([
  fs.readFile("./user.json", "utf8"),
  fs.readFile("./regions.json", "utf8"),
  fs.readFile("./news.json", "utf8"),
]).then((data) => {
  const successfulData = data.filter((item) => item.status === "fulfilled");
  console.log(successfulData);
});
