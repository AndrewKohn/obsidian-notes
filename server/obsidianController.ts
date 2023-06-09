import { Request, Response, NextFunction } from 'express';
const fs = require('fs');
const path = require('path');
const obsidianFolderPath = '../obsidian/';
const obsidianFiles = getAllFilesAndFolders(obsidianFolderPath);

function getAllFilesAndFolders(dir: string): string[] {
  const files: any = [];

  fs.readdirSync(dir).forEach((file: string, index: number) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (file !== '.obsidian')
      if (!stat.isDirectory()) {
        files.push(filePath);
      } else {
        files.push(...getAllFilesAndFolders(filePath));
      }
  });

  return files;
}

exports.getAllFiles = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res
      .status(200)
      .json({ message: 'Getting all md files...', files: obsidianFiles });
  } catch (error) {
    console.error('Error reading folder:', error);
    next(error);
  }
};
