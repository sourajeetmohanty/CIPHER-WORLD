
//encrypt   
let s="GeeksforGeeks";
let k="P";

let res="";
let l1=s.length;
let l2=k.length;


let i=0,j=0;
for( let i=0;i<l1;i++)
{
     
       let asci=s.charCodeAt(i);
      
       let ascik=k.charCodeAt(j);
     
       
 	
         
     
 		let ans=asci^ascik;
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res=res+c;
      

    
}
console.log(res);








//decrypt;
j=0;
let res2="";
for(let i=0;i<l1;i++)
{
    if(res[i]!=' ')
    {  
         let asci=res.charCodeAt(i);
        
         let ascik=k.charCodeAt(j);
       
 		
       
 	
        
         let ans=asci^ascik;
 		
 	
 	
 		
 	
 		let c=String.fromCharCode(ans);
        res2=res2+c;
        
    }
    else{
        res2=res2+' ';
    }
}
console.log(res2);