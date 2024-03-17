function t(t){let n=document.createElement("div");return n.classList.add("product-card"),n.innerHTML=`
  <img src="${t.images[0]}"/>
  <div class="info">
  <span class="category">${t.category}</span>
  <span class="title">${t.title}</span>
  <p class="description">${t.description}</p>
  </div>
  <div class="metadata">
  <div>
  <span class="rating">Rating: ${t.rating}</span>
  <span class="stock">Stock: ${t.stock}</span>
  </div>
  <button>Add to basket</button>
  </div>
  `,n}function n(n){let e=document.getElementById("product-list");e&&(e.innerHTML="",e.append(...n.map(t)))}async function e(){let t=await fetch("https://dummyjson.com/products");return await t.json()}async function s(t){let n=await fetch("https://dummyjson.com/products/search?q="+t);return await n.json()}const a=document.getElementById("searchForm"),c=document.getElementById("inputProduct");e().then(t=>{n(t.products)}),a.addEventListener("submit",function(t){t.preventDefault(),s(c?.value).then(t=>{n(t.products)}),c.value=""});
//# sourceMappingURL=index.0231c89a.js.map
