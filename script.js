lcdRGB.lcdNew("lcd1", ".hello");
lcdRGB.writeRow("lcd1", "#1 HereCard ", 0);
lcdRGB.writeRow("lcd1", "Easy Attendence", 1);
lcdRGB.blink(true, "lcd1", "00", "11");

lcdRGB.lcdNew("lcd2", ".hello");
lcdRGB.writeRow("lcd2", "Coming soon...", 0);

lcdRGB.lcdNew("lcd3", ".hello");
lcdRGB.writeRow("lcd3", "Coming soon...", 0);

var element1 = document.getElementById("lcd1");
element1.onclick = function (event) {
  console.log(event);
  openPop();
};

var popup1 = document.getElementById(".popup1");

function openPop() {
  document.getElementById("popup1").style.display = "Block";
}

window.addEventListener("click", closePop);

function closePop(e) {
  if (e.target == popup1) {
    document.getElementById("popup1").style.display = "none";
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.getElementById("popup1").style.display = "none";
      //do something
    }
  });
}

var element2 = document.getElementById("lcd2");
element2.onclick = function (event) {
  console.log(event);
  openPop2();
};

var popup2 = document.getElementById(".popup2");

function openPop2() {
  document.getElementById("popup2").style.display = "Block";
}

window.addEventListener("click", closePop2);

function closePop2(e) {
  if (e.target == popup2) {
    document.getElementById("popup1").style.display = "none";
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.getElementById("popup2").style.display = "none";
      //do something
    }
  });
}

var element3 = document.getElementById("lcd3");
element3.onclick = function (event) {
  console.log(event);
  openPop3();
};

var popup3 = document.getElementById(".popup3");

function openPop3() {
  document.getElementById("popup3").style.display = "Block";
}

window.addEventListener("click", closePop3);

function closePop3(e) {
  if (e.target == popup3) {
    document.getElementById("popup1").style.display = "none";
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.getElementById("popup3").style.display = "none";
      //do something
    }
  });
}

var span1 = document.getElementById("span1");
span1.onclick = function (event) {
  console.log("event");
  document.getElementById("popup1").style.display = "none";
  // closePop();
};

var span2 = document.getElementById("span2");
span2.onclick = function (event) {
  console.log("event");
  document.getElementById("popup2").style.display = "none";
  // closePop();
};

var span3 = document.getElementById("span3");
span3.onclick = function (event) {
  console.log("event");
  document.getElementById("popup3").style.display = "none";
  // closePop();
};
