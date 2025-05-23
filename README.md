# Ex.08 Design of Interactive Image Gallery
## Date:16-05-2025

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Photo Gallery</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
      color: #333;
    }

    @keyframes gradientBG {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    header {
      text-align: center;
      padding: 60px 20px 30px;
      color: white;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    }

    header h1 {
      font-size: 3rem;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
      padding: 60px 30px;
      max-width: 1300px;
      margin: auto;
    }

    .gallery-item {
      position: relative;
      border-radius: 15px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      border: 4px solid white;
    }

    .gallery-item:hover {
      transform: scale(1.03);
    }

    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      justify-content: center;
      align-items: center;
      padding: 40px;
      color: white;
      text-align: center;
      z-index: 1000;
    }

    .modal-content {
      max-width: 700px;
      background: linear-gradient(to right, #232526, #414345);
      padding: 30px 40px;
      border-radius: 20px;
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
      border: 2px solid #00f2fe;
    }

    .modal-content h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      color: #00f2fe;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .modal-content p {
      font-size: 1.1rem;
      line-height: 1.6;
      color: #f1f1f1;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 10px;
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 30px;
      background: #ff4b2b;
      color: white;
      border: none;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      font-size: 20px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header>
    <h1>Interactive Photo Info Gallery</h1>
    <h3>PANGA THANUJA (24900052)</h3>
  </header>

  <main class="gallery">
    <div class="gallery-item" data-title="Taj Mahal" data-info="The Taj Mahal, located in Agra, India, is one of the Seven Wonders of the World. Built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.">
      <img src="taj_mahal.jpg" alt="Taj Mahal">
    </div>
    <div class="gallery-item" data-title="Spain" data-info="Spain is known for its vibrant culture, historic cities, and beautiful coastlines. The architecture blends Roman, Moorish, and Gothic styles.">
      <img src="spain.jpg" alt="Spain">
    </div>
    <div class="gallery-item" data-title="Serene Lake" data-info="A serene lake surrounded by forests, perfect for relaxation, reflection, and nature photography.">
      <img src="serene_lake.avif" alt="Serene Lake">
    </div>
    <div class="gallery-item" data-title="City Lights" data-info="City lights at night represent urban life, energy, and the heartbeat of modern civilization.">
      <img src="city_lights.jpg" alt="City Lights">
   
  </main>

  <div class="modal" id="modal">
    <div class="modal-content" id="modalTextContent">
      <!-- Filled by JS -->
    </div>
    <button class="modal-close" id="closeModal">&times;</button>
  </div>

  <script>
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalTextContent = document.getElementById('modalTextContent');
    const closeModal = document.getElementById('closeModal');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const info = item.getAttribute('data-info');
        modalTextContent.innerHTML = `
          <h2>${title}</h2>
          <p>${info}</p>
        `;
        modal.style.display = 'flex';
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      modalTextContent.innerHTML = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modalTextContent.innerHTML = '';
      }
    });
  </script>

</body>
</html>


```
CSS

```

body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
  background: #f4f4f4;
  color: #333;
}

h1 {
  margin: 20px 0;
  font-size: 2.2em;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 30px;
}

.image-container {
  position: relative;
  width: 40%;
  max-width: 500px;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.image-container:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0,0,0,0.6);
  color: #fff;
  padding: 8px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.3s;
}

.image-container:hover .caption {
  opacity: 1;
}

.frame {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;
}

.slides {
  width: 80%;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.7);
  color: #fff;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  transition: transform 0.3s;
}

.prev:hover, .next:hover {
  transform: translateY(-50%) scale(1.2);
}

.prev { left: 50px; }
.next { right: 50px; }

.dot-class {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 12px;
  height: 12px;
  background: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.dot:hover, .dot.active {
  background: #007BFF;
  transform: scale(1.2);
}
```
JS:

```
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
```



## OUTPUT:


![alt text](<Screenshot 2025-05-16 175902.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
