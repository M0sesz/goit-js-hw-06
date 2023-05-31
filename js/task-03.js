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
    const imgElement = document.createElement("img");
    imgElement.src = image.url;
    imgElement.alt = image.alt;
    imgElement.classList.add("gallery-image");
    imgElement.classList.add(`gallery-image-${index}`);
    imgElement.style.width = "250px";
    imgElement.style.height = "250px";
    imgElement.style.objectFit = "cover";
    galleryElement.style.display = "flex";
    galleryElement.style.justifyContent = "center";
    galleryElement.style.listStyle = "none";
    galleryElement.style.gap = "15px";

    const liEl = document.createElement("li");
    liEl.appendChild(imgElement);

    return liEl.outerHTML;
  })
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryItems);
