document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height / 2;
  var speed = 2;

  var leftPressed = false;
  var rightPressed = false;
  var upPressed = false;
  var downPressed = false;

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(event) {
    if (event.key === "ArrowLeft") {
      leftPressed = true;
    } else if (event.key === "ArrowRight") {
      rightPressed = true;
    } else if (event.key === "ArrowUp") {
      upPressed = true;
    } else if (event.key === "ArrowDown") {
      downPressed = true;
    }
  }

  function keyUpHandler(event) {
    if (event.key === "ArrowLeft") {
      leftPressed = false;
    } else if (event.key === "ArrowRight") {
      rightPressed = false;
    } else if (event.key === "ArrowUp") {
      upPressed = false;
    } else if (event.key === "ArrowDown") {
      downPressed = false;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (leftPressed) {
      x -= speed;
    } else if (rightPressed) {
      x += speed;
    }

    if (upPressed) {
      y -= speed;
    } else if (downPressed) {
      y += speed;
    }

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(draw);
  }

  draw();
});
