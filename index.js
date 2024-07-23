let imageBox=document.getElementById("imgBox")
let img=document.getElementById("img")
let inputBox=document.getElementById("input-box")
function Qrcodegnerator(){
 if(inputBox.value.length >0){
  img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " +  inputBox.value;
    imageBox.classList.add("show-img")  
 }
    else{
      inputBox.classList.add('error')
      setTimeout(()=>{
       inputBox.classList.remove('error')


      },1000);
    
    }

  

}



