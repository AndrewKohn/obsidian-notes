export const getFileName = (filePath: string) => {
  const reversedFilePath = filePath.split('').reverse().slice(3);
  let fileName = '';

  for (let i = 0; i < reversedFilePath.length; i++) {
    if (reversedFilePath[i] === '/') break;
    fileName += reversedFilePath[i];
  }

  fileName = fileName.split('').reverse().join('');

  return fileName;
};
