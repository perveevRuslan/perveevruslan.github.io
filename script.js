document.addEventListener("DOMContentLoaded", function() {
  let scanner = new Instascan.Scanner({ video: document.getElementById('scanner') });

  scanner.addListener('scan', function(content) {
    alert("Содержимое QR-кода: " + content);
    scanner.stop(); // Остановка сканирования после первого успешного считывания
  });

  Instascan.Camera.getCameras().then(function(cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]); // Используем первую доступную камеру
    } else {
      console.error('Камеры не обнаружены.');
    }
  }).catch(function(e) {
    console.error(e);
  });
});
