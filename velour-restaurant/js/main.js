/* =============================================
   VELOUR RESTAURANT — main.js
   ============================================= */

/* ---- PRELOADER ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
    // Trigger hero reveals after preloader
    document.querySelectorAll('.hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 200 + i * 150);
    });
  }, 2400);
});

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- HAMBURGER / MOBILE MENU ---- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* ---- MENU DATA ---- */
const menuData = {
  starters: [
    {
      name: 'Truffle Arancini',
      tag: 'Vegetarian',
      desc: 'Crispy Arborio rice balls filled with wild truffle and fontina cheese, served with a saffron aioli.',
      price: '$24',
      img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80&fit=crop'
    },
    {
      name: 'Seared Foie Gras',
      tag: 'Chef\'s Favourite',
      desc: 'Pan-seared duck foie gras on brioche toast with caramelised fig jam and micro herbs.',
      price: '$38',
      img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80&fit=crop'
    },
    {
      name: 'Burrata & Heirloom',
      tag: 'Seasonal',
      desc: 'Hand-crafted burrata with heirloom tomatoes, basil oil, Maldon salt and aged balsamic.',
      price: '$21',
      img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80&fit=crop'
    },
    {
      name: 'Wagyu Beef Tartare',
      tag: 'Premium',
      desc: 'Hand-cut A5 wagyu beef with capers, shallots, Dijon & a slow-cooked quail egg yolk.',
      price: '$46',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop'
    }
  ],
  mains: [
    {
      name: 'Dry-Aged Ribeye',
      tag: '45-Day Aged',
      desc: '400g prime Australian ribeye, dry-aged 45 days. Served with truffle butter, hand-cut fries & jus.',
      price: '$89',
      img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80&fit=crop'
    },
    {
      name: 'Beef Tenderloin Wellington',
      tag: 'Signature Dish',
      desc: 'Classic Beef Wellington — tenderloin wrapped in mushroom duxelles & golden puff pastry.',
      price: '$95',
      img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80&fit=crop'
    },
    {
      name: 'Truffle Rigatoni',
      tag: 'Pasta',
      desc: 'Hand-rolled rigatoni in a wild truffle cream sauce with shaved black truffle and Parmigiano Reggiano.',
      price: '$52',
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&fit=crop'
    },
    {
      name: 'BBQ Rack of Lamb',
      tag: 'Grilled',
      desc: 'French-trimmed rack of lamb with rosemary jus, minted pea purée and roasted root vegetables.',
      price: '$78',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop'
    }
  ],
  seafood: [
    {
      name: 'Whole Grilled Lobster',
      tag: 'Market Price',
      desc: 'Atlantic lobster grilled in herb butter, served with crushed new potatoes and a citrus beurre blanc.',
      price: '$120',
      img: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&q=80&fit=crop'
    },
    {
      name: 'Pan-Seared Sea Bass',
      tag: 'Daily Catch',
      desc: 'Line-caught sea bass with crispy skin, sautéed samphire, cherry tomato confit and saffron nage.',
      price: '$64',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80&fit=crop'
    },
    {
      name: 'King Prawn Linguine',
      tag: 'Pasta & Sea',
      desc: 'Tiger prawns tossed in a white wine, garlic and cherry tomato sauce with hand-pulled linguine.',
      price: '$58',
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&fit=crop'
    },
    {
      name: 'Oysters on Ice',
      tag: 'Raw Bar',
      desc: 'Half-dozen Carlingford oysters served on crushed ice with mignonette, tabasco and lemon.',
      price: '$34',
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80&fit=crop'
    }
  ],
  desserts: [
    {
      name: 'Valrhona Chocolate Fondant',
      tag: 'Warm Dessert',
      desc: 'Molten dark chocolate fondant with a liquid salted caramel centre and Madagascar vanilla ice cream.',
      price: '$22',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80&fit=crop'
    },
    {
      name: 'Crème Brûlée',
      tag: 'Classic',
      desc: 'Vanilla-infused custard with a perfectly torched sugar crust and fresh summer berries.',
      price: '$18',
      img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80&fit=crop'
    },
    {
      name: 'Mango Panna Cotta',
      tag: 'Tropical',
      desc: 'Silky Italian panna cotta with Alphonso mango coulis, passion fruit and coconut tuile.',
      price: '$19',
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80&fit=crop'
    },
    {
      name: 'Artisan Cheese Board',
      tag: 'Selection',
      desc: 'Five curated artisan cheeses with honeycomb, quince paste, toasted brioche and seasonal fruits.',
      price: '$28',
      img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80&fit=crop'
    }
  ]
};

