const photos = [
  { src: "assets/photos/hero.jpg", thumb: "assets/thumbs/hero.jpg", title: "花丛边的 Macchiato", category: "Macchiato" },
  { src: "assets/photos/duoduo-park.jpg", thumb: "assets/thumbs/duoduo-park.jpg", title: "在草地上认真看世界", category: "Macchiato" },
  { src: "assets/photos/duoduo-school.jpg", thumb: "assets/thumbs/duoduo-school.jpg", title: "校园里的小小身影", category: "Macchiato" },
  { src: "assets/photos/duoduo-smile.jpg", thumb: "assets/thumbs/duoduo-smile.jpg", title: "靠墙微笑", category: "Macchiato" },
  { src: "assets/photos/family-three.jpg", thumb: "assets/thumbs/family-three.jpg", title: "三人行的温柔瞬间", category: "family" },
  { src: "assets/photos/family-close.jpg", thumb: "assets/thumbs/family-close.jpg", title: "挤在一起的笑脸", category: "family" },
  { src: "assets/photos/family-mountain.jpg", thumb: "assets/thumbs/family-mountain.jpg", title: "山上的三代合照", category: "family" },
  { src: "assets/photos/sibling-ride.jpg", thumb: "assets/thumbs/sibling-ride.jpg", title: "兄妹同框", category: "family" },
  { src: "assets/photos/sibling-night.jpg", thumb: "assets/thumbs/sibling-night.jpg", title: "夜晚一起玩", category: "family" },
  { src: "assets/photos/birthday-cake.jpg", thumb: "assets/thumbs/birthday-cake.jpg", title: "生日蛋糕与蜡烛", category: "birthday" },
  { src: "assets/photos/birthday-crown.jpg", thumb: "assets/thumbs/birthday-crown.jpg", title: "戴皇冠的生日合照", category: "birthday" },
  { src: "assets/photos/mom-son-smile.jpg", thumb: "assets/thumbs/mom-son-smile.jpg", title: "母子笑脸", category: "family" },
  { src: "assets/photos/mom-son-bed.jpg", thumb: "assets/thumbs/mom-son-bed.jpg", title: "贴近的日常", category: "family" },
  { src: "assets/photos/aunt-heart.jpg", thumb: "assets/thumbs/aunt-heart.jpg", title: "比心的小默契", category: "family" },
  { src: "assets/photos/aunt-hug.jpg", thumb: "assets/thumbs/aunt-hug.jpg", title: "亲密拥抱", category: "family" },
  { src: "assets/photos/maodou-study.jpg", thumb: "assets/thumbs/maodou-study.jpg", title: "认真学习", category: "daily" },
  { src: "assets/photos/maodou-food.jpg", thumb: "assets/thumbs/maodou-food.jpg", title: "餐桌边的快乐", category: "daily" },
  { src: "assets/photos/maodou-outdoor.jpg", thumb: "assets/thumbs/maodou-outdoor.jpg", title: "户外拿着纸的瞬间", category: "daily" },
  { src: "assets/photos/mother-sea.jpg", thumb: "assets/thumbs/mother-sea.jpg", title: "海边剪影", category: "daily" },
  { src: "assets/photos/mother-golf.jpg", thumb: "assets/thumbs/mother-golf.jpg", title: "明亮的户外自拍", category: "daily" },
];

const assetVersion = "20260703-2";

const videos = [
  { src: "assets/videos/moment-1.mp4", title: "生活片段 1" },
  { src: "assets/videos/moment-2.mp4", title: "快乐时刻 2" },
  { src: "assets/videos/moment-3.mp4", title: "短短一幕 3" },
  { src: "assets/videos/moment-4.mp4", title: "家庭视频 4" },
  { src: "assets/videos/moment-5.mp4", title: "生活片段 5" },
  { src: "assets/videos/moment-6.mp4", title: "开心片段 6" },
  { src: "assets/videos/moment-7.mp4", title: "欢乐片段 7" },
  { src: "assets/videos/moment-8.mp4", title: "温馨片段 8" },
];

const gallery = document.querySelector("#photoGallery");
const videoGrid = document.querySelector("#videoGrid");
const filters = document.querySelectorAll(".filter");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");

function renderPhotos(filter = "all") {
  gallery.innerHTML = "";
  const visiblePhotos = filter === "all" ? photos : photos.filter((photo) => photo.category === filter);

  visiblePhotos.forEach((photo) => {
    const button = document.createElement("button");
    button.className = "photo-card";
    button.type = "button";
    button.innerHTML = `<img src="${photo.thumb}" alt="${photo.title}" loading="lazy"><span>${photo.title}</span>`;
    button.addEventListener("click", () => openLightbox(photo));
    gallery.append(button);
  });
}

function renderVideos() {
  videos.forEach((video) => {
    const item = document.createElement("article");
    item.className = "video-card";
    item.innerHTML = `
      <video src="${video.src}?v=${assetVersion}" controls preload="metadata" playsinline></video>
      <p>${video.title}</p>
    `;
    videoGrid.append(item);
  });
}

function openLightbox(photo) {
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.title;
  lightboxCaption.textContent = photo.title;
  lightbox.showModal();
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderPhotos(button.dataset.filter);
  });
});

document.querySelector(".lightbox__close").addEventListener("click", () => {
  lightbox.close();
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

renderPhotos();
renderVideos();
