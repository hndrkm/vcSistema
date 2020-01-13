require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('frontend/build'));
      
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
        });
      }
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();