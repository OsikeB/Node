const url = require ('url');

const address = "https://localhost:2020/www.facebook.com/ambassaforchrist/index.html?year=2020&month=april"

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query.month);
console.log(parsedUrl.query.year);