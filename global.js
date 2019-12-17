console.log(__dirname)
console.log(__filename)

setTimeout(()=>{
    console.log("File execution1 2s");
}, 2000);

setTimeout(()=>{
    console.log("File execution1 5s");
}, 2000);

setTimeout(()=>{
    console.log("File execution1 immediate");
});

setInterval(()=>{
    console.log("File execution1 interval");
}, 4000);