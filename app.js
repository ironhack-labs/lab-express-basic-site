const express = require(`express`);

const app = express();

app.get(`/home`, (req, res,) => {
    res.send(`Welcome User`);
});

app.use(express.static(`public`));


app.listen(3000, () => {
    console.log("server listening");
});
