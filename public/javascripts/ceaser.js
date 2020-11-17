                            
//encrypt   
$('#encrypt').on('click',()=>{
    let s=$('#input-txt').val();
    let k=$('#input-key').val();
    k = parseInt(k);
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
$('#result').val(res);
// $('.key').click(function() {
    $('.key').removeClass('on').addClass('off');
//   });
})




$('#decrypt').on('click',()=>{
    let res=$('#input-txt').val();
    let k=$('#input-key').val();
    k = parseInt(k);
    res=res.toUpperCase();
    l=res.length;
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
$('#result').val(res2);
$('.key').removeClass('off  ').addClass('on');
})


