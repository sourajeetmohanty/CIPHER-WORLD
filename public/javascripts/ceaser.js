                            
//encrypt   
let s="abcd sadasd";
let k=2;
s=s.toUpperCase();
let res="";
let l=s.length;
for(let i=0;i<l;i++)
{
    if(s[i]!=' ')
    {
       let asci=s.charCodeAt(i);
       asci=asci-"A".charCodeAt(0);
 		
       
 	
 		let shift=(asci+k)%26;
 		let ans=65+shift;
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res=res+c;
    }
    else{
        res=res+' ';
    }
}
console.log(res);







//decrypt;
let res2="";
for(let i=0;i<l;i++)
{
    if(res[i]!=' ')
    {
       let asci=res.charCodeAt(i);
       asci=asci-"A".charCodeAt(0);
 		
       
 	
         let shift=(asci-k)%26;
         let ans;
 		if(shift<0)
 		ans=91+shift;
 		else
 		ans=65+shift;
 	
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res2=res2+c;
    }
    else{
        res2=res2+' ';
    }
}
console.log(res2);