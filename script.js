document.getElementById("generate-button").addEventListener("click", function () {
    // Clear the previous QR code if it exists
    var qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = '';

    var input = document.getElementById("url-input").value;
    if (input) {
        var qrCode = new QRCode(qrcodeDiv, {
            text: input,
            width: 200,
            height: 200,
        });
    }
});