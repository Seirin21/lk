// confetti (only runs on the greeting page, where #confetti-layer exists)
const layer = document.getElementById('confetti-layer');
if (layer) {
  const colors = ['#FF8FA3', '#FFD166', '#8FE3CF', '#4961E1', '#AECCE4', '#FFFFFF'];
  for (let i = 0; i < 45; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (4 + Math.random() * 5) + 's';
    c.style.animationDelay = (Math.random() * 6) + 's';
    c.style.width = (6 + Math.random() * 6) + 'px';
    c.style.height = (10 + Math.random() * 8) + 'px';
    layer.appendChild(c);
  }
}

// video upload preview (only runs on the video page)
const videoInput = document.getElementById('videoInput');
if (videoInput) {
  const videoPreview = document.getElementById('videoPreview');
  const uploadLabel = document.getElementById('uploadLabel');
  videoInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      videoPreview.src = url;
      videoPreview.style.display = 'block';
      uploadLabel.style.display = 'none';
    }
  });
}
