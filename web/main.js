function generateQRCode() {
  const data = document.getElementById("data").value.trim();
  const qrContainer = document.getElementById("qr");

  if (!data) {
      Swal.fire("Please enter some text!");
      return;
  }

  qrContainer.innerHTML = ""; // Clear any previous QR code

  new QRCode(qrContainer, {
      text: data,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
  });

  Swal.fire({
      title: 'Success',
      text: 'QR code generated!',
      icon: 'success',
      confirmButtonText: 'Cool'
  });
}
