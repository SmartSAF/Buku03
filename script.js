$(document).ready(function() {
  // Inisialisasi flipbook dengan turn.js
  $("#flipbook").turn({
    width: $(window).width(),
    height: $(window).height(),
    autoCenter: true,
    gradients: true,
    acceleration: true,
    // Event ketika halaman sedang berbalik
    when: {
      turning: function(event, page, view) {
        // Mainkan suara flip setiap kali halaman berubah
        var audio = document.getElementById('pageTurnSound');
        audio.currentTime = 0;
        audio.play().catch(function(e) {
          console.log("Pemutaran audio gagal:", e);
        });
      }
    }
  });

  // Opsional: Update ukuran flipbook saat jendela berubah ukuran
  $(window).resize(function() {
    $("#flipbook").turn("size", $(window).width(), $(window).height());
  });
});
