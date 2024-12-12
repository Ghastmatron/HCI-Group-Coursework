//going to shuffle the home items 
//to do this, i will make an array, shuffle the array, and access the first three values 

let HomeItem = ["Home item 1", "Home item 2", "Home item 3", "Home item 4", "Home item 5", "Home item 6", "Home item 7", "Home item 8", "Home item 9"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

function WriteToScreen(array){
    HomeItem = shuffle(HomeItem);
    document.getElementById('item1Heading').innerText = HomeItem[0];
    document.getElementById('item2Heading').innerText = HomeItem[1];
    document.getElementById('item3Heading').innerText = HomeItem[2];
}

function shuffleHomeItems(){
    WriteToScreen(HomeItem);
}

function drawBox(name, colour, Cox, Coy, Dx, Dy, txt, Ctxt, Ftxt, Coxtxt, Coytxt){//function to draw a box to the screen, makes it easier to further draw boxes
    const canvas = document.getElementById(name);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = colour;
    ctx.fillRect(Cox, Coy, Dx, Dy);

    ctx.fillStyle = Ctxt;
    ctx.font = Ftxt;
    ctx.fillText(txt, Coxtxt, Coytxt);
}
