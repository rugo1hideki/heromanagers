function menu0() {
  document.getElementById("arrows").classList.remove("onebutt", "twobutt");
  document.getElementById("qualityDiv").classList.remove("onebutt", "twobutt");
  document.getElementById("story").classList.add("twobutt");
  document.getElementById("arrows").classList.add("onebutt");
  document.getElementById("qualityDiv").classList.add("onebutt");
}
function menu1() {
  document.getElementById("arrows").classList.remove("onebutt", "twobutt");
  document.getElementById("story").classList.remove("onebutt", "twobutt");
  document.getElementById("qualityDiv").classList.remove("onebutt", "twobutt");
  document.getElementById("story").classList.add("onebutt");
  document.getElementById("arrows").classList.add("twobutt");
  document.getElementById("qualityDiv").classList.add("onebutt");
}
function menu2() {
  document.getElementById("arrows").classList.remove("onebutt", "twobutt");
  document.getElementById("story").classList.remove("onebutt", "twobutt");
  document.getElementById("qualityDiv").classList.remove("onebutt", "twobutt");
  document.getElementById("story").classList.add("onebutt");
  document.getElementById("arrows").classList.add("onebutt");
  document.getElementById("qualityDiv").classList.add("twobutt");
}
