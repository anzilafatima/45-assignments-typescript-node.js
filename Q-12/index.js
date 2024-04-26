"use strict";
//question no # 12
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["javaid", "shazia", "anzila", "emaan"];
for (let i = 0; i < names.length; i++) {
    console.log(`hello , ${names[i]} ! how are you today`);
}
names.forEach(firend => {
    console.log(`Hi,${firend}!how are you today?`);
});
for (const friendName of names) {
    console.log(` Dear,${friendName}! how are you today?`);
}
