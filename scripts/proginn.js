const args = process.argv;
const commit = process.argv[2].replace(/^commit=/, '');

const config = require('../package.json');

const projectid = config.outsourced.project.id;
const project_commit = commit;

let timestamp = new Date().getTime();

var qs = require("querystring");
var http = require("https");

var options = {
  "method": "POST",
  "hostname": "www.proginn.com",
  "port": null,
  "path": "/outsource/item",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "set-cookie": `PHPSESSID=i9pl0odn81pgbg64tc1t764k96; MEIQIA_EXTRA_TRACK_ID=cb2e3270af4411e6a6a20230498608e6; x_access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzMjU3NiIsImN0aW1lIjoxNDgwMTU1OTgzLCJleHAiOjE0ODI3NDc5ODN9.Z3qthuLisffs2gZHBskFqIvwVv8h-mYLyLmTL0RAdtU; Hm_lvt_c92adf6182a39eb23c24cf43abc3f439=1479840025,1479918005,1479963924,1480155995; Hm_lpvt_c92adf6182a39eb23c24cf43abc3f439=${timestamp}`,
    "referer": "https://www.proginn.com/outsource/item/28712/commits",
    "cache-control": "no-cache",
    "postman-token": "c16df109-2da0-44af-8353-fe77d682f198"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ action: 'commit', pro_id: '28712', content: commit }));
req.end();
