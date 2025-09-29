// Configure the code highlighter
var codeInput = document.getElementById("codeInput");
var codePreview = document.getElementById("codePreview");
// set the preview default value
codePreview.innerHTML = hljs.highlight(codeInput.value, { language: "javascript" }).value;
// set the delegate on changing the input
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

function goDark() {
    document.body.classList.add("dark")
    document.getElementById("darkButton").classList.add("active")
    document.getElementById("lightButton").classList.remove("active")
}

function goLight() {
    document.body.classList.remove("dark")
    document.getElementById("lightButton").classList.add("active")
    document.getElementById("darkButton").classList.remove("active")
}

function download() {
    // show message to start download
    const messages = document.getElementById("messages");
    messages.innerHTML = '<span class="download" style="min-width: 40px; height: 40px;"></span>Downloading...';
    messages.className = "showing"
    setTimeout(() => { messages.className = "" }, 2000);

    var elementToCapture = document.querySelector("#main-container");
    html2canvas(elementToCapture).then(function (canvas) {
        const link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.download = "code.png";
        link.click();
    })
}

function copyToClipboard() {
    const elementToCapture = document.querySelector("#main-container");

    html2canvas(elementToCapture).then(canvas => {
        const blobPromise = new Promise(resolve => {
            canvas.toBlob(blob => {
                resolve(blob);
            }, "image/png");
        });

        const clipboardItem = new ClipboardItem({
            "image/png": blobPromise
        });

        navigator.clipboard.write([clipboardItem])
            .then(() => {
                const messages = document.getElementById("messages");
                messages.innerHTML = '<span class="copy" style="min-width: 40px; height: 40px;"></span>Successfully copied to clipboard!';
                messages.className = "showing"
                setTimeout(() => { messages.className = "" }, 2000);
            })
            .catch(err => {
                console.log("failed to copy to clipboard. Error: " + err)
            });
    });
}