function Login(evento){

    evento.preventDefault();

    var namefield=document.querySelector("#namefield").value;
    var passfield=document.querySelector("#passfield").value;

    console.log(namefield);
    console.log(passfield);

}


document.querySelector("#loginform").addEventListener("submit",Login);
