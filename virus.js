function deleteInvalids(arr){
    if(!arr||typeof arr.length!=='number'||typeof arr !=='object'){
        return "Invalid Array : error505"
    }

    let numb=[];
    for(let i=0;i<arr.length;i++)
    {
        if(typeof arr[i]==='number' && !isNaN(arr[i])){
            numb.push(arr[i]);
        }
    }
    return numb;
}
// let arr={num: [ 1 , 2 , 3 ]}
// let some= deleteInvalids(arr);
// console.log(some);