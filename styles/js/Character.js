let i = "1";
let w = "1";
let e = "1";
let r = "1";

let j = 3;
var leatherTheame = ["Satin", "August Sun", "Caramel"];
var faceTheame = ["Face 1", "Face 2", "Face 3"];
var hairstyleTheame = ["Hairstyle 1", "Hairstyle 2", "Hairstyle 3"];
var colorleatherTheame = ["Bondar", "Reaper", "Jester"];
let lT = 0;
let fT = 0;
let hT = 0;
let cT = 0;

function next() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  i++;
  if (i > 3) {
    i = 1;
  }
  document.getElementById("a").value = i + w + e + r + ".PNG";
  document.getElementById("content" + i + w + e + r).classList.add("active");

  lT++;
  if (lT > 2) {
    lT = 0;
  }

  document.getElementById("leatherColorValue").innerHTML = leatherTheame[lT];

  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}

function next2() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  w++;
  if (w > 3) {
    w = 1;
  }

  document.getElementById("content" + i + w + e + r).classList.add("active");

  fT++;
  if (fT > 2) {
    fT = 0;
  }
  document.getElementById("faceValue").innerHTML = faceTheame[fT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}

function next3() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  e++;
  if (e > 3) {
    e = 1;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  hT++;
  if (hT > 2) {
    hT = 0;
  }
  document.getElementById("hairStyleValue").innerHTML = hairstyleTheame[hT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}

function next4() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  r++;
  if (r > 3) {
    r = 1;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  cT++;
  if (cT > 2) {
    cT = 0;
  }
  document.getElementById("hairColorValue").innerHTML = colorleatherTheame[cT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}

function prev() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  i--;
  if (i < 1) {
    i = 3;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  lT--;
  if (lT < 0) {
    lT = 2;
  }
  document.getElementById("leatherColorValue").innerHTML = leatherTheame[lT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}
function prev2() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  w--;
  if (w < 1) {
    w = 3;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  fT--;
  if (fT > 0) {
    fT = 2;
  }
  document.getElementById("faceValue").innerHTML = faceTheame[fT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}
function prev3() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  e--;
  if (e < 1) {
    e = 3;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  hT--;
  if (hT > 0) {
    hT = 2;
  }
  document.getElementById("hairStyleValue").innerHTML = hairstyleTheame[hT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}
function prev4() {
  document.getElementById("content" + i + w + e + r).classList.remove("active");
  r--;
  if (r < 1) {
    r = 3;
  }
  document.getElementById("content" + i + w + e + r).classList.add("active");

  cT--;
  if (cT > 0) {
    cT = 2;
  }
  document.getElementById("hairColorValue").innerHTML = colorleatherTheame[cT];
  document.getElementById("a").value = "" + i + w + e + r + ".PNG";
}
