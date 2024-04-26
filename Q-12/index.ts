
//question no # 12

let names: string[]=["javaid","shazia","anzila","emaan"] 

for (let i = 0; i < names.length; i++) {
    console.log(`hello , ${names[i]} ! how are you today`);
    
}
names.forEach(firend => {
    console.log(`Hi,${firend}!how are you today?`); 
});

for (const friendName of names) {
    console.log(` Dear,${friendName}! how are you today?`); 
}
