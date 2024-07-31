let inp =document.querySelector('#inp');
let v1 ='';
let r1 = 'https://www.bing.com/search?q=definition+of+'
let r2= '+in+Bangla&PC=U316&FORM=CHROMN'
let r3= '+in+English&PC=U316&FORM=CHROMN'

let sub1=document.querySelector('#submit_1');
let sub2=document.querySelector('#submit_2');
let err=document.querySelector('#h2')

sub1.addEventListener('click',(e)=>{
    console.log('click');
if (inp.value=='') {
  h2.innerHTML='Type something in the search bar '
} else {
      v1=r1+inp.value+r2;
    window.open(v1, '_self').focus();
        console.log('click');

}



})
sub2.addEventListener('click',(e)=>{
    console.log('click');

  if (inp.value == '') {
    h2.innerHTML = 'Type something in the search bar '
  } else {
    v1 = r1 + inp.value + r3;
    window.open(v1, '_self').focus();
        console.log('click');

  }


})

