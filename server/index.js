require('dotenv').config();
const path = require('path');
const app = require('./app');
require('./database');

async function main() {
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('frontend/build'));
        console.log("estoy wen preduccion");
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
        });
      }
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();