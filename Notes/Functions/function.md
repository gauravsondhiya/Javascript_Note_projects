# Functions

what is function declartion/function statement/ function defination  ?
```
function gaurav (value){
    console.log("gg")
}
```
----------------------

what is function expersion ?
variable ke andr function ko declare krna function expersion kehlata ha
```
const square = function (num){
    return num
}
```

-----------------------

what is Anonymous funtion ?
--
```
 let a = function (value){
    return
 }

 jis function may naam nhi hota usse anonymous funtion bolte ha
```

----------------

What are first class function ?

In JavaScript, first-class functions mean that functions are treated just like any other value, such as numbers or strings.
```
function square (num){
    return num*num
}

function output (fun){
    console.log(fun(5))
}

output(square)
```
--------------

What is IIFE?
--
Immediate invoked function
```
(function squre(num){
    consoele.log(num*num)
})()
```
---

function scope 




---- 

Params and Arguments
--
```
function square(num) //Parama{
    console.log(num*num)
}

square(5) //Arguments
```
---