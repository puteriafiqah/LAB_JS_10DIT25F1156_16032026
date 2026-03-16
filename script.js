console.clear();
console.log("✅ script.js connected");

const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const btn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

console.log(nameInput);
console.log(pw1Input);
console.log(pw2Input);
console.log(btn);
console.log(outputBox);

btn.addEventListener("click", function () {
    console.log("✅ button clicked");
});

function calculateMarks() {
    console.log("➡️ calculateMarks() executed");
}

btn.addEventListener("click", function () {
    calculateMarks();
});

function calculateMarks() {
    let name = nameInput.value;
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    console.log("Name:", name);
    console.log("PW1:", pw1);
    console.log("PW2:", pw2);
}

let total = pw1 + pw2;
let average = total / 2;
let percentage = (total / 200) * 100;

console.log("Total:", total);
console.log("Average:", average);
console.log("Percentage:", percentage);

let grade;
if (average >= 80) {
    grade = "Excellent";
} else if (average >= 60) {
    grade = "Good";
} else if (average >= 40) {
    grade = "Satisfactory";
} else {
    grade = "Fail";
}
console.log("Grade:", grade);

function calculateMarks() {
    let name = nameInput.value.trim();
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    if (!name || isNaN(pw1) || isNaN(pw2) || pw1 < 0 || pw1 > 100 || pw2 < 0 || pw2 > 100) {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        outputBox.innerHTML = "❌ Please enter a aname and valid marks (0-100) for PW1 and PW2";
        return;
    }
    let total = pw1 + pw2;
    let average = total / 2;
    let percentage = (total / 200) * 100;

    let grade;
    if (average >= 80) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 40) {
        grade = "Satisfactory";
    } else {
        grade = "Fail";
    }

    outputBox.className = "alert alert-success mt-3 mb-0";
    outputBox.innerHTML = `

✅ Result summary

Name: ${name}

PW1: ${pw1} / 100

PW2: ${pw2} / 100

Total: ${total} / 200

Average: ${average.toFixed(2)} / 100

Percentage: ${percentage.toFixed(2)}%

Grade: ${grade}
 
`;
}

console.clear();
console.log("✅ script.js connected");

const marksInput = document.getElementById("marks");
const btnDOWhile = document.getElementById("btnDoWhile");
const btnFor = document.getElementById("btnFor");
const btnClear = document.getElementById("btnClear");
const output = document.getElementById("output");

console.log(marksInput, btnDOWhile, btnFor, btnClear, output);

document.addEventListener("DOMContentLoaded", function () {
    btnDOWhile.addEventListener("click", function () {
        console.log("✅ step 1 clicked");
    });

    btnFor.addEventListener("click", function () {
        console.log("✅ step 2 clicked");
    });

    btnClear.addEventListener("click", function () {
        console.log("✅ clear clicked");
    });
})

function getMarksArray() {
    let text = marksInput.value;
    return text.split(",").map(x => Number(x.trim()));
}

function calculateStats() {

    console.clear();
    console.log("=== DO-WHILE: TOTAL & AVERAGE ===");

    let marks = getMarksArray();

    let i = 0;
    let total = 0;

    do {
        total += marks[i];
        i++;
    } while (i < marks.lenght);

    let average = total / marks.length;

    console.log("Total =", total);
    console.log("Average =", average.toFixed(2));

    output.className = "alert alert-info mb-0";
    output.innerHTML =
        "Total Marks = <b>" + total + "</b><br>" +
        "Average Marks = <b>" + average.toFixed(2) + "</b>";
}

function countPassFail() {

    console.clear();
    console.log("=== FOR LOOP: PASS / FAIL COUNT ===");

    let marks = getMarksArray();

    let pass = 0;
    let fail = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            pass++;
            console.log("Mark", i + 1, "=", marks[i], "→ PASS");
        } else {
            fail++;
            console.log("Mark", i + 1, "=", marks[i], "→ FAIL");
        }
    }

    console.log("Total PASS =", pass);
    console.log("Total Fail =", fail);

    output.className = "alert alert-success mb-0";
    output.innerHTML =
        "Total PASS = <b>" + pass + "</b><br>" +
        "Total FAIL = <b>" + fail + "</b>";
}

function clearOutput() {
    console.clear();
    output.className = "alert alert-secondary mb-0";
    output.innerHTML = "Result cleared";
    marksInput.value = "";
}

document.addEventListener("DOMContentLoaded", function () {

    btnDoWhile.addEventListener("click", calculateStats);
    btnFor.addEventListener("click", countPassFail);
    btnClear.addEventListener("click", clearOutput);

});