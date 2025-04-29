
window.onload = function () {
    afficherCategories();
    afficherProduits(products);
    document.getElementById('searchInput').addEventListener('input', filtrerProduits);
    document.getElementById('categoryFilter').addEventListener('change', filtrerProduits);
    document.getElementById('sortBy').addEventListener('change', filtrerProduits);
    document.getElementById('lowStock').addEventListener('change', filtrerProduits);
  };
  
  function afficherCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    const select = document.getElementById('categoryFilter');
    categories.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      select.appendChild(option);
    });
  }
  
  function filtrerProduits() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortBy').value;
    const lowStock = document.getElementById('lowStock').checked;
  
    let filtres = products.filter(p => {
      return (!category || p.category === category)
        && (!lowStock || p.stock < 5)
        && p.name.toLowerCase().includes(search);
    });
  
    if (sort === 'price') filtres.sort((a, b) => a.price - b.price);
    if (sort === 'stock') filtres.sort((a, b) => a.stock - b.stock);
  
    afficherProduits(filtres);
    afficherPrixTotal(filtres);
    dessinerGraphique(filtres);
  }
  
  function afficherProduits(liste) {
    const container = document.getElementById('productList');
    container.innerHTML = '';
    if (liste.length === 0) {
      container.textContent = 'Aucun produit trouvé.';
      return;
    }
  
    liste.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>Catégorie : ${p.category}</p>
        <p>Prix : ${p.price} DH</p>
        <p>Stock : ${p.stock}</p>
      `;
      container.appendChild(div);
    });
  }
  
 
  function afficherPrixTotal(liste) {
    const total = liste.reduce((sum, p) => sum + p.price, 0);
    document.getElementById('totalPrice').textContent = `Prix total : ${total} DH`;
  }
  
  
  function dessinerGraphique(liste) {
    const ctx = document.getElementById('productChart').getContext('2d');
    if (window.chartInstance) window.chartInstance.destroy();
  
    window.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: liste.map(p => p.name),
        datasets: [{
          label: 'Stock',
          data: liste.map(p => p.stock),
          backgroundColor: 'rgba(0, 123, 255, 0.6)'
        }]
      }
    });
  }
  
