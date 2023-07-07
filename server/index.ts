const express = require('express');
import { Express, Request, Response, NextFunction } from 'express';
const app: Express = express();
const cors = require('cors');

const PORT = 3002;

app.use(express.json());
app.use(cors());

app.use('/', require('./obsidianRoutes'));

app.use((req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();
  const currentDate = new Date();
  const timeOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Chicago',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const dateFormat = `${currentDate.getMonth()}/${currentDate.getDay()}/${currentDate.getFullYear()}`;
  const centralTime = currentDate.toLocaleString('en-US', timeOptions);
  const urlPath: string = req.baseUrl + req.originalUrl;

  res.on('finish', () => {
    const responseTime = Date.now() - startTime;
    console.log(
      `${dateFormat} ${centralTime}: ${responseTime}ms | [${req.method}] (${res.statusCode}) ${urlPath}`
    );
  });

  next();
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
