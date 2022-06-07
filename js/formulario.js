var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

var email, nombreCompleto, fechaNacimiento, genero, gradoAcad, edad;

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};


function calcularEdad(fechaNac) {
    let nacimiento = new Date(fechaNac), fechaActual = new Date(), edad;
    edad =  fechaActual.getFullYear() - nacimiento.getFullYear();
    return edad;
}

function mailBody(valores){
    let body = new String();
    body = "Nombre Completo: " + valores[1] + ".\n"
    + "Género: " + valores[3] + ".\n"
    + "Email: " + valores[0] + ".\n"
    + "Fecha de Nacimiento: " + new Date(valores[2]).toLocaleDateString() + ".\n"
    + "Edad: " + valores[5] + " Años.\n"
    + "Grado académico: " + valores[4] + "."
    return body;
}

function enviarFormulario(e){
    email = document.getElementById('email').value;
    nombreCompleto = document.getElementById('name').value;
    fechaNacimiento = document.getElementById('fecha').value;
    genero = document.getElementById('genero').value;
    gradoAcad = document.getElementById('gradoAcad').value;
    edad = calcularEdad(document.getElementById("fecha").value);

    let expNombre = /^[a-zA-ZÀ-ÿ\s]{1,60}$/;
    
    if(!expNombre.test(nombreCompleto)){
        alert("El nombre no tiene el formato correcto!");
        e.preventDefault();
        return;
    }

    if(edad <= 15){
        alert("La persona es demasiado joven para realizar la solicitud!");
        e.preventDefault();
        return;
    }
    const values = [email,  nombreCompleto,  fechaNacimiento, genero, gradoAcad, edad]
    try {
        Email.send({
            SecureToken : "3efe4cf1-5d33-43a0-a02f-527fa8c99262",
            To : 'cgrelectromecanica2@gmail.com',
            From : "pruebas.patrick.utn@gmail.com",
            Subject : "Información de Formulario CGR Electromecánica",
            Body : mailBody(values)
        }).then(
            alert("¡La información del formulario se envió satisfactoriamente!")
        );
    } catch (error) {
        alert("Error al enviar la informacion del formulario: " + error)
    }
}

formulario.addEventListener('submit', enviarFormulario);