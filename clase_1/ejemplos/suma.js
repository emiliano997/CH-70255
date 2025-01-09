// v1
// function suma(num1, num2) {
//   if (!num1 || !num2) return 0;
//   if (typeof num1 !== "number" || typeof num2 !== "number") return null;

//   return num1 + num2;
// }

// v2
// function suma(...nums) {
//   if (nums.length === 0) return 0;

//   let validInput = true;

//   nums.forEach((num) => {
//     if (typeof num !== "number") {
//       validInput = false;
//     }
//   });

//   if (!validInput) return null;

//   let result = 0;
//   nums.forEach((num) => {
//     result += num;
//   });

//   return result;
// }

// v3
function suma(...nums) {
  if (nums.length === 0) return 0;

  if (!nums.every((num) => typeof num === "number")) return null;

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
}

let testsPassed = 0;
const totalTests = 4;

console.log("Test 1: Debe devolver null si el parámetro no es numérico");
const resultTest1 = suma("2", 2);
if (resultTest1 === null) {
  console.log("Test 1 Pass");
  testsPassed++;
} else {
  console.log("Test 1 Fail");
}

console.log("Test 2: Debe devolver 0 si no se pasó ningún parametro");
const resultTest2 = suma();
if (resultTest2 === 0) {
  console.log("Test 2 Pass");
  testsPassed++;
} else {
  console.log("Test 2 Fail");
}

console.log("Test 3: Debe resolver la suma correctamente");
const resultTest3 = suma(2, 2);
if (resultTest3 === 4) {
  console.log("Test 3 Pass");
  testsPassed++;
} else {
  console.log("Test 3 Fail");
}

console.log(
  "Test 4: Debe resolver la suma correctamente con cualquier cantidad de números"
);
const resultTest4 = suma(1, 2, 3);
if (resultTest4 === 6) {
  console.log("Test 4 Pass");
  testsPassed++;
} else {
  console.log("Test 4 Fail");
}

if (testsPassed === totalTests) {
  console.log("Todos los tests pasaron");
} else {
  console.log(`Pasaron ${testsPassed} de ${totalTests} tests`);
}
