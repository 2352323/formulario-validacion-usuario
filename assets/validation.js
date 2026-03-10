const form = document.getElementById("registroForm");
const btnEnviar = document.getElementById("btnEnviar");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const fecha = document.getElementById("fecha");
const celular = document.getElementById("celular");
const telefono = document.getElementById("telefono");
const terminos = document.getElementById("terminos");

function mostrarError(input, mensaje){
const error = input.parentElement.querySelector(".error");
error.textContent = mensaje;
input.classList.add("invalido");
input.classList.remove("valido");
}

function mostrarValido(input){
const error = input.parentElement.querySelector(".error");
error.textContent = "";
input.classList.add("valido");
input.classList.remove("invalido");
}

function validarNombre(){
if(nombre.value.trim().length < 3){
mostrarError(nombre,"Debe tener mínimo 3 caracteres");
return false;
}
mostrarValido(nombre);
return true;
}

function validarCorreo(){
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!regex.test(correo.value)){
mostrarError(correo,"Correo no válido");
return false;
}
mostrarValido(correo);
return true;
}

function validarPassword(){
const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W]).{8,}$/;

if(!regex.test(password.value)){
mostrarError(password,"Min 8 caracteres, mayúscula, número y símbolo");
return false;
}

mostrarValido(password);
return true;
}

function validarConfirmPassword(){

if(confirmPassword.value !== password.value){
mostrarError(confirmPassword,"Las contraseñas no coinciden");
return false;
}

mostrarValido(confirmPassword);
return true;
}

function validarEdad(){

const nacimiento = new Date(fecha.value);
const hoy = new Date();

let edad = hoy.getFullYear() - nacimiento.getFullYear();

if(edad < 18){
mostrarError(fecha,"Debes ser mayor de 18 años");
return false;
}

mostrarValido(fecha);
return true;
}

function validarCelular(){

const regex = /^3\d{9}$/;

if(!regex.test(celular.value)){
mostrarError(celular,"Número celular colombiano inválido");
return false;
}

mostrarValido(celular);
return true;
}

function validarTelefono(){

if(telefono.value === ""){
return true;
}

const regex = /^\d{10}$/;

if(!regex.test(telefono.value)){
mostrarError(telefono,"Debe tener 10 dígitos");
return false;
}

mostrarValido(telefono);
return true;
}

function validarTerminos(){

if(!terminos.checked){
terminos.parentElement.querySelector(".error").textContent="Debes aceptar los términos";
return false;
}

terminos.parentElement.querySelector(".error").textContent="";
return true;
}

form.addEventListener("submit",function(e){

e.preventDefault();

const valido =
validarNombre() &
validarCorreo() &
validarPassword() &
validarConfirmPassword() &
validarEdad() &
validarCelular() &
validarTelefono() &
validarTerminos();

if(valido){
document.getElementById("mensajeExito").textContent="Registro exitoso 🎉";
form.reset();
}
});
