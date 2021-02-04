/**
 * 根据题目条件，相邻的元素不能相同，出现最多次数的元素不可能大于数组长度的一半，否则会有相邻的元素重复
 * 所以对元素进行排序，之后找出出现次数最多的元素，进行奇数位、偶数位排序
*/
function rearrangeBarcodes(barcodes: number[]): number[] {
    if(barcodes.length <=2){
        return barcodes
    }
    const quickSort = (left:number,right:number) => {
        if(left>=right){
            return
        }
        let l = left,r = right;
        const standard = barcodes[l]
        while(l<r){
            while(l<r && barcodes[r]>=standard){
                r--
            }
            l<r && (barcodes[l++] = barcodes[r])
            while(l<r && barcodes[l]<=standard){
                l++
            }
            l<r && (barcodes[r--] = barcodes[l])
        }
        barcodes[l] = standard
        quickSort(left,l-1)
        quickSort(l+1,right)
    }
    quickSort(0,barcodes.length-1)
    let len = barcodes.length;
    let temp = barcodes[0];
    let count = 1;
    let index = 0;
    let max = 0;
    //找出现次数最多的数
    for(let i = 1; i < len; i++){
        if(temp == barcodes[i]){
            count++;
        }else{
            temp = barcodes[i];
            if(max < count){
                max = count;
                index = i - count;
            }
            count = 1;
        }
    }
    if(max < count){
        max = count;
        index = len - count;
    }
    let ans = new Array(len);
    let pos = 0;
    let L = 0;
    let R = index + max;
    count = R;
    //放偶数位置
    while(pos < len){
        if(index < count){
            ans[pos] = barcodes[index];
            index++;
        }else{
            if(L < index - max){
                ans[pos] = barcodes[L];
                L++;
            }else{
                ans[pos] = barcodes[R]
                R++;
            }
        }  
        pos += 2;
    }
    //放奇数位置
    let i = 1;
    while(i < len){
        if(L < index - max){
            ans[i] = barcodes[L];
            L++;
        }else{
            ans[i] = barcodes[R]
            R++;
        }
        i += 2;
    }
    return ans
};
console.log("rearrangeBarcodes",rearrangeBarcodes([1,1,2]))
console.log("rearrangeBarcodes",rearrangeBarcodes([2,2,1,3]))
console.log("rearrangeBarcodes",rearrangeBarcodes([1,1,1,1,2,2,3,3]))
console.log("rearrangeBarcodes",rearrangeBarcodes([1,2,5,5,6,6,2,2,3]))
