
var cardgroup=["🥝","🍰","🍒","🍨"];
var duplicatedcards=cardgroup.concat(cardgroup);

console.log(table);

function randomcards(){
    var result;
    //console.log(result);

    result=duplicatedcards.sort(function(){
        return 0.5-Math.random();
    });
    return result;
}


function sortCards(){
    var table=document.querySelector("#table");
    var cardsrandomized=randomcards();

    table.innerHTML="";

    cardsrandomized.forEach(function(element){
    
        var singlecard=document.createElement("div");

        singlecard.innerHTML="<div class='card'>"+
        "<div class='cardcontent'>"+
        element+
        "</div>"+
        "</div>";

        table.appendChild(singlecard);

    });
}

function show(){
    this.classList.add("show");
}

sortCards();

document.querySelectorAll(".card").forEach(
    function(element){
        element.addEventListener("click",show);
    }
);