function Login(evento){

    evento.preventDefault();

    var namefield=document.querySelector("#namefield").value;
    var passfield=document.querySelector("#passfield").value;
    var feedback=document.querySelector("#user_feedback");

    var message="<p>Welcome "+namefield+" enjoy!</p>";

    console.log(namefield);
    console.log(passfield);

    //feedback.textContent="a message without html";

    feedback.innerHTML=message;

}


document.querySelector("#loginform").addEventListener("submit",Login);
