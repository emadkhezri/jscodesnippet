var codeInput = document.getElementById("codeInput");
var codePreview = document.getElementById("codePreview");
codeInput.addEventListener("input", function () {
    codePreview.innerHTML = hljs.highlight(codeInput.value, { language: "javascript" }).value;
});

function changeBackground(event) {
    const mainContainer = document.getElementById("main-container");
    mainContainer.className = event.target.classList[1]
}