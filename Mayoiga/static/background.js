const element = document.getElementById('back_img');
let position = 0;

function animate() {
  position += 1;
  element.style.backgroundPosition = `${position}px 0`;
  requestAnimationFrame(animate);
}

window.onload = function () {
  animate();
};
