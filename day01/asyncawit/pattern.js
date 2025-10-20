function myWork(work){
    return new Promise(
        (resolve, reject) => {

            if(work === 'done'){
                resolve('Game');
            }else{
                reject(new Error('working'));
            }
        }
    );
}

// myWork('done').then(function (value){
//         console.log(value);
// }, function(err){
//     console.log(err);
// })

myWork('done').then(function(value){console.log(value)})
.catch(function(err){console.log(err)})