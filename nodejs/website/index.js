const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

app.get('/', function(req, res) {
  res.send("<html><body><h1>Hello world</body></html>");
});

app.get('/posts', function(req, res) {
  res.json([
    {id: 1, title: "post 1"},
    {id: 2, title: "post 2"},
    {id: 3, title: "post 3"},
  ]);
});

app.post('/new-post', function(req, res) {
  console.log(req.body);
  res.send("<html><body><table><tbody>"
  + Object.keys(req.body).map(function(key) {
    return "<tr><td>"+key+"</td><td>"+ req.body[key]+"</td></tr>";
  }).join('')
  +"</tbody></table></body></html>")
});

app.listen(3000);