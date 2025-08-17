document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".reward-card");
  const prevBtn = document.querySelector(".carousel-btn.left");
  const nextBtn = document.querySelector(".carousel-btn.right");

  // 👇 Start at the 2nd card
  let currentIndex = 1;

  function updateCarousel() {
    if (!cards.length) return;

    const container = document.querySelector(".rewards-carousel");
    const containerWidth = container.offsetWidth;
    const activeCard = cards[currentIndex];
    const cardRect = activeCard.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const cardCenter = cardRect.left + cardRect.width / 2;
    const containerCenter = containerRect.left + containerWidth / 2;

    const diff = containerCenter - cardCenter;
    const currentTransform = parseFloat(track.style.transform?.match(/-?\d+/)?.[0] || 0);

    track.style.transform = `translateX(${currentTransform + diff}px)`;

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  // 👇 Run once so page opens on 2nd card
  setTimeout(updateCarousel, 50);
});