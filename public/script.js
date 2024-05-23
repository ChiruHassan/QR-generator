

const QRCode = require('qr-image');
const form = document.getElementById('qr-form');
const urlInput = document.getElementById('url');
const qrCode = document.getElementById('qr-code');
const downloadLink = document.getElementById('download-link');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Generate QR code image from the URL
  const qr = QRCode.imageSync(urlInput.value, { type: 'png' });
  const qrCodeBlob = new Blob([qr], { type: 'image/png' });

  // Display the QR code image
  const qrCodeImg = document.createElement('img');
  qrCodeImg.src = URL.createObjectURL(qrCodeBlob);
  qrCode.innerHTML = '';
  qrCode.appendChild(qrCodeImg);

  // Create a download link for the QR code image
  const url = URL.createObjectURL(qrCodeBlob);
  downloadLink.href = url;
  downloadLink.hidden = false;
});




