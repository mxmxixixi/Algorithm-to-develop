/**
 * 此题需要排序的数据是动态生成的，所以可以在生成的过程中直接进行排序
 * 此处排序的方法使用api-sort，自定义传入排序函数
 */
function filterRestaurants(restaurants: number[][], veganFriendly: number, maxPrice: number, maxDistance: number): number[] {
    const result:number[][] = []
    restaurants.forEach(v=>{
        if((veganFriendly ? veganFriendly === v[2] : true) && v[3]<=maxPrice && v[4]<=maxDistance){
            result.push(v)
        }
    })
    result.sort((a,b)=> {
        if(a[1]>b[1]){
            return -1
        }else if(a[1]===b[1]){
            if(a[0]>b[0]){
                return -1
            }else{
                return 1
            }
        }else{
            return 1
        }
    })
    return result.map(v=>v[0])
};
console.log("filterRestaurants",filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],1,50,10))
console.log("filterRestaurants",filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],0,50,10))
console.log("filterRestaurants",filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],0,30,3))




