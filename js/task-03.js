const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElement = document.querySelector(".gallery");

const galleryItems = images
  .map((image, index) => {
    return `<li>
      <img src="${image.url}"
           alt="${image.alt}"
           class="gallery-image gallery-image-${index}"
           style="width: 250px; height: 250px; object-fit: cover;"></li>
    `;
  })
  .join("");

galleryElement.style.display = "flex";
galleryElement.style.justifyContent = "center";
galleryElement.style.listStyle = "none";
galleryElement.style.gap = "15px";

galleryElement.insertAdjacentHTML("beforeend", galleryItems);
