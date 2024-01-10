let counter = 0;

function bulbOn() {
  if (counter % 2 == 0) {
    let bulbObj = document.querySelector(".bulb-off");
    bulbObj.setAttribute("src", "./images/lightbulb-on.png"); //bulb on

    let btn = document.querySelector(".bulb-on "); // button
    btn.textContent = "off"  //change button text

    
    counter++;

  } else {
    let bulbObj = document.querySelector(".bulb-off");
    bulbObj.setAttribute("src", "./images/lightbulb-off.png"); //bulb off

    
    let btn = document.querySelector(".bulb-on "); // button
    btn.textContent = "on" //change button text

    counter++;
    
  }
}
