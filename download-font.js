const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://raw.githubusercontent.com/google/fonts/main/ofl/caveat/Caveat-Bold.ttf';
const dest = path.join(__dirname, 'public', 'fonts', 'Caveat-Bold.ttf');

fs.mkdirSync(path.join(__dirname, 'public', 'fonts'), { recursive: true });

const request = https.get(url, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, (res) => {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); console.log("Downloaded!"); });
    });
  } else {
    const file = fs.createWriteStream(dest);
    response.pipe(file);
    file.on('finish', () => { file.close(); console.log("Downloaded!"); });
  }
});
