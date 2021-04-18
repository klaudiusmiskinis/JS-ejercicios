document.addEventListener('mousemove', function(e) {
    let square = document.getElementById('square');
    let left = e.offsetX;
    let top = e.offsetY;
    square.style.left = left + 10 + 'px';
    square.style.top = top + 10 + 'px';
  });
