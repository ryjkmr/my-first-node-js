'use strict';
const number = process.argv[2] || 0;
//コマンドに付ける引数 || 0 またはゼロ　引数があればそれを入れて、なければ0を入れる
//引数の配列[0]には'node' [1]にはパス='app.js'が入る
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
