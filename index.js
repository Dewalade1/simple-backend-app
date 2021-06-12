const express = require('express');

const app = express();
const port = 3001;

app.use('/test', (req, res) => {
    res.status(200).send('Test Successful');
    console.log("Congrats! Your test route works!!!");
    return res;
});

app.listen( port , () => {
    console.log('\n[*] Starting first-post app');
    console.log('[+] App is now running');
    console.log('[+] Listening on port ' + port + '...');
});