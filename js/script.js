//just a script to play with the javascripts options
console.log("Cherry bomb!");
var msg="Hello from the other side...";

var greetings=["Ciao","Hola","Hi"];

function message(){
    var show_it=true;
    if(show_it==true){
        console.log(msg);
    }else{
        console.log("Can you hear me?");
    }
}

message();

function say_something(position){
    console.log(position);
}

greetings.forEach(
    function(valor)
    {
        say_something(valor);
    }
);

var kitty={
    name:"Roncito",
    age: "8 months",
    owner: "Castelldraco",

    purr: function(){
        console.log("puurrrr 🐈");
    }
};

console.log(kitty.name);
console.log(kitty.age);
console.log(kitty.owner);
kitty.purr();

var header=document.querySelector("h1");

console.log(header);
header.textContent="Goodbye";

function changeMessage(){
    this.classList.textContent="Arrivederci";
    console.log("Message was changed");
}

document.querySelector("h1").addEventListener("click",changeMessage);