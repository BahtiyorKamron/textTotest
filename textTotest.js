function findIndex(start,what){
   let s=0
   for(start;start<=what.length-1;start++){
     s++
     if(what[start]=="?" || what[start]=='!') {
       return s
     }
   }
}
function textTotest(test){


let l = []
for(let i=0;i<test.length-1;i++){
  if(/[0-9]/.test(test[i]) && test[i+1]==')'){
    l.push(i+2)
}}
let savollar = []
for(let i of l){
  let q = ""
  let end = findIndex(i,test)
  for(j=i;j<end+i;j++){
    q+=test[j]
  }
  savollar.push(q)
  q=""
}

let check1 = /[A-Z]/
let check2 = /[0-9]/
let variantlar = []
let varIn = []
let counter = 0
for(let i=0;i<test.length-1;i++){
  if(check1.test(test[i]) && test[i+1]==')'){
    counter++
    varIn.push(i)
  }else if(check2.test(test[i]) && test[i+1]==')' && counter==4){
    varIn.push(i-1)
    counter=0
  }
}


varIn.push(test.length-1)
let c =0
for(let i=0;i<varIn.length;i++){
    c++
    if(c!==5){

    let str = ""

    for(varIn[i];varIn[i]<varIn[i+1];varIn[i]++){
      str+=test[varIn[i]]
    }
    variantlar.push(str)
    str=""
  }else{
    c=0
  }
}
let abcd = []
let k=0
let a=[]
for(let i=0;i<variantlar.length;i++){
  k++
  a.push(variantlar[i])
  if(k==4){
    abcd.push(a)
    a=[]
    k=0
  }
}
let result = []

for(let i=0;i<=savollar.length-1;i++){
  result.push({[savollar[i]]:abcd[i]})
}
return result
}

let t = `
  Qoraqolpog'iston Respublikasi AMudaryo tumani 
  87-maktab 11-sinflar uchun maktab imtihoni uchun test.
 1)Savol bir? A)javob1 B)javob2 C)javob3 D)javob4.
 2)Savol ikki? A)javob1 B)javob2 C)javob3 D)javob4.\
 3)Savol uch? A)javob1 B)javob2 C)javob3 D)javob4.
 4)Savol to'rt? A)javob1 B)javob2 C)javob3 D)javob4.
 5)Savol besh? A)javob1 B)javob2 C)javob3 D)javob4.
`
console.log(textTotest(t));
//textni ichidan testlarni ajratib oladigan algoritm


