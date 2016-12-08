const args = process.argv;
const commit = process.argv[2].replace(/^commit=/, '');

const config = require('../package.json');

const projectid = config.outsourced.project.id;
const project_commit = commit;

let timestamp = new Date().getTime();

const fetch = require('autofetch');

fetch.headers({
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate, sdch, br',
  'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,en-US;q=0.4,zh-TW;q=0.2',
  connection: 'keep-alive',
  'content-type': 'application/x-www-form-urlencoded',
  'set-cookie': `PHPSESSID=i9pl0odn81pgbg64tc1t764k96; MEIQIA_EXTRA_TRACK_ID=cb2e3270af4411e6a6a20230498608e6; x_access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIzMjU3NiIsImN0aW1lIjoxNDgwNzk2MjQyLCJleHAiOjE0ODMzODgyNDJ9.mFRYpqwqwgqfvI6bo4M-ricb26A1AdtwNSMVTVUE8cU; Hm_lvt_c92adf6182a39eb23c24cf43abc3f439=1480155995,1480251997,1480272631,1480796266; Hm_lpvt_c92adf6182a39eb23c24cf43abc3f439=1480796662`,
  'referer': 'https://www.proginn.com/outsource/item/28712/commits',
  'cache-control': 'no-cache',
  'postman-token': 'c16df109-2da0-44af-8353-fe77d682f198',
  'X-Requested-With': 'XMLHttpRequest',
  Pragma: 'no-cache',
  Host: 'www.proginn.com',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36'
});

fetch('http://www.proginn.com/outsource/item', {
  method: 'POST',
  body: {
    action: 'commit',
    pro_id: 28712,
    content: commit
  }
}).then((response) => response.json()).then((response) => {
  console.log(response)
});
