//------------------------------------------------------------------Change Background----------------------------------------------------------//
// Function för att ändra färg på bakgrunden
function change_bg()
{   
    // Bestämmer bakgrunden med random färg
    document.body.style.backgroundColor = get_random_color();
}

// Funktion för att generera en slumpmässig hexadecimalfärgkod
function get_random_color()
{
    // Slumpmässigt väljer ett tecken från strängen "letters" och lägger till det i färgkoden
    var letters = "0123456789ABCDEF";
    // Startvärdet för färgkoden
    var color = "#";
    // Slumpmässigt väljer ett tecken från strängen "letters" och lägger till det i färgkoden
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
    }
    // Returnerar den genererade slumpmässiga färgkoden
    return color; 
}

//-----------------------------------------------------------------Good Vibes och Time------------------------------------------------------//
// Funktion för att visa uppmuntrande meddelande
function good_vibes() {
    document.getElementById("header_text").innerHTML = "You are doing great buddy!!!";
    document.getElementById("header_text").style.display = "inline";
}

// Funktion för att visa aktuell tid
function time() {
    document.getElementById("time_text").innerHTML = Date();
    document.getElementById("time_text").style.display = "inline";
}


//--------------------------------------------------------------------Pictures---------------------------------------------------------------//
// Funktion för att ändra bildkällan beroende på den aktuella bilden

function change_image() {
    if (document.getElementById("picture").src.includes("king.png")) {
        // Om bildkällan innehåller "king.png", ändra den till "queen.png"
        document.getElementById("picture").src = "queen.png";
    } else {
        // Om bildkällan inte innehåller "king.png", ändra den till "king.png"
        document.getElementById("picture").src = "king.png";
    }
}

// Funktion för att ta bort bilden genom att ändra displayegenskapen till "none"
function remove_image() {
    document.getElementById("picture").style.display = "none";
}

// Funktion för att visa bilden genom att ändra displayegenskapen till "inline"
function show_image() {
    document.getElementById("picture").style.display = "inline";
}

//-------------------------------------------------------------------Header------------------------------------------------------------//


// Funktion för att ändra stilen för en header
function header()
{   
    // Hämtar elementet med id "div1" och lagrar det i variabeln "div"
    var div = document.getElementById("div1"); 
    div.style.alignItems = "center"
    div.style.padding = "10px";
    div.style.backgroundColor = "gray"; 
}

// Funktion för att ta bort en header
function remove_header()
{   
    // Sätter displayegenskapen för elementet med id "div1" till "none" för att gömma den
    document.getElementById("div1").style.display = "none"; 
}

// Funktion för att visa en header
function show_header()
{
    // Sätter displayegenskapen för elementet med id "div1" till "flex" för att visa den
    document.getElementById("div1").style.display = "flex"; 

    // Visar sita medelandet
    document.getElementById("last_msg").style.display = "flex";
    document.getElementById("last_msg").style.justifyContent = "center";
}

   
