//assignment no # 11 
//array
//defines an array of names
let names = ["javaid", "shazia", "anzila", "emaan"];
// 1) loop 
// 2)for each
// 3) for loop
// 1)loop
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// 2) for each 
names.forEach(firend => {
    console.log(firend);
});
// 3) for of loop 
for (const friendName of names) {
    console.log(friendName);
}
export {};
