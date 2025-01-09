import { login } from "../auth/login.js";

let testsPassed = 0;
const totalTests = 5;

console.log("Test 1: Si no se pasa un password debe devoler null");
const resultTest1 = login("admin");
if (resultTest1 === null) {
  console.log("Test 1 Pass");
  testsPassed++;
} else console.log("Test 1 Fail");

console.log("Test 2: Si no se pasa un username debe devolver null");
const resultTest2 = login(undefined, "1234");
if (resultTest2 === null) {
  console.log("Test 2 Pass");
  testsPassed++;
} else console.log("Test 2 Fail");

console.log("Test 3: Si se pasa un password incorrecto debe devolver false");
const resultTest3 = login("admin", "admin");
if (resultTest3 === false) {
  console.log("Test 3 Pass");
  testsPassed++;
} else console.log("Test 3 Fail");

console.log("Test 4: Si pasa un username incorrecto debe devolver false");
const resultTest4 = login("pepito", "1234");
if (resultTest4 === false) {
  console.log("Test 4 Pass");
  testsPassed++;
} else console.log("Test 4 Fail");

console.log(
  "Test 5: Si se pasa un username y password correctos debe devolver true"
);
const resultTest5 = login("admin", "1234");
if (resultTest5 === true) {
  console.log("Test 5 Pass");
  testsPassed++;
} else console.log("Test 5 Fail");

if (testsPassed === totalTests) {
  console.log("Todos los tests pasaron");
} else {
  console.log(`Pasaron ${testsPassed} de ${totalTests} tests`);
}
