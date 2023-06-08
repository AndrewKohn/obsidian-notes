const express = require('express');
import { Express, Request, Response, NextFunction } from 'express';
const app: Express = express();
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const folderPath = '../obsidian/';

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  console.log('Request received!');
  res.send('Hello, world!');
});
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
