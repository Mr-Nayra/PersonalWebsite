const https = require('https');
const fs = require('fs');

const url = 'https://cdn.jsdelivr.net/fontsource/fonts/caveat@latest/latin-700-normal.ttf';
const dest = 'public/fonts/Caveat-Bold.ttf';

https.get(url, (res) => {
  if (res.statusCode === 200) {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Successfully downloaded FontSource TTF. Size: ' + fs.statSync(dest).size);
    });
  } else {
    console.log('Failed, Status: ' + res.statusCode);
  }
});
