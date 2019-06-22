'use strict';

import { Application, Request, Response } from "express";

/**
 * Created by David on 22/06/2019.
 */

console.log('xxxyyy');


const express = require('express');
const app : Application = express();

app.use(express.static('public'));

app.get("/debug", function( req , res) {

    res.send('yea baby');

});

const port :number = 3005;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))