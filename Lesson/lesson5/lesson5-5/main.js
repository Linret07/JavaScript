// function foo(){
//     console.log(`foo`);
//     // foo(); рекурсія
// }
// foo();

// function iterator(arr,i){
//     console.log(arr[i]);
//     i++;
//     if (i<arr.length){
//         iterator(arr,i);
//     }
//
// }
// iterator([1,2,3,4,5],0);

let arr=[11,22,33, [44, 55]];

function flater(array){
    for(const item of array){
        if(Array.isArray(item)){
            flatter(item);
        }else{
            innnerArray.push(item);
        }
    }
}
flater(arr);
console.log(innerAraay);