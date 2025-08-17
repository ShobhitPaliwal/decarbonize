const wave1 = document.getElementById("wavePath1");
  const wave2 = document.getElementById("wavePath2");

  // Wave settings
  const baseY = 100;
  let offset1 = 0;
  let offset2 = 0;

  function generateWavePath(offset, waveLength, waveHeight) {
    let path = `M0,${baseY}`;
    for (let x = 0; x <= 1440; x += 20) {
      const y = baseY + Math.sin((x + offset) / waveLength * Math.PI * 2) * waveHeight;
      path += ` L${x},${y.toFixed(2)}`;
    }
    path += " L1440,150 L0,150 Z";
    return path;
  }

  function animateWaves() {
    offset1 += 1.2; // slower
    offset2 += 2;   // faster

    wave1.setAttribute("d", generateWavePath(offset1, 400, 20)); // big smooth wave
    wave2.setAttribute("d", generateWavePath(offset2, 300, 15)); // slightly smaller/faster wave

    requestAnimationFrame(animateWaves);
  }

  animateWaves();




const ctx = document.getElementById('carbonChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'kg CO₂',
      data: [200, 180, 150, 170, 140, 120],
      fill: true,
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      borderColor: '#2ecc71',
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { y: { beginAtZero: true } }
  }
});

function scrollCategories(direction) {
  const container = document.querySelector('.categories-wrapper .categories');
  const cardWidth = document.querySelector('.category-card').offsetWidth + 16;
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

function updateScrollButtons() {
  const container = document.querySelector('.categories-wrapper .categories');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');

  // Hide left button if at start
  leftBtn.style.display = container.scrollLeft <= 0 ? 'none' : 'block';

  // Hide right button if at end
  rightBtn.style.display =
    container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
      ? 'none'
      : 'block';
}

// Listen to scroll & window resize
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.categories-wrapper .categories');
  updateScrollButtons();
  container.addEventListener('scroll', updateScrollButtons);
  window.addEventListener('resize', updateScrollButtons);
});


const userCarbon = 120; // example
const indiaAverage = 150; // example

// Chart
const ctx2 = document.getElementById('comparisonChart').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Your Footprint', 'India Average'],
    datasets: [{
      label: 'kg CO₂',
      data: [userCarbon, indiaAverage],
      backgroundColor: ['#a8e6a3', '#d3d3d3'],
      borderRadius: 6
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Emoji performance check
const emojiEl = document.getElementById('performanceEmoji');
if (userCarbon < indiaAverage) {
  emojiEl.textContent = 'YOUR PERFORMANCE EMOJI : 😊';
} else if (userCarbon === indiaAverage) {
  emojiEl.textContent = 'YOUR PERFORMANCE EMOJI : 😐';
} else {
  emojiEl.textContent = 'YOUR PERFORMANCE EMOJI : 😢';
}

function scrollCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const scrollAmount = carousel.offsetWidth; // move by container width
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

const newsCarouselContainer = document.getElementById('newsCarousel');
const leftBtn = document.querySelector('.news-btn.left');
const rightBtn = document.querySelector('.news-btn.right');

function scrollNews(direction) {
  const cardWidth = newsCarouselContainer.querySelector('.news-card').offsetWidth + 20;
  newsCarouselContainer.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}

function updateNewsButtons() {
  // Hide left button if at start
  leftBtn.style.display = newsCarouselContainer.scrollLeft <= 0 ? 'none' : 'block';
  
  // Hide right button if at end
  rightBtn.style.display =
    newsCarouselContainer.scrollLeft + newsCarouselContainer.clientWidth >= newsCarouselContainer.scrollWidth - 1
      ? 'none'
      : 'block';
}

// Initial check
updateNewsButtons();

// Listen to scroll & resize
newsCarouselContainer.addEventListener('scroll', updateNewsButtons);
window.addEventListener('resize', updateNewsButtons);

