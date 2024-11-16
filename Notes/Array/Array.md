# Arrays

# Declaration

```
const arr = [12,3,4,5]

const arr = new Array(1,2,3,4,5)

```

# Methods

1. Push(value) and Pop() [koue bhi value last se add hogi push() se or last se remove hogi pop()se]

```
let arr = [1,2,3,4,5]

arr.push("gaurav") [ 1, 2, 3, 4, 5 ,"gaurav" ]
arr.pop() [ 1, 2, 3, 4, 5 ]

console.log(arr)

```

2. unshift(value) and shift() 

[koue bhi value first se add hogi unshift() se or last se remove hogi shift()se]

```
let arr = [1,2,3,4,5]

arr.unshift(6) [ 6, 1, 2, 3, 4, 5 ]

arr.shift()    [  1, 2, 3, 4, 5 ]
console.log(arr)

```
3. includes() and indexof()

includes() its return true or false value arr ke andr ha ya nhi ha

indexof()  value koun se index may ha ye show krta ha 

```
let arr = [1,2,3,4,5]

console.log(arr.includes(6)) false
console.log(arr.includes(4)) true

----

console.log(arr.indexof(5)) index value is 4

```

4. .join( )