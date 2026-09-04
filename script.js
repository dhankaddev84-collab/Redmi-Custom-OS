const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const brandSelect = document.querySelector('.brand-select');
const brandOptions = brandSelect?.querySelector('select');

brandOptions?.addEventListener('change', () => {
  const label = brandSelect?.firstChild;
  if (label) label.textContent = `${brandOptions.value} `;
});
const devices = [
  {
    brand: "Redmi",
    name: "Redmi K20",
    codename: "davinci",
    image: "images/redmi-k20.jpg"
  },
  {
    brand: "Redmi",
    name: "Redmi Note 10 Pro",
    codename: "sweet",
    image: "images/redmi-note-10-pro.jpg"
  },
  {
    brand: "Redmi",
    name: "Redmi Note 12",
    codename: "sunstone",
    image: "images/redmi-note-12.jpg"
  }
];