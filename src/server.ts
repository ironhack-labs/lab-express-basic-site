'use strict';

import {Application, Request, Response} from "express";


const express = require('express');

const app: Application = express();

app.use(express.static('public'));


app.get("/debug", function (req: Request, res: Response) {
   res.send('yea baby');
});

const port: number = 3005;
app.listen(port, () => console.log(`app  on port ${port}!`));
