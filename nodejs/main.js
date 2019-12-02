const req = require('./library');

req.helloWorld();

console.log(req.test);

const https = require('https');
const fs = require('fs');
var data ='';
https.get('https://9gag.com/v1/featured-posts', function (res) {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', function (d) {
    data += d;
  });

  res.on('end', function() {
    let result = JSON.parse(data);
    let posts = result.data.items;

    let modifiedPosts = posts.map(function(item) {
      return {
        title: item.title,
        url: item.url,
        commentsCount: item.commentsCount
      };
    });

    const csv = modifiedPosts.map(function(post) {
      return Object.values(post).join(',');
    });
    fs.writeFile('./data.csv', csv.join('\n'), function(err) {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
}).on('error', function(e) {
  console.error(e);
});