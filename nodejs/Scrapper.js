const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

const Scrapper = function (url, config, process) {
  const req = https.request(url, config, function (res) {
    if(res.statusCode >= 300 || res.statusCode < 200) throw "Error status code " + res.statusCode;

    let data = '';
    res.on('data', function (d) {
      data += d;
    });

    res.on('end', function() {
      let result = undefined;
      if(res.headers["content-type"].match(/application\/json/)) {
        result = JSON.parse(data);
      }
      else if(res.headers["content-type"].match(/text\/html/)) {
        result = cheerio.load(data);
      } else {
        throw "Unknown content-type " + res.headers["content-type"];
      }
    
      result = process(result, res.headers['content-type']);
      
      const csv = result.map(function(item) {
        return Object.values(item).join(',');
      });
      fs.writeFile('./data.csv', csv.join('\n'), function(err) {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
  }).on('error', function(e) {
    console.error(e);
  });

  this.scrap = function() {
    req.end();
  }
}

module.exports.Scrapper = Scrapper;