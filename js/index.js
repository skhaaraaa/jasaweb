function toggleTheme(){
  const html = document.documentElement;
  html.dataset.theme =
    html.dataset.theme === "light" ? "" : "light";
}

function selectPackage(el){
  document.querySelectorAll('.price-card')
    .forEach(card => card.classList.remove('active'));
  el.classList.add('active');
}

function order(text){
  const wa = "6281210214235";
  window.open(
    `https://wa.me/${wa}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}

function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("show");
}
