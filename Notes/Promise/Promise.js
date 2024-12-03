
const promise= new Promise((resolve,reject)=>{
     setTimeout(()=>{
          resolve({
            user:"gaurav",
            num:1234
          })
     },1000)
})

.then((value)=>{
   console.log(value)
})