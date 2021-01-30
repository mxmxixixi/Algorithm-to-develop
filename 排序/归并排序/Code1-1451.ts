
function arrangeWords(text: string): string {
    if(text.length<=1){
        return text
    }
    const textArr:string[] = text.split(" ").map((v)=>v.toLocaleLowerCase())
    const merge = (left:string[],right:string[])=>{
        var temp=[];
        while(left.length&&right.length){
            if(left[0].length<=right[0].length){
                temp.push(left.shift());
            }else{
                temp.push(right.shift());
            }
        }
        //left和right长度不一样时，直接连接剩下的长的部分（本身有序）
        return temp.concat(left,right);

    }
    const mergeSort = (data:string[]):any=>{
        if(data.length<=1){
            return data;
        }
        var mid=Math.floor(data.length/2);
        var left=data.slice(0,mid);
        var right=data.slice(mid);
   
        return  merge(mergeSort(left),mergeSort(right));
    }
    var sortedData=mergeSort(textArr);
    return sortedData[0][0].toLocaleUpperCase() + sortedData[0].slice(1) + ' ' + sortedData.slice(1).reduce((pre:string,acc:string)=>`${pre} ${acc}`)
};
console.log("arrangeWords",arrangeWords('Leetcode is cool'))
console.log("arrangeWords",arrangeWords('Keep calm and code on'))
console.log("arrangeWords",arrangeWords('To be or not to be'))




