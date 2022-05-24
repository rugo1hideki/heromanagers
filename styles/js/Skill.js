let valueN = 3;
let silaV = 10;
let lovkV = 10;
let intelV = 10;
let TelosV = 10;
let PamV = 10;
let VospV = 10;
function minusS() {
  if (valueN < 3) {
    valueN++;
    silaV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("strengthV").innerHTML = silaV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("silV").value = silaV;
}
function plusS() {
  if (valueN > 0) {
    valueN--;
    silaV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("strengthV").innerHTML = silaV;
  document.getElementById("silV").value = silaV;
}
function minusL() {
  if (valueN < 3) {
    valueN++;
    lovkV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("dexterityV").innerHTML = lovkV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("lovV").value = lovkV;
}
function plusL() {
  if (valueN > 0) {
    valueN--;
    lovkV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("dexterityV").innerHTML = lovkV;
  document.getElementById("lovV").value = lovkV;
}
function minusI() {
  if (valueN < 3) {
    valueN++;
    intelV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("intelligenceV").innerHTML = intelV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("intV").value = intelV;
}
function plusI() {
  if (valueN > 0) {
    valueN--;
    intelV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("intelligenceV").innerHTML = intelV;
  document.getElementById("intV").value = intelV;
}
function minusT() {
  if (valueN < 3) {
    valueN++;
    TelosV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("bodyV").innerHTML = TelosV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("telV").value = TelosV;
}
function plusT() {
  if (valueN > 0) {
    valueN--;
    TelosV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("bodyV").innerHTML = TelosV;
  document.getElementById("telV").value = TelosV;
}
function minusP() {
  if (valueN < 3) {
    valueN++;
    PamV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("memoryV").innerHTML = PamV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("pamV").value = PamV;
}
function plusP() {
  if (valueN > 0) {
    valueN--;
    PamV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("memoryV").innerHTML = PamV;
  document.getElementById("pamV").value = PamV;
}
function minusVo() {
  if (valueN < 3) {
    valueN++;
    VospV--;
  }
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("perceptionV").innerHTML = VospV;
  if (valueN > 2) {
    document.getElementById("minusV").classList.add("behaind");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
  document.getElementById("vosV").value = VospV;
}
function plusVo() {
  if (valueN > 0) {
    valueN--;
    VospV++;
  }
  chek();
  document.getElementById("numberV").innerHTML = valueN;
  document.getElementById("perceptionV").innerHTML = VospV;
  document.getElementById("vosV").value = VospV;
}
function chek() {
  if (valueN < 1) {
    document.getElementById("plusV").classList.remove("twobutt");
    document.getElementById("plusV").classList.add("behaind");
  }
  if (valueN < 3) {
    document.getElementById("minusV").classList.remove("behaind");
    document.getElementById("minusV").classList.add("twobutt");
  }
  if (valueN > 0) {
    document.getElementById("plusV").classList.remove("behaind");
    document.getElementById("plusV").classList.add("twobutt");
  }
}
