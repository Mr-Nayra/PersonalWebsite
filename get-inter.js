const https = require('https');
const fs = require('fs');

const download = (url, dest) => {
  https.get(url, (res) => {
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => console.log('Downloaded ' + dest));
  });
};

download('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf', 'public/fonts/Inter-Regular.ttf');
download('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf', 'public/fonts/Inter-Bold.ttf');
download('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-900-normal.ttf', 'public/fonts/Inter-Black.ttf');
