const fs = require('fs');

(async () => {

    const response =  await fetch('https://icedodo.onionfist.com/info?mapId=boat_bounce/');

    const raw_html = await response.text();

    fs.writeFileSync('boat-bounce.html', raw_html);

})();
