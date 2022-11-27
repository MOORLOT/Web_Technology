let answer1, answer2, answer3;
let discriminant;
let calcBtn = document.getElementById('calcBtn')
let res = document.getElementById('res')
let posX1, posY1, posZ1
let posX2, posY2, posZ2
let posX3, posY3, posZ3
let posX4, posY4, posZ4
let azimuthal1, azimuthal2, range
let D1, D2, D3, D4

function init() {
  posX1 = document.getElementById('a001').value;
  posY1 = document.getElementById('a002').value;
  posZ1 = document.getElementById('a003').value;

  posX2 = document.getElementById('b001').value;
  posY2 = document.getElementById('b002').value;
  posZ2 = document.getElementById('b003').value;

  posX3 = document.getElementById('c001').value;
  posY3 = document.getElementById('c002').value;
  posZ3 = document.getElementById('c003').value;

  posX4 = document.getElementById('enemy001').value;
  posY4 = document.getElementById('enemy002').value;
  posZ4 = document.getElementById('enemy003').value;

  azimuthal1 = document.getElementById('az1').value;
  azimuthal2 = document.getElementById('az2').value;
  range = document.getElementById('range').value;
}

function quadraticEquations() {
  init()
  document.getElementById("res1").innerHTML = rangeFormula(posX1, posY1, posZ1, posX4, posY4, posZ4);
  document.getElementById("res2").innerHTML = rangeFormula(posX2, posY2, posZ2, posX4, posY4, posZ4);
  document.getElementById("res3").innerHTML = rangeFormula(posX3, posY3, posZ3, posX4, posY4, posZ4);
  console.log(posX1)
}

function rangeFormula(x1, y1, z1, x2, y2, z2) {
  let res = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2)
  return Math.sqrt(res)
}

function getResTriangulationMethod() {
  init()
  D1 = triangulationMethodD1(azimuthal1, azimuthal2, range)
  D2 = triangulationMethodD2(azimuthal1, azimuthal2, range)
  D3 = triangulationMethodD2(azimuthal1, azimuthal2, range)
  D4 = triangulationMethodD2(azimuthal1, azimuthal2, range)

  document.getElementById("res4").innerHTML = D1
  document.getElementById("res5").innerHTML = D2
  document.getElementById("res6").innerHTML = D3
  document.getElementById("res7").innerHTML = D4

  document.getElementById("res8").innerHTML = D1 - D2
  document.getElementById("res9").innerHTML = D1 - D3
  document.getElementById("res10").innerHTML = D1 - D4
}

function triangulationMethodD1(azimuthal1, azimuthal2, range) {
  return range * Math.sin(180 - azimuthal2) / Math.sin(azimuthal2 - azimuthal1)
}

function triangulationMethodD2(azimuthal1, azimuthal2, range) {
  return range * Math.sin(azimuthal1) / Math.sin(azimuthal2 - azimuthal1)
}


