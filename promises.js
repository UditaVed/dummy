let p = new Promise((resolve,reject) =>{
    let a = 1+1
    if (a==2) {
        resolve('Success')
    }
    else{
        reject('failed')
    }
}) 
//catch if our promise resolved succesfully
p.then((messgae) => {
    console.log('this is in the then ' + messgae)
})
//catch if our promise is rejected or failed
.catch((messgae) => {
    console.log('this is in the catch' + message);
}) 