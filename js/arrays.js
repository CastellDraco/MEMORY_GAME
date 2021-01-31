
var cardgroup=["🥝","🍎","🍐"];
var duplicatedcards=cardgroup.concat(cardgroup);

console.log(table);

function sortCards(){
    var table=document.querySelector("#table");
    
    table.innerHTML="";

    duplicatedcards.forEach(function(element){
    
        var singlecard=document.createElement("div");

        singlecard.innerHTML="<div id='card'>"+
        "<div class='cardcontent'>"+
        element+
        "</div>"+
        "</div>";

        table.appendChild(singlecard);

    });
}

sortCards();