let nums = document.querySelectorAll("button");
for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key = this.innerHTML;
    makesound(key);
    btnAnimation(key);

  });
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  btnAnimation(event.key);
});

function btnAnimation(event){
  document.querySelector("." + event).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("." + event).classList.remove("pressed");
  }, 100);
  //document.querySelector("." + event).classList.toggle("pressed");
}
function makesound(key){
  switch(key){
    case "a":
        var kick = new Audio("sounds/a-3.mp3");
        kick.play();
        break;
    case "b":
        var c = new Audio("sounds/b3.mp3");
        c.play();
        break;
    case "c":
        var brh = new Audio("sounds/b4.mp3");
        brh.play();
        break;
    case "d":
        var crash = new Audio("sounds/c-4.mp3");
        crash.play();
        break;
    case "e":
        var crash = new Audio("sounds/c-5.mp3");
        crash.play();
        break;
    case "f":
          var snare = new Audio("sounds/d-3.mp3");
          snare.play();
          break;   
    case "g":
          var tom2 = new Audio("sounds/c3.mp3");
          tom2.play();
          break;  
    case "h":
          var tom2 = new Audio("sounds/d-5.mp3");
          tom2.play();
          break;
    case "i":
          var tom2 = new Audio("sounds/d3.mp3");
          tom2.play();
          break;
    case "j":
          var tom2 = new Audio("sounds/d4.mp3");
          tom2.play();
          break;        
    case "k":
            var tom3 = new Audio("sounds/d5.mp3");
            tom3.play();
          break;
    case "l":
          var tom4 = new Audio("sounds/e3.mp3");
          tom4.play();
          break;
    case "m":
          var tom2 = new Audio("sounds/e4.mp3");
          tom2.play();
          break;
    case "n":
          var tom2 = new Audio("sounds/e5.mp3");
          tom2.play();
          break;
    case "o":
          var tom2 = new Audio("sounds/a-5.mp3");
          tom2.play();
          break;
    case "p":
          var tom2 = new Audio("sounds/a3.mp3");
          tom2.play();
          break;
    case "q":
          var tom2 = new Audio("sounds/f-5.mp3");
          tom2.play();
          break;
    case "r":
          var tom2 = new Audio("sounds/f3.mp3");
          tom2.play();
          break;
    case "s":
          var tom2 = new Audio("sounds/f5.mp3");
          tom2.play();
          break;
    case "t":
          var tom2 = new Audio("sounds/g-3.mp3");
          tom2.play();
          break;
    case "u":
          var tom2 = new Audio("sounds/g-4.mp3");
          tom2.play();
          break;
    case "v":
          var tom2 = new Audio("sounds/g-5.mp3");
          tom2.play();
          break;
    case "w":
          var tom2 = new Audio("sounds/g3.mp3");
          tom2.play();
          break;
    case "x":
          var tom2 = new Audio("sounds/g4.mp3");
          tom2.play();
          break;
    case "y":
          var tom2 = new Audio("sounds/g5.mp3");
          tom2.play();
          break;
    case "z":
          var tom2 = new Audio("sounds/c5.mp3");
          tom2.play();
          break;
    case "+":
          var tom2 = new Audio("sounds/a-4.mp3");
          tom2.play();
          break;
    case "-":
          var tom2 = new Audio("sounds/g5.mp3");
          tom2.play();
          break;
    case "*":
          var tom2 = new Audio("sounds/f-5.mp3");
          tom2.play();
          break;
    case "0":
          var tom2 = new Audio("sounds/harp.wav");
          tom2.play();
          break;
    default:
  }
}