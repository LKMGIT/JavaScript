function myWork(work){
    return new Promise(
        (resolve, reject) => {
            resolve(work.toUpperCase)});
}

// myWork('done').then(function (value){
//         console.log(value);
// }, function(err){
//     console.log(err);
// })

function playGame(work){
    return new Promise(
        (resolve, reject) => {
            if(work === 'done'){resolve('Go Play Game')}
            else{reject(new Error("Don't"))}
        }
    )
}


myWork('done').then(function(result){playGame(result).then(function(val){
    console.log(val);
})})

myWork('done').then(playGame).then(console.log);



// myWork('done').then(function(value){console.log(value)})
// .catch(function(err){console.log(err)})