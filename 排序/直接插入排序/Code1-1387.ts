/**
 * 解题思路:此题目需要排序，但是排序的内容是需要动态生成的，所以可以在生成的过程中进行排序；
 * 这样就符合插入排序的思想，一个已经排序的数组，插入一个数据放在哪个位置；
 * 此题使用了直接插入排序，且符合时间复杂度是最优的情况
 */
interface Arr {
    [propName:string]:number
}
function getKth(lo: number, hi: number, k: number): number {
    let count:number = 0 
    const arr:Array<Arr> = []
    const weight = (num:number)=>{
        if(num === 1){
            return
        }
        count++
        if(num % 2 ===0){
            num =num / 2
        }else{
            num = 3 * num + 1
        }
        weight(num)
    }
    const insertionSort = (inset:Arr) =>{
        const { weight } = inset
        if(arr.length === 0 || weight>=arr[arr.length-1].weight){
            arr.push(inset)
        }else if(weight<arr[0].weight){
            arr.unshift(inset)
        }else{
            for(let i=arr.length-2;i>=0;i--){
                if(arr[i].weight<=weight){
                    arr.splice(i+1,0,inset)
                    break
                }
            } 
        }  
    }
    while(lo<=hi){
        count = 0
        weight(lo)
        insertionSort({'num':lo,'weight':count})
        lo++
        
    }
    return arr[k-1].num
};
console.log("getKth",getKth(12,15,2))
console.log("getKth",getKth(1,1,1))
console.log("getKth",getKth(7,11,4))
console.log("getKth",getKth(10,20,5))
console.log("getKth",getKth(1,1000,777))




