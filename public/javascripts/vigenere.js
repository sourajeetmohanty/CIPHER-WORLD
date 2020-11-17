
//encrypt   
let s="abcdsadasd";
let k="key";
s=s.toUpperCase();
k=k.toUpperCase();
let res="";
let l1=s.length;
let l2=k.length;
if(l2<=l1)
{
	while(l2<=l1)
	{
		k=k+k;
		l2=k.length;
	}
}

let i=0,j=0;
for( let i=0;i<l1;i++)
{
    if(s[i]!=' ')
    {  
       let asci=s.charCodeAt(i);
       asci=asci-"A".charCodeAt(0);
       let ascik=k.charCodeAt(j);
       ascik=ascik-"A".charCodeAt(0);
       
 	
         let shift=(asci+ascik);
        
         if(shift>=26)
         shift=shift-26;
     
 		let ans=65+shift;
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res=res+c;
        j++;
    }
    else{
        res=res+' ';
    }
}
console.log(res);








//decrypt;
j=0;
let res2="";
for(let i=0;i<l1;i++)
{
    if(res[i]!=' ')
    {   if(k[j]==' ')
         j++;
         let asci=res.charCodeAt(i);
         asci=asci-"A".charCodeAt(0);
         let ascik=k.charCodeAt(j);
         ascik=ascik-"A".charCodeAt(0);
 		
       
 	
         let shift=(asci-ascik);
         let ans;
 		if(shift<0)
 		ans=91+shift;
 		else
 		ans=65+shift;
 	
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res2=res2+c;
        j++;
    }
    else{
        res2=res2+' ';
    }
}
console.log(res2);