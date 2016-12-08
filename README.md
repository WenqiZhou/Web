# Web

## install
```
$ git clone 
$ cd 
$ npm install --production=false
$ npm start
## set nginx profile
## sudo nginx -s reload
$ open domain.com
```

## nginx dev profile
```
upstream webpack {
  server localhost:61101;
}

upstream api_server {
  server dev.11bnb.com:10086;
}

upstream auth_server {
  server dev.11bnb.com;
}

server {
  listen  80 default;
  server_name domain.com;
  access_log /Users/yeliex/wwwroot/log/11bnb_access.log;
  error_log /Users/yeliex/wwwroot/log/11bnb.log;

  location ~/api/user_auth(/?)(.*) {
    proxy_pass http://auth_server/api/user/$2$is_args$args;
    proxy_redirect off;
    proxy_set_header HOST $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
  }

  location ~ /api(/?)(.*) {
    proxy_pass http://api_server/api/$2$is_args$args;
    proxy_redirect off;
    proxy_set_header HOST $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

  location ~ / {
    proxy_pass http://webpack;
    proxy_redirect off;
    proxy_set_header HOST $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }

  location ~ /assets {
    root /Users/yeliex/Projects/epiProjects/11bnb/web;
  }
}
```