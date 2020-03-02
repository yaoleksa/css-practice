var x=40;
var arr=[];
function recaman(n) {
    for(var i=0; i<x; i++)
    {
        if(i==0)
        {
            arr.push(i);
        }
        else if(arr[i-1]-1>0&&(arr[i-1]-1 in arr))
        {
            arr.push(arr[i-1]-1);
        }
        else
        {
            arr.push(arr[i-1]+1);
        }
    }
    return arr;
}

console.log(recaman(x));