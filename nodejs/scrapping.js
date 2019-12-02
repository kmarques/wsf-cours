const Scrapper = require('./Scrapper').Scrapper;
const cheerio = require('cheerio');

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

const scrap9gag = new Scrapper(url, config, process);
scrap9gag.scrap();

//const url2 = "https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP";
//const process2 = function($, contentType) {
//  const result = [];
//  const rows = $('table:first-of-type tbody tr');
//  rows.map(function(row) {
//    console.log(row);
//    return row.children.map(function(column) {
//      console.log(column);
//    })
//  });
//
//  return result;
//}
//const scrapWiki = new Scrapper(url2, config, process2);
//scrapWiki.scrap();