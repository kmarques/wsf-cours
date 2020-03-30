const Scrapper = require('./Scrapper').Scrapper;
const $ = require('cheerio');

const process = function(result, contentType) {
  console.log(contentType);
  let posts = result.recommendations;

    let modifiedPosts = posts.map(function(item) {
      return {
        title: item.product.title,
        brand: item.product.brand
      };
    });

    return modifiedPosts;
}
const url = "https://api.early-birds.fr/widget/588a1d8da322cb654df15044/recommendations/7d65b0ac-1474-4bfe-b994-9d57cffe1de5?variables=%7B%22%24productId%22%3A%5B%22501739673%22%2C%22500785518%22%2C%22500786102%22%5D%7D&store=default&locale=fr&metadata=widgetId";
const config = {
    method: "GET"
};
const outputFile = "data.csv";
const scrap9gag = new Scrapper(url, config, process, outputFile);
scrap9gag.scrap();