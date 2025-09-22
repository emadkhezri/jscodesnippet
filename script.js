// Configure the code highlighter
var codeInput = document.getElementById("codeInput");
var codePreview = document.getElementById("codePreview");
codeInput.addEventListener("input", function () {
    codePreview.innerHTML = hljs.highlight(codeInput.value, { language: "javascript" }).value;
});

// update the main-container background
function changeBackground(event) {
    const mainContainer = document.getElementById("main-container");
    var selectedGradient = event.target.classList[1];
    mainContainer.className = selectedGradient;

    const colorPicker = document.getElementById("color-picker");
    const allBgColors = colorPicker.querySelectorAll(".bgcolor-selector")
    for (var index = 0; index < allBgColors.length; index++) {
        const element = allBgColors[index];
        if (!element.classList.contains(selectedGradient)) {
            element.classList.remove("active")
        } else {
            element.classList.add("active")
        }
    }
}

function download() {
    var elementToCapture = document.querySelector("#main-container");
    html2canvas(elementToCapture).then(function (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "code.png";
        link.click();
    })
}