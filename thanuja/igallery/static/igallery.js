
document.querySelectorAll('.image-container').forEach(container => {
  const caption = container.querySelector('.caption')?.textContent || 'Image';
  container.addEventListener('click', () => {
    const img = container.querySelector('img');
    openModal(img.src, caption);
    alert(`You clicked on: ${caption}`);
  });
});


let slideIndex = 1;
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dot");

function showSlides(n) {
  slideIndex = (n > slides.length) ? 1 : (n < 1) ? slides.length : n;
  slides.forEach(s => s.style.display = "none");
  dots.forEach(d => d.classList.remove("active"));
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);


function openModal(src, alt = '') {
  let modal = document.getElementById('imageModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.innerHTML = `
      <span id="closeModal" style="
        position:absolute;top:20px;right:30px;color:white;
        font-size:40px;font-weight:bold;cursor:pointer;">&times;</span>
      <img id="modalImg" style="
        max-width:90%;max-height:90%;
        box-shadow:0px 4px 10px rgba(0,0,0,0.6);">
    `;
    Object.assign(modal.style, {
      display: 'flex', position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    });
    document.body.appendChild(modal);
    modal.querySelector('#closeModal').onclick = () => modal.style.display = 'none';
  }

  const modalImg = modal.querySelector('#modalImg');
  modalImg.src = src;
  modalImg.alt = alt;
  modal.style.display = 'flex';
}
