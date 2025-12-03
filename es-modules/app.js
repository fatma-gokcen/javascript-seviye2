// İmport: başka bir dosyada export edilmiş kodu içeri almak için kullanılır.

import greet, { sum, multiply } from './math.js';

console.log(sum(3, 4));       // 7
console.log(multiply(5, 6));  // 30

greet("Fatma");                // Hello, Fatma!
