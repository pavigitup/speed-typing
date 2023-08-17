let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let options = {
    method: "GET",

};
spinnerEl.classList.remove("d-none");
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(res) {
        return res.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        quoteDisplayEl.textContent = jsonData.content;
    });

let count = 0;
let intervalId = setInterval(function() {
    count = count + 1;
    timerEl.textContent = count + " seconds";
}, 1000);

submitBtnEl.addEventListener("click", function() {
    clearInterval(intervalId);
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        resultEl.textContent = "You typed in " + timerEl.textContent;
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});

resetBtnEl.addEventListener("click", function() {
    quoteInputEl.value = "";
    count = 0;
    intervalId = setInterval(function() {
        count = count + 1;
        timerEl.textContent = count + " seconds";
    }, 1000);
});