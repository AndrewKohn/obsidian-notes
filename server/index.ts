const express = require('express');
import { Express } from 'express';
const app: Express = express();
const cors = require('cors');

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/', require('./obsidianRoutes'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
