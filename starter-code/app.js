const express = require( 'express' );
const app = express();

// ----------------------------------------------------------
// PUBLIC / VIEWS
// ----------------------------------------------------------
app.use( express.static('public'));

app.listen(3000, () => {
    console.log('server listen on 3000');
});
