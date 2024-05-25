const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const buttonEtement=document.querySelector('button')!;//or can use buttonEtement?.addEventListener()

const numResult: Array<number>=[];
const textResult: string[]=[];

type numOrstring=number | string;
interface ResultObj {
    val: number;
     timeStamp:Date
}

function add(num1: numOrstring, num2: numOrstring) {
    if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    } else if(typeof num1==='number' && typeof num2  === 'number'){
        return num1+num2; 
    } 
    return +num1 + +num2; 
}

function printResult(resultObj: ResultObj){
    console.log(resultObj.val);
}

buttonEtement.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add (+num1,+num2);
    numResult.push(result as number);
    console.log(result);
    const stringResult=add(num1,num2);
    textResult.push(stringResult as string);
    console.log(stringResult);
    printResult({val:result as number,timeStamp : new Date()});
    console.log(numResult,textResult);
})

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
})

myPromise.then((result)=>{
    console.log(result);
    console.log(result.split('w'));
})
