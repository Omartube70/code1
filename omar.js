// sing in
let name = document.getElementById('name')
let list = document.getElementById('list name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let click1 = document.getElementById('click1')
let sing = document.getElementById('sing')
let number = document.getElementById('number')
//title

let xc = document.getElementById('Home')
let SingIn = document.getElementById('Sing In')
let LoginIn = document.getElementById('Login In')


//login in

let emailtest = document.getElementById('emailtest')
let passwordtest = document.getElementById('passwordtest')
let click2 = document.getElementById('click2')
let login = document.getElementById('login')

//product
let datePro;
if( localStorage.pro != null){
    datePro = JSON.parse(localStorage.pro)
}
else{
    datePro = [];
}


SingIn.onclick = function(){

  sing.classList.remove('hide')
sing.classList.add('sing-in')

}

LoginIn.onclick= function(){

    login.classList.remove('hide')
    login.classList.add('Login-in')

    sing.classList.add('hide')
    sing.classList.remove('sing-in')
    
}

click1.onclick = function(){
    let x = {
        name:name.value,
        list:list.value,
        email:email.value,
        password:password.value,
        number:number.value,

    }

if(name.value !='' && email.value !='' && password.value !='' ){
    document.getElementById('h132').innerHTML = 'Thanks You'
    datePro.push(x)
localStorage.pro = JSON.stringify(datePro)
name.value = ''
list.value=''
email.value=''
password.value=''



setTimeout(greet, 1500);
function greet() {
    
    sing.classList.remove('sing-in')
    sing.classList.add('hide')


}


}
else{

    document.getElementById('h132').innerHTML = 'Place Enter Date'


}

  
}
click2.onclick = function(){

 for( let i = 0 ;  i < datePro.length ; i++){

    if(  emailtest.value  == datePro[i].email   &&  passwordtest.value == datePro[i].password ){

            console.log('d')
              document.getElementById('h23').innerHTML = 'Login In Suscsusfle'



setTimeout(greet, 1500);
function greet() {
    
    login.classList.remove('Login-in')
    login.classList.add('hide')


}

document.getElementById('name23').innerHTML = `hello ${datePro[i].name}` 



    }


    else{
         document.getElementById('h23').innerHTML = 'Your Email Or Password Is False'
             document.getElementById('7689').innerHTML = '<button onclick="omar()" id="hj">Forget Password</button>'
    }
   
  

   
    
 }



}
let poer;
xc.onclick = function(){
    login.classList.add('hide')
    login.classList.remove('Login-in')

    sing.classList.add('hide')
    sing.classList.remove('sing-in')
    

}

 function omar(){

document.getElementById('poi').innerHTML = '<input type="number"  id="aopd" placeholder="Enter To secourte number(foget password)"> <br><button onclick="omar1()" id="click3">Comfirm</button>'
let x = document.getElementById('click3')
 poer = document.getElementById('aopd')





 }
 function omar1(){

    for( let i = 0 ; i< datePro.length ; i++){
        if(poer.value == datePro[i].number){
            console.log('doney')

        }
        else{
            console.log('not')
        }
    }

}




    
