canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_x=100;
rover_y=200;
rover_width=100;
rover_height=100;
function addimage(){
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadbackground;
    bg_imgtag.src=background_image;
    r_imgtag=new Image();
    r_imgtag.onload=uploadrover;
    r_imgtag.src=rover_image;
}
function uploadbackground(){
ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(r_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log ("upkeypressed");
    }
    if(keypressed=='37'){
        left();
        console.log ("leftkeypressed");
    }
    if(keypressed=='39'){
        right();
        console.log ("rightkeypressed");
    }
    if(keypressed=='40'){
        down();
        console.log ("downkeypressed");
    }
}