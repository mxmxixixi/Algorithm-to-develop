/**
 * 解题思路
 */
/**
 * 第一种解题思路
 * 
 */
function validIPAddress(IP: string): string {
    if((/\./).test(IP)){
		const found =IP.split(".");
        const regex = /^\d+$/;
        if(found.length != 4){
            return 'Neither'
        }
		for(let i=0;i<found.length;i++){
            let v= found[i]
            if((v.length>=2 && v[0] === '0') || Number(v)<0 || Number(v)>255 ||v===''||  !regex.test(v)){
				return 'Neither'
			}
        }
        return 'IPv4'
    }else if((/\:/).test(IP)){
		const found = IP.split(":");
        const regex = '0123456789abcdefABCDEF';
		let result = 0;
        if(found.length!=8){
            return 'Neither'
        }
		for(let i=0;i<found.length;i++){
            let v = found[i]
            if(v === '' || v.length>4){
				return 'Neither'
			}else{
                for (let i=0;i<v.length;i++) {
                    if (regex.indexOf(v[i]) == -1){
                        return 'Neither'
                    }
                }
			}
        }
        return 'IPv6'
	}
    return 'Neither'
};
console.log("validIPAddress",validIPAddress("172.16.254.1"))
console.log("validIPAddress",validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log("validIPAddress",validIPAddress("256.256.256.256"))
console.log("validIPAddress",validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:"))
console.log("validIPAddress",validIPAddress("1e1.4.5.6"))



