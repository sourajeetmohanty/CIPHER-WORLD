$('#encrypt').on('click',()=>{
    let s=$('#input-txt').val();
    let k=$('#input-key').val();
    k = parseInt(k);
    s=s.toUpperCase();
    let res="";
    for(let i=0;i<4;i++)
    {
        
        let asci=s.charCodeAt(i);
        asci=asci-"A".charCodeAt(0);
            
        
        
            let shift=(asci+k)%26;
            let ans=65+shift;
        
            
        
            let c=String.fromCharCode(ans);
            res=res+c;
        
    }
console.log(res);
$('#result').val(res);
// $('.key').click(function() {
    $('.key').toggleClass('off').toggleClass('on');
//   });
})


// Decrypt
$('#decrypt').on('click',()=>{
    $('#result').val('bo')
})

$('.key').click(function() {
    $('.key').toggleClass('on').toggleClass('off');
  });
  