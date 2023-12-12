import fs from "node:fs";

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
// Callback Hell
fs.readFile("./user.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { region } = JSON.parse(data);

  fs.readFile("./regions.json", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    const regionsData = JSON.parse(data);
    const userRegionIds = regionsData[region];
    fs.readFile("./news.json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const allNews = JSON.parse(data);
      const userNews = allNews.filter((article) =>
        userRegionIds.includes(article.id)
      );
      userNews.forEach((news) => {
        console.log(news.headline);
        console.log(news.content);
        console.log("-----");
      });
    });
  });
});
