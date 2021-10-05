let elemento = document.getElementById("principal");
// console.log(elemento);
// estructura del objeto
let usuario ={
    name:"Luis Navas",
    edad:48,
    email:"luis.navas@bue.edu.ar",
    pass:"123456",
    validar:(e,p)=>{
        if(e === usuario.email && p === usuario.pass){{
            return true
        }else{

 }
};
window.addEventListener(`load`, function()
elemento

let elemento = document.getElementById("principal");
// console.log(elemento);
 
window.addEventListener('load',function(){
    elemento.innerHTML=`
    <form class="col-4">
  <div class="mb-3">
    <label for="password" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button id="btn" type="button" class="btn btn-primary">Ingresar</button>
</form>
    `;
    document.getElementById("btn").addEventListener('click',()=>)
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    let entra = usuario.validar(email,pass);
    console.log(email)
    // console.log(pass)
    if(entra){
        elemento.innerHTML='
        <h1>Sistema administrativo</h1>
        <p>Bienvenid@ ${usuario.name}</p>
        ';
        // elemento.innerHTML=
        // 
    }else{
        elemento.innerHTML+=
       id="mensaje" class="alert alert-danger text-center w-75" role="alert">
        Usuario o contraseña incorrecto!
</div>

    }
})
})
function ocultar()

// para que borre el mensaje luego de unos segundos
// let tiempo = setInterval(()=>{
//   document.getElementbyId("mensaje").style.visibility=hidden
//    clearInterval;
// },3000);


