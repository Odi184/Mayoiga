/* let position = 0;

function animate() {
  position += 1;
  document.body.style.backgroundPosition = `0 ${position}px`;
  requestAnimationFrame(animate);
}

window.onload = function () {
  animate();
};

let pos = 0;
const time = 150;
function backmove() {
	document.body.style.backgroundPosition = `50% ${pos}%`;
	if (pos < 50) {
	pos += 50/time;
	requestAnimationFrame(backmove);
	}
}

document.addEventListener("DOMContentLoaded", backmove);*/

document.addEventListener("DOMContentLoaded", () => {

	const paragraph = document.getElementById("hov-text");
	const gif = "/static/img/form.gif";

	document.querySelectorAll(".login-gif a img").forEach(img => {
		const origin = img.src;

		img.addEventListener("mouseenter", () => {
			paragraph.textContent = img.closest("a").dataset.text;
			img.src = gif;
		});
		img.addEventListener("mouseleave", () => {
			paragraph.textContent = "";
			img.src = origin;
		});
	});
});
