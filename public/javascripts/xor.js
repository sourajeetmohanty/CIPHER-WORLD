
//encrypt   
$('#encrypt').on('click',()=>{
    let s=$('#input-txt').val();
    let k=$('#input-key').val();

let res="";
let l1=s.length;


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
$('#result').val(res);
// $('.key').click(function() {
    $('.key').toggleClass('on').toggleClass('off');
//   });
})







//decrypt;

$('#decrypt').on('click',()=>{
    let res=$('#input-txt').val();
    let k=$('#input-key').val();
    res=res.toUpperCase();
k=k.toUpperCase();
let j=0;
let res2="";
l1=res.length;
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
$('#result').val(res2);
$('.key').removeClass('off  ').addClass('on');
})
