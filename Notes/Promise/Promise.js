
// var user = function (value,value2){
//     this.first= value,
//     this.last = value2
// }
// let gg = new user("gaurav","sondhiya")

// console.log(gg)

const promiseOne = new Promise(function (resolve, reject) {

    setTimeout(() => {
    console.log("1")
    resolve()
    }, 2000);
}) 

promiseOne.then(function () {
    console.log("2")
})