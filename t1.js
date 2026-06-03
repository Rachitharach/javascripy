
//check even or odd
function even(num){
    if (num%2 === 0){
        console.log("this is even")
    }else{
        console.log("this is odd") 
    }
}
even(4)
// count even numbers
function evenCount(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++
        }
    }
    console.log(count)
}
evenCount([2,4,5,7,8])

//check even with arr n func
function check(num){
for( let i=0;i<num.length;i++){
if(num[i]%2 == 0){
    console.log('even')
}else{
    console.log('not even')
}
}
}
num=[2,4,6,5]
check(num)

// no. positive or not
function check(num){
    if(num >0){
        console.log('Positive number')
    }else if(num<0){
        console.log('Negative number')
    }else{
        console.log('zero')
    }
}
check(5)
function check(num1,num2){
    if (num1>num2){
        console.log(num1 + ' is bigger')
    }else if(num2>num1){
        console.log(num2 + ' is bigger')
    }else{
        console.log('both are same')
    }
}
check(8,9)

function check(num1,num2,num3){
    if (num1>num2 && num1>num3){
        console.log(num1 + ' is bigger')
    }else if(num2>num1 && num2>num3){
        console.log(num2 + ' is bigger')
    }else {
        console.log(num3 + ' is bigger')
    }
}check(1,2,3)

//biggest
function check(num){
    let max = num[0] 
    for(let i=0;i<num.length;i++){
        if(num[i]>max){
            max=num[i]
        }
    } console.log(max + " is biggest")
    
} num = [10, 45, 100, 96, 75]
check(num)
//smallest
function check(num){
    let max = num[0]
    for(let i=0;i<num.length;i++){
        if(num[i]<max){
            max=num[i]
        }
    } console.log(max + " is smallest")
    
} num = [10, 45, 100, 96, 75]
check(num)

// string-reverse string
function rever(num){
    let reverse =""
    for(let i=num.length-1; i>=0; i--){
        reverse = reverse+num[i]
    }console.log(reverse)
}
rever("hello")

function vowel(v){
    count=0
    for(let i=0;i<v.length;i++){
        if(v[i]== 'a'|| v[i]== 'e' ||v[i]=='i' ||v[i]=='o'||v[i]=='u'||
            v[i]== 'A'|| v[i]== 'E' ||v[i]=='I' ||v[i]=='O'||v[i]=='U')
        {
            count++
        }
    }
    console.log(count)
}
vowel("heeLlo")
//prints and counts
function vowel(v){
    count=0
    let vowels=''
    for(let i=0;i<v.length;i++){
        if(v[i]== 'a'|| v[i]== 'e' ||v[i]=='i' ||v[i]=='o'||v[i]=='u'||
            v[i]== 'A'|| v[i]== 'E' ||v[i]=='I' ||v[i]=='O'||v[i]=='U')
        {
            count++
            vowels=vowels+v[i]
        }
         
    }
   console.log(vowels)
   console.log(count)
}
vowel("heeLlo")
//  palindrome



// Count positive numbers
arr=[12,13,5,-9,-6,9]
let count = 0
for(let i = 0; i < arr.length; i++){
   if(arr[i] > 0){
      count++
   }
}console.log(count)

// remove space 
function remv(num){
    let result=''
    for(i=0;i<num.length;i++){
        if(num[i]!== ' '){
            result+=num[i]
        }
    }
    console.log(result)
}
remv('hel lo world')


// Arrays
arr=[1,2,3,4]
let sum=0
for(i=0;i<arr.length;i++){
    sum=sum+a[i]
}
num=[1,2,2,3,3,4]
result=[]
for(i=0;i<num.length;i++){
    if(result.indexOf(num[i]) == -1){
        result.push(num[i])
    }
    }console.log(result)