/* ---- RENDER MENU ---- */
const menuGrid = document.getElementById('menuGrid');

function renderMenu(cat) {
  menuGrid.innerHTML = '';
  menuData[cat].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="menu-card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy"/>
      </div>
      <div class="menu-card-body">
        <p class="menu-card-tag">${item.tag}</p>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <span class="price">${item.price}</span>
          <button class="add-btn" title="Add to wishlist">+</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}
renderMenu('starters');

/* ---- MENU TABS ---- */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderMenu(tab.dataset.cat);
  });
});

/* ---- TESTIMONIAL SLIDER ---- */
const cards = document.querySelectorAll('.test-card');
const dotBtns = document.querySelectorAll('.dot-btn');
let current = 0, autoSlide;

function goTo(i) {
  cards[current].classList.remove('active');
  dotBtns[current].classList.remove('active');
  current = i;
  cards[current].classList.add('active');
  dotBtns[current].classList.add('active');
}
dotBtns.forEach(btn => btn.addEventListener('click', () => {
  clearInterval(autoSlide);
  goTo(+btn.dataset.i);
  startAuto();
}));
function startAuto() {
  autoSlide = setInterval(() => goTo((current + 1) % cards.length), 5000);
}
startAuto();

/* ---- RESERVATION FORM ---- */
const resForm = document.getElementById('resForm');
const resSuccess = document.getElementById('resSuccess');
if (resForm) {
  resForm.addEventListener('submit', (e) => {
    e.preventDefault();
    resForm.style.display = 'none';
    resSuccess.style.display = 'flex';
  });
}

/* ---- SCROLL REVEAL ---- */
const revealEls = document.querySelectorAll('.about *, .menu-header, .gallery-header, .test-header, .contact-info, .res-form-col > *');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.about-img-main, .about-img-accent, .about-badge, .about-text-col, .gallery-section, .offer-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(el);
});

/* ---- SMOOTH ANCHOR SCROLL ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ---- ADD BUTTON FEEDBACK ---- */
document.addEventListener('click', e => {
  if (e.target.classList.contains('add-btn')) {
    const btn = e.target;
    btn.textContent = '✓';
    btn.style.background = 'var(--gold)';
    btn.style.color = 'var(--dark)';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  }
});

/* ---- GALLERY LIGHTBOX ---- */
const gItems = document.querySelectorAll('.g-item');
const lightbox = document.createElement('div');
lightbox.style.cssText = `
  position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:9998;
  display:none;align-items:center;justify-content:center;cursor:pointer;
`;
lightbox.innerHTML = `<img style="max-width:90vw;max-height:90vh;object-fit:contain;box-shadow:0 0 60px rgba(0,0,0,0.8);" id="lbImg"/>`;
document.body.appendChild(lightbox);
gItems.forEach(item => {
  item.style.cursor = 'zoom-in';
  item.addEventListener('click', () => {
    document.getElementById('lbImg').src = item.querySelector('img').src;
    lightbox.style.display = 'flex';
  });
});
lightbox.addEventListener('click', () => { lightbox.style.display = 'none'; });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') lightbox.style.display = 'none';
});

console.log('%cVELOUR Restaurant Website', 'color:#c9a84c;font-size:1.5rem;font-family:serif;');
console.log('%cBuilt with passion. Fine dining, finer code.', 'color:#888;font-size:0.85rem;');
