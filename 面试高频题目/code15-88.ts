/**
 Do not return anything, modify nums1 in-place instead.
 */
/*
  *逆向双指针，由于nums1后半部分为空，所以从nums1的后面开始添加，这样不会导致nums1的值被覆盖掉
*/
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i=m-1,j=n-1,index = m+n-1
  while(i>=0 || j>=0){
    if(i === -1){
      nums1[index--] = nums2[j--]
    }else if(j=== -1){
      nums1[index--] = nums1[i--]
    }else{
      if(nums1[i]>nums2[j]){
        nums1[index--] = nums1[i--]
      }else{
        nums1[index--] = nums2[j--]
      }
    }
  }
};
console.log("merge",merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log("merge",merge([-1,-1,0,0,0,0],4,[-1,0],2))