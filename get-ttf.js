const https = require('https');
const fs = require('fs');

https.get({
  hostname: 'fonts.googleapis.com',
  path: '/css2?family=Caveat:wght@700',
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0' } // older user agent to force TTF
}, (res) => {
  let css = '';
  res.on('data', d => css += d);
  res.on('end', () => {
    const urlMatch = css.match(/url\((https:\/\/[^)]+)\)/);
    if (urlMatch) {
      https.get(urlMatch[1], (fileRes) => {
        const file = fs.createWriteStream('public/fonts/Caveat-Bold.ttf');
        fileRes.pipe(file);
        file.on('finish', () => {
             console.log('Done downloading TTF! File size: ' + fs.statSync('public/fonts/Caveat-Bold.ttf').size);
        });
      });
    } else {
      console.log('No match found');
      console.log(css);
    }
  });
});
