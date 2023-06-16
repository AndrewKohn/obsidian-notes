--------

### Title: [[split()]]
Date Created: ==2023-06-07, 04:33==

--------

```javascript
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

```

--------
Tags: [[Code Snippets]] - [[JavaScript]]