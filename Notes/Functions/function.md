# Functions

# what is function declartion/function statement/ function definition  ?
```
function gaurav (parameter){
    console.log("gg")
}

[gaurav jo ha usko function ka reference bolte ha] gaurav(argument) or bracket ko bolte ha execution  
```
----------------------

# what is function expression ?

variable ke andr function ko declare krna function expression kehlata ha
```
const square = function (num){
    return num
}
```

-----------------------

# what is Anonymous function ?

```
 let a = function (value){
    return value+ 1
 }
 a(4)
 jis function may naam nhi hota usse anonymous funtion bolte ha
```

----------------

# What are first class function ?

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

# What is IIFE?

Immediate invoked function
```
(function squre(num){
    consoele.log(num*num)
})()
```
---- 

# Params and Arguments
```
function square(num) //Parama{
    console.log(num*num)
}

square(5) //Arguments
```
---