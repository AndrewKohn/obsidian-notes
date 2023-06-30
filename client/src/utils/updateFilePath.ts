export const updateFilePath = (filePath: string) => {
  if (filePath.includes('\\')) {
    return filePath.replace(/\\/g, '/');
  }
  return filePath;
};
