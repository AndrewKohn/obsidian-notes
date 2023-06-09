const express = require('express');
const router = express.Router();
const { getAllFiles } = require('./obsidianController');
const fs = require('fs');
const path = require('path');
import { Request, Response, NextFunction } from 'express';

const obsidianFolderPath = path.join(__dirname, '..', '..', 'obsidian');

function readFileContent(filePath: any) {
  const fullPath = path.join(obsidianFolderPath, filePath);
  return fs.readFileSync(fullPath, 'utf8');
}

router.route('/').get(getAllFiles);

router
  .route('/:filePath')
  .get((req: Request, res: Response, next: NextFunction) => {
    try {
      const { filePath } = req.params;
      const content = readFileContent(filePath);
      res.status(200).json({ content });
    } catch (error) {
      console.error('Error reading file:', error);
      next(error);
    }
  });

module.exports = router;
