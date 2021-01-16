/**
 * 解题思路:使用快速排序对数组进行排序
 */
function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const arr:number[] = [],answer:boolean[] = []
    const quickSort = (left:number,right:number)=>{
        if(left>=right){
            return
        }
        let l = left,r = right;
        const standard = arr[l];
        while(l<r){
            while(l<r && arr[r]>=standard){
                r--
            }
            l < r && (arr[l++] = arr[r])
            while(l<r && arr[l] <= standard){
                l++
            }
            l < r && (arr[r--] = arr[l])
        }
        arr[l] = standard
        quickSort(left,l-1)
        quickSort(l+1,right)
    }
    for(let i=0;i<l.length;i++){
        arr.length = 0
        arr.push(...nums.slice(l[i],r[i]+1))
        const count = arr.length
        if(count > 2){
            quickSort(0,count-1)
            let flag = true
            for(let j=1;j<count-1;j++){
                const poor = arr[1]-arr[0]
                if(arr[j+1]-arr[j] === poor){
                }else{  
                    flag = false
                    break
                }
            }
            if(flag){
                answer.push(true)
            }else{
                answer.push(false)
            }
        }else if(count === 2){
            answer.push(true)
        }else{
            answer.push(false)
        } 
    }
    return answer
};
console.log("checkArithmeticSubarrays",checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]))
console.log("checkArithmeticSubarrays",checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10],[0,1,6,4,8,7],[4,4,9,7,9,10]))



