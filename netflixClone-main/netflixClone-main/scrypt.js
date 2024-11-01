const a = document.getElementById("faqdiv1");
const b = document.getElementById("faqdiv2");
const c = document.getElementById("faqdiv3");
const d = document.getElementById("faqdiv4");
const e = document.getElementById("faqdiv5");
const f = document.getElementById("faqdiv6");
var display = 0;
a.addEventListener("click", change1);
b.addEventListener("click", change2);
c.addEventListener("click", change3);
d.addEventListener("click", change4);
e.addEventListener("click", change5);
f.addEventListener("click", change6);
const b1 = document.getElementById("q11");
const b2 = document.getElementById("q12");
const b3 = document.getElementById("q13");
const b4 = document.getElementById("q14");
const b5 = document.getElementById("q15");
const b6 = document.getElementById("q16");
function change1(e) {
  if (display == 1) {
    b1.style.display = "block";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    b5.style.display = "none";
    b6.style.display = "none";

    display = 0;
  } else {
    b1.style.display = "none";
    display = 1;
  }
}

function change2(e) {
  if (display == 1) {
    b1.style.display = "none";
    b2.style.display = "block";
    b3.style.display = "none";
    b4.style.display = "none";
    b5.style.display = "none";
    b6.style.display = "none";
    display = 0;
  } else {
    b2.style.display = "none";
    display = 1;
  }
}

function change3(e) {
  if (display == 1) {
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "block";
    b4.style.display = "none";
    b5.style.display = "none";
    b6.style.display = "none";
    display = 0;
  } else {
    b3.style.display = "none";
    display = 1;
  }
}

function change4(e) {
  if (display == 1) {
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "block";
    b5.style.display = "none";
    b6.style.display = "none";
    display = 0;
  } else {
    b4.style.display = "none";
    display = 1;
  }
}

function change5(e) {
  if (display == 1) {
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    b5.style.display = "block";
    b6.style.display = "none";
    display = 0;
  } else {
    b5.style.display = "none";
    display = 1;
  }
}

function change6(e) {
  if (display == 1) {
    b1.style.display = "none";
    b2.style.display = "none";
    b3.style.display = "none";
    b4.style.display = "none";
    b5.style.display = "none";
    b6.style.display = "block";
    display = 0;
  } else {
    b6.style.display = "none";
    display = 1;
  
  }}