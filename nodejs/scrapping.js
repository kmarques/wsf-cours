const Scrapper = require('./Scrapper').Scrapper;
const $ = require('cheerio');

const process = function(result, contentType) {
  console.log(contentType);
  let posts = result.data.items;

    let modifiedPosts = posts.map(function(item) {
      return {
        title: item.title,
        url: item.url,
        commentsCount: item.commentsCount
      };
    });

    return modifiedPosts;
}
const url = "https://9gag.com/v1/featured-posts";
const config = {
    method: "GET"
};
const outputFile = "data.csv";
const scrap9gag = new Scrapper(url, config, process, outputFile);
scrap9gag.scrap();




const url2 = "https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP";
const process2 = function($, contentType) {
  const result = [];
  const rows = $('table:first-of-type tbody tr');
  rows.each(function(index, row) {
    const rowData = $(row).find('th,td').map(function() {
      return $(this).text().trim();
    }).get()
    result.push(rowData);
  });

  return result;
}
const outputFile2 = "wiki.csv";
const scrapWiki = new Scrapper(url2, config, process2, outputFile2);
scrapWiki.scrap();

const url3 = "http://localhost:3000/posts";
const config3 = {
    method: "GET"
};
const process3 = function(result, contentType) {
  console.log(contentType);
  let posts = result;

    return posts;
}
const outputFile3 = "local.csv";
const scraplocal = new Scrapper(url3, config3, process3, outputFile3);
scraplocal.scrap();

const url4 = "http://localhost:3000/new-post";
const config4 = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
};
const process4 = function(result, contentType) {
  console.log(contentType);
  console.log(result);
  return [
    {
    data: result("h1").text().trim()
  }
];
}
const outputFile4 = "localpost.csv";
const scraplocalpost = new Scrapper(url4, config4, process4, outputFile4);
scraplocalpost.scrap(JSON.stringify({email: "kmarques@vetixy.com", "password": "test"}));