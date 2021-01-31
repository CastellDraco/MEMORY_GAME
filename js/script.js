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

var cardgr1=["🥳","👾","👻","🤡"];
var cardgr2=["😡","🍕","🧅","🍺"];
var cardgr3=["🧬","📐","🩰","🍪"];

//To find a especific element into an array use includes
console.log(cardgr1.includes("📐"));

var allcards= cardgr1.concat(cardgr2,cardgr3);
console.log(allcards);
console.log(allcards.length);

allcards.push("🥩");
console.log("New item: "+allcards.length);

var nestedarray=[
    ["🥝","🍎","🍐","🍊"],
    ["🥑","🌶","🌽","🥔"],
    ["🌭","🥪","🍤","🥘"],
    ["🍷","🍺","🍹","🧃"]
];

console.log(nestedarray[0][3]);