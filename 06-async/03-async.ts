import fs from "fs/promises";

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

async function run(): Promise<NewsArticle[]> {
  try {
    // const userData = await fs.readFile("./user.json", "utf8");
    // const regionsData = await fs.readFile("./regions.json", "utf8");
    // const newsData = await fs.readFile("./news.json", "utf8");

    const [userData, regionsData, newsData] = await Promise.all([
      fs.readFile("./user.json", "utf8"),
      fs.readFile("./regions.json", "utf8"),
      fs.readFile("./news.json", "utf8"),
    ]);

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

    return userNews;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

run();
