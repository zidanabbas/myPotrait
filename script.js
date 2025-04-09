<script>
  window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgmusic');
    audio.muted = false;
    audio.play().catch((e) => {
      console.log('Autoplay diblokir, tunggu interaksi user.');
    });
  });
</script>
