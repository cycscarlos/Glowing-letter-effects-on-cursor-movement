let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");

document.onmousemove = (e) => {
  // Move cursor
  cursor.style.top = e.pageX + "px";
  cursor.style.left = e.pageY + "px";

  // Animate background
  body.style.backgroundPositionX = e.pageX + "px";
  body.style.backgroundPositionY = e.pageY + "px";

  // Add elements to the body
  let element = document.createElement("div");
  element.className = "element";
  body.prepend(element);

  // Move elements ramdomly across x o y axis
  element.style.left = cursor.getBoundingClientRect().x + "px";
  element.style.top = cursor.getBoundingClientRect().y - 10 + "px";

  setTimeout(() => {
    let text = document.querySelectorAll(".element")[0],
      directionX = Math.random() < 0.5 ? -1 : 1,
      directionY = Math.random() < 0.5 ? -1 : 1;

    text.style.left =
      parseInt(text.style.left) - directionX * (Math.random() * 100) + "px";
    text.style.top =
      parseInt(text.style.top) - directionY * (Math.random() * 100) + "px";
    //text.style.opacity = Math.random();
    text.style.opacity = 0;
    text.style.transform = "scale(.25)";
    text.innerHTML = randomText();

    // Remove element
    setTimeout(() => {
      element.remove();
    }, 1000);
  }, 10);
};

// Add random text on numbers
function randomText() {
  var text = "abdcefghijklmnopqrstuvwxyz1234567890".split("");
  letter = text[Math.floor(Math.random() * text.length)];
  return letter;
}
