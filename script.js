var codeInput = document.getElementById("codeInput");
var codePreview = document.getElementById("codePreview");
codeInput.addEventListener("input", function () {
    codePreview.innerHTML = hljs.highlight(codeInput.value, { language: "javascript" }).value;
});

function changeBackground(background) {
    const mainContainer = document.getElementById("main-container");
    mainContainer.className = background
}