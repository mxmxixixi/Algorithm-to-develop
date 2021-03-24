/**
 * 使用map存储不重复的值
 * 在遇到重复字符时，把存储的重复字符前的字符全部删除
*/
function lengthOfLongestSubstring(s: string): number {
  const assistMap = new Map();
    let maxCount = 0;
    for(let i=0;i<s.length;i++){
        if(assistMap.has(s[i])){
            maxCount = Math.max(maxCount,assistMap.size);
            const deleteKey = [...assistMap.keys()]
            for(let j=0;j<deleteKey.length;j++){
                assistMap.delete(deleteKey[j])
                if(deleteKey[j] === s[i]){
                    break
                }
            }
        }
        assistMap.set(s[i],i)
        maxCount = Math.max(maxCount,assistMap.size);
    }
  return maxCount
};