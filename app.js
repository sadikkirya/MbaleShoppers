const img = (q) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=700&q=80`;
const products = [
{id:1,name:"Samsung Galaxy A25 5G 128GB",cat:"Phones",shop:"Sms Phone And electronic center mbale",price:899000,old:1049000,rating:4.7,reviews:126,tag:"BEST SELLER",delivery:"Pickup / seller delivery",desc:"5G smartphone with vivid AMOLED display, reliable battery life and modern camera system.",image:img("photo-1511707171634-5f897ff02aa9")},
{id:2,name:"iPhone 13 128GB",cat:"Phones",shop:"MY PHONES MBALE",price:1899000,old:2100000,rating:4.8,reviews:84,tag:"POPULAR",delivery:"Seller delivery",desc:"Premium Apple smartphone with strong camera performance and smooth everyday use.",image:img("photo-1592286927505-2fd0a2f6b5f0")},
{id:3,name:"Oraimo FreePods Lite",cat:"Electronics",shop:"P & T ELECTRONICS MBALE",price:95000,old:120000,rating:4.5,reviews:211,tag:"DEAL",delivery:"Pickup available",desc:"Wireless earbuds designed for calls, music and everyday commuting.",image:img("photo-1606220945770-b5b6c2c55bf1")},
{id:4,name:"25,000mAh Fast Power Bank",cat:"Electronics",shop:"VIVA ELECTRONICS",price:165000,old:195000,rating:4.4,reviews:73,tag:"HOT DEAL",delivery:"Seller delivery",desc:"High-capacity portable power bank with multiple charging outputs.",image:img("photo-1609592424846-1d8d6e1a8a2a")},
{id:5,name:"Men's Smart Casual Shirt",cat:"Fashion",shop:"Kim's fashion house",price:65000,old:80000,rating:4.5,reviews:31,tag:"NEW",delivery:"Pickup / local delivery",desc:"Smart-casual shirt suitable for work, weekends and events.",image:img("photo-1603252110481-7ba873bf42ab")},
{id:6,name:"Women's Handbag — Classic",cat:"Fashion",shop:"Emily's Boutique",price:85000,old:110000,rating:4.6,reviews:42,tag:"TRENDING",delivery:"Seller delivery",desc:"Structured everyday handbag with a clean, versatile finish.",image:img("photo-1584917865442-de89df76afd3")},
{id:7,name:"Rice 5kg Premium",cat:"Grocery",shop:"Republic Super Market",price:26000,old:29000,rating:4.6,reviews:57,tag:"VALUE",delivery:"Store pickup",desc:"Premium household rice pack. Exact brand and stock should be confirmed with seller.",image:img("photo-1586201375761-83865001e31c")},
{id:8,name:"Cooking Oil 3 Litres",cat:"Grocery",shop:"Map Supermarket",price:22000,old:24500,rating:4.5,reviews:39,tag:"DEAL",delivery:"Store pickup",desc:"Household cooking oil. Brand may vary based on current seller stock.",image:img("photo-1474979266404-7eaacbcd87c5")},
{id:9,name:"50-inch Smart TV",cat:"Electronics",shop:"P & T ELECTRONICS MBALE",price:1450000,old:1599000,rating:4.4,reviews:29,tag:"BIG SAVING",delivery:"Seller delivery",desc:"Large smart TV for streaming, sports and family entertainment.",image:img("photo-1593359677879-a4bb92f829d1")},
{id:10,name:"Electric Blender 1.5L",cat:"Home",shop:"Bam Shopping Center",price:145000,old:170000,rating:4.3,reviews:26,tag:"VALUE",delivery:"Store pickup",desc:"Multi-purpose kitchen blender for smoothies, sauces and daily food prep.",image:img("photo-1570222094114-d054a817e56b")},
{id:11,name:"Air Fryer 5L Digital",cat:"Home",shop:"Bam Shopping Center",price:285000,old:320000,rating:4.6,reviews:61,tag:"POPULAR",delivery:"Seller delivery",desc:"Digital air fryer with preset cooking programs and large family-friendly capacity.",image:img("photo-1648146299282-1a4b8d2a7e04")},
{id:12,name:"Bluetooth Portable Speaker",cat:"Electronics",shop:"Mobile Hub Uganda",price:120000,old:145000,rating:4.4,reviews:118,tag:"TOP RATED",delivery:"Pickup available",desc:"Portable wireless speaker for music, travel and small gatherings.",image:img("photo-1608043152269-423dbba4e7e1")},
{id:13,name:"Baby Clothing Set",cat:"Kids",shop:"Twinma’s Fashion store",price:55000,old:70000,rating:4.7,reviews:18,tag:"NEW",delivery:"Pickup / local delivery",desc:"Comfortable baby clothing set; available sizes and colours vary by stock.",image:img("photo-1519238263530-99bdd11df2ea")},
{id:14,name:"Men's Running Sneakers",cat:"Fashion",shop:"Think Twice Second Hand Clothes.",price:90000,old:125000,rating:4.2,reviews:22,tag:"LOW PRICE",delivery:"Store pickup",desc:"Casual sports sneakers. Check size, condition and exact pair with seller.",image:img("photo-1542291026-7eec264c27ff")},
{id:15,name:"USB-C Fast Charger 45W",cat:"Electronics",shop:"MY PHONES MBALE",price:68000,old:85000,rating:4.5,reviews:93,tag:"DEAL",delivery:"Pickup available",desc:"Fast USB-C wall charger for compatible smartphones, tablets and accessories.",image:img("photo-1609592424846-1d8d6e1a8a2a")},
{id:16,name:"Microwave Oven 20L",cat:"Home",shop:"Bam Shopping Center",price:390000,old:450000,rating:4.3,reviews:17,tag:"SAVE",delivery:"Seller delivery",desc:"Compact microwave oven for everyday reheating and cooking.",image:img("photo-1585659722983-3a675dabf23d")},
{id:17,name:"LED Ring Light 12-inch",cat:"Electronics",shop:"Sms Phone And electronic center mbale",price:75000,old:95000,rating:4.5,reviews:44,tag:"CREATOR PICK",delivery:"Pickup / seller delivery",desc:"Adjustable LED ring light for content creation, calls and product photos.",image:img("photo-1520857014576-2c4f4c972b57")},
{id:18,name:"Women's Casual Dress",cat:"Fashion",shop:"Kim's fashion house",price:72000,old:95000,rating:4.5,reviews:27,tag:"TRENDING",delivery:"Local delivery",desc:"Easy everyday dress with a relaxed silhouette. Colours and sizes vary.",image:img("photo-1496747611176-843222e1e57c")},
{id:19,name:"Laundry Detergent 2kg",cat:"Grocery",shop:"Masse Supermarket",price:18000,old:21500,rating:4.5,reviews:49,tag:"VALUE",delivery:"Store pickup",desc:"Household laundry detergent; confirm brand and pack size with seller.",image:img("photo-1583947215259-38e31be8751f")},
{id:20,name:"Office Backpack",cat:"Fashion",shop:"Abrah Shopping Centre Mbale",price:78000,old:95000,rating:4.4,reviews:36,tag:"WORK ESSENTIAL",delivery:"Local delivery",desc:"Everyday backpack suitable for laptops, school and office use.",image:img("photo-1553062407-98eeb64c6a62")}
];

const shops = [
{name:"Bam Shopping Center",type:"Shopping centre",letter:"B",desc:"Multi-category shopping destination in Mbale.",rating:"4.0"},
{name:"Republic Super Market",type:"Supermarket",letter:"R",desc:"Everyday grocery and household shopping.",rating:"3.6"},
{name:"Map Supermarket",type:"Supermarket",letter:"M",desc:"Grocery and household essentials.",rating:"4.6"},
{name:"Sms Phone And electronic center mbale",type:"Electronics",letter:"S",desc:"Phones and consumer electronics on Republic St.",rating:"5.0"},
{name:"MY PHONES MBALE",type:"Phones & accessories",letter:"P",desc:"Mobile phones and accessories at Guuga Mall.",rating:"4.2"},
{name:"Kim's fashion house",type:"Fashion",letter:"K",desc:"Fashion boutique at Guuga Mall.",rating:"5.0"},
{name:"P & T ELECTRONICS MBALE",type:"Electronics",letter:"P",desc:"Electronics retailer serving Mbale.",rating:"—"},
{name:"Twinma’s Fashion store",type:"Baby & fashion",letter:"T",desc:"Fashion and baby products at Mbale Central Market.",rating:"—"}
];

const offers = {
  1:[["Sms Phone And electronic center mbale",899000],["MY PHONES MBALE",925000],["Mobile Hub Uganda",950000]],
  3:[["P & T ELECTRONICS MBALE",95000],["VIVA ELECTRONICS",98000],["Mobile Hub Uganda",105000]],
  4:[["VIVA ELECTRONICS",165000],["P & T ELECTRONICS MBALE",170000],["Sms Phone And electronic center mbale",179000]],
  7:[["Republic Super Market",26000],["Map Supermarket",27000],["Masse Supermarket",27500]],
  8:[["Map Supermarket",22000],["Republic Super Market",23000],["Masse Supermarket",23500]],
  10:[["Bam Shopping Center",145000],["Republic Super Market",152000]],
  11:[["Bam Shopping Center",285000],["Republic Super Market",299000]],
  12:[["Mobile Hub Uganda",120000],["P & T ELECTRONICS MBALE",125000],["VIVA ELECTRONICS",132000]]
};
let cart=JSON.parse(localStorage.getItem("mbaleCart")||"[]"), wish=JSON.parse(localStorage.getItem("mbaleWish")||"[]"), currentProduct=null;

const money=n=>"UGX "+Number(n).toLocaleString("en-UG");
const el=id=>document.getElementById(id);
function save(){localStorage.setItem("mbaleCart",JSON.stringify(cart));localStorage.setItem("mbaleWish",JSON.stringify(wish));updateCartBadge()}
function toast(t){el("toast").textContent=t;el("toast").classList.add("show");setTimeout(()=>el("toast").classList.remove("show"),2200)}
function updateCartBadge(){el("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0)}
function productCard(p){
 const liked=wish.includes(p.id);
 return `<article class="card" onclick="openProduct(${p.id})">
 <div class="productImg"><img loading="lazy" src="${p.image}" alt="${p.name}"><span class="tag">${p.tag}</span><button class="heart" onclick="event.stopPropagation();toggleWish(${p.id})">${liked?"♥":"♡"}</button></div>
 <div class="cardBody"><div class="rating">★ ${p.rating} <span style="color:#98a2b3">(${p.reviews})</span></div><div class="title">${p.name}</div><div class="seller">Sold by ${p.shop}</div><div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="save">Save ${money(p.old-p.price)}</div><div class="delivery">✓ ${p.delivery}</div>${offers[p.id]?`<div class="compare"><span>Compare</span><strong>${offers[p.id].length} offers</strong></div>`:""}</div></article>`;
}
function renderCategories(){
 const data=[["📱","Phones"],["💻","Electronics"],["👕","Fashion"],["🛒","Grocery"],["🏠","Home"],["💄","Beauty"],["🧸","Kids"],["🏋️","Sports"],["🚗","Automotive"],["📚","Books"]];
 el("categories").innerHTML=data.map(x=>`<button class="cat" onclick="filterCategory('${x[1]}')"><div class="catIcon">${x[0]}</div><span>${x[1]}</span></button>`).join("");
}
function renderDeals(){el("dealGrid").innerHTML=products.slice(0,10).map(productCard).join("")}
function renderPartners(){
 const shopList=shops.map(shop=>`<div class="partnerItem"><span class="partnerLogo" aria-hidden="true">${shop.letter}</span><span class="partnerName">${shop.name}</span></div>`).join("");
 const deliveryPartners=["Seller delivery","Local delivery","Shop pickup"];
 const deliveryList=deliveryPartners.map((name,index)=>`<div class="partnerItem"><span class="partnerLogo" aria-hidden="true">${["S","L","P"][index]}</span><span class="partnerName">${name}</span></div>`).join("");
 el("partnerShopList").innerHTML=shopList;
 el("deliveryPartnerList").innerHTML=deliveryList;
}
function initSellerFilter(){el("sellerFilter").innerHTML='<option value="all">All shops</option>'+shops.map(s=>`<option>${s.name}</option>`).join("")}
function renderCatalog(){
 const q=el("searchInput").value.toLowerCase(), cat=el("searchCat").value, max=Number(el("priceRange").value), seller=el("sellerFilter").value;
 const checked=[...document.querySelectorAll(".filters input[type=checkbox]:checked")].map(x=>x.value);
 let arr=products.filter(p=>(!q||(p.name+" "+p.shop+" "+p.cat+" "+p.desc).toLowerCase().includes(q))&&(cat==="all"||p.cat===cat)&&(!checked.length||checked.includes(p.cat))&&p.price<=max&&(seller==="all"||p.shop===seller));
 const sort=el("sort").value;if(sort==="priceLow")arr.sort((a,b)=>a.price-b.price);if(sort==="priceHigh")arr.sort((a,b)=>b.price-a.price);if(sort==="rating")arr.sort((a,b)=>b.rating-a.rating);
 el("rangeVal").textContent=max>=2000000?"2M+":money(max).replace("UGX ","");
 el("resultCount").textContent=`${arr.length} products`;el("catalogGrid").innerHTML=arr.length?arr.map(productCard).join(""):`<div class="empty"><div style="font-size:35px">🔎</div><h3>No matching products</h3><p>Try another search, category or price range.</p></div>`;
}
function filterCategory(cat){if(cat==="all"){el("searchCat").value="all"}else{el("searchCat").value=cat;el("searchInput").value=""}document.getElementById("catalog").scrollIntoView();renderCatalog()}
function filterDeals(){el("searchInput").value="";document.getElementById("catalog").scrollIntoView();el("sort").value="featured";renderCatalog()}
function clearFilters(){document.querySelectorAll(".filters input[type=checkbox]").forEach(x=>x.checked=false);el("priceRange").value=2000000;el("sellerFilter").value="all";el("searchInput").value="";el("searchCat").value="all";renderCatalog()}
function toggleWish(id){if(wish.includes(id)){wish=wish.filter(x=>x!==id);toast("Removed from wishlist")}else{wish.push(id);toast("Added to wishlist")}save();renderCatalog();renderDeals()}
function openProduct(id){
 currentProduct=products.find(p=>p.id===id);const p=currentProduct, os=offers[id]||[[p.shop,p.price]];
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="productDetail"><div class="detailImg"><img src="${p.image}" alt="${p.name}"></div><div class="detailBody"><div class="rating">★ ${p.rating} • ${p.reviews} reviews</div><h2>${p.name}</h2><p style="color:#667085">${p.desc}</p><div class="bigPrice">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="detailMeta"><span class="pill">✓ Mbale seller</span><span class="pill">↻ Return policy shown below</span><span class="pill">⚡ Local pickup/delivery</span></div><h3>Compare seller offers</h3>${os.map((o,i)=>`<div class="offer ${i===0?"best":""}"><div><b>${o[0]}</b><small>${i===0?"Lowest listed offer":"Alternative seller offer"} • Terms may vary</small></div><strong>${money(o[1])}</strong></div>`).join("")}<div style="display:flex;gap:9px;margin-top:16px"><button class="yellowBtn" onclick="addToCart(${p.id})">Add to cart</button><button class="primary" onclick="buyNow(${p.id})">Buy now</button></div><div class="tabs"><span class="tab active" onclick="showTab('details')">Details</span><span class="tab" onclick="showTab('seller')">Seller</span><span class="tab" onclick="showTab('returns')">Returns</span><span class="tab" onclick="showTab('terms')">Terms</span></div><div id="tabPane" class="tabPane"><b>Product details</b><br>${p.desc}<br><br><b>Availability:</b> Seller stock must be confirmed before checkout.</div></div></div>`;
 el("modalWrap").classList.add("show");
}
function showTab(t){
 const p=currentProduct;
 const content={details:`<b>Product details</b><br>${p.desc}<br><br><b>Important:</b> Product specifications, colour, size and stock can vary by seller. Confirm before payment.`,seller:`<b>Seller information</b><br><strong>${p.shop}</strong><br>Mbale, Uganda<br><br>Seller ratings and store information are displayed where available. Contact the seller to confirm stock, warranty and delivery before purchase.`,returns:`<b>Returns & refunds</b><br>Return terms are seller- and category-dependent. Items should normally be unused, undamaged and in original packaging. Start a return request through your order record and provide the reason and supporting information.<br><br><b>Demo marketplace rule:</b> seller-specific return windows must be displayed on the final checkout/order page before payment.`,terms:`<b>Terms & conditions</b><br>Mbale Shopper provides the marketplace interface; participating sellers are responsible for listing accuracy, stock, pricing, fulfilment and seller-specific warranties. Prices in this demo are illustrative. A purchase becomes binding only after the marketplace confirms the order.`};
 el("tabPane").innerHTML=content[t]||content.details;
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));event?.target?.classList.add("active");
}
function closeModal(){el("modalWrap").classList.remove("show")}
function addToCart(id){const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({id,qty:1});save();toast("Added to cart");}
function buyNow(id){addToCart(id);closeModal();toggleCart()}
function toggleCart(){el("cartDrawer").classList.toggle("show");renderCart()}
function renderCart(){
 const box=el("cartItems");if(!cart.length){box.innerHTML='<div class="empty" style="margin-top:20px">Your cart is empty.<br><button class="primary" style="margin-top:12px" onclick="toggleCart();document.getElementById(\'catalog\').scrollIntoView()">Start shopping</button></div>';el("cartTotal").textContent="UGX 0";return}
 let total=0;box.innerHTML=cart.map(c=>{const p=products.find(x=>x.id===c.id);total+=p.price*c.qty;return `<div class="cartItem"><img src="${p.image}"><div><b style="font-size:12px">${p.name}</b><div style="font-size:11px;color:#667085">${p.shop}</div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${c.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><b>${money(p.price*c.qty)}</b></div>`}).join("");el("cartTotal").textContent=money(total);
}
function changeQty(id,d){const c=cart.find(x=>x.id===id);if(!c)return;c.qty+=d;if(c.qty<=0)cart=cart.filter(x=>x.id!==id);save();renderCart()}
function checkout(){
 if(!cart.length){toast("Your cart is empty");return}
 const total=cart.reduce((s,c)=>s+products.find(p=>p.id===c.id).price*c.qty,0);
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>Checkout</h2><p style="color:#667085">Review your delivery details and choose a payment method. This demo does not process real payments.</p><div class="formGrid"><div><label>Full name<input placeholder="Your name"></label></div><div><label>Phone number<input placeholder="+256 ..."></label></div><div class="full"><label>Delivery address<textarea placeholder="Area, street, landmark, Mbale"></textarea></label></div><div><label>Delivery method<select><option>Seller delivery</option><option>Pickup from shop</option></select></label></div><div><label>Payment method<select><option>Mobile Money</option><option>Cash on delivery</option><option>Card</option></select></label></div></div><div style="background:#f8fafc;padding:14px;border-radius:9px;margin:18px 0"><b>Order total: ${money(total)}</b><br><small style="color:#667085">Delivery fees and seller terms are confirmed before final order placement.</small></div><button class="yellowBtn" style="width:100%" onclick="placeOrder()">Place demo order</button></div>`;
 el("modalWrap").classList.add("show");el("cartDrawer").classList.remove("show");
}
function placeOrder(){cart=[];save();closeModal();toast("Demo order placed successfully");}
function showPolicy(type){
 const data={terms:["Terms & conditions","Mbale Shopper is a marketplace interface connecting shoppers with participating sellers. Sellers control their own inventory, product information, fulfilment and seller-specific warranties. Buyers should review the seller and product terms before confirming payment."],returns:["Returns & refunds","Return eligibility, timelines and conditions should be displayed by each seller and category. Items generally need to be unused, undamaged and in original packaging where applicable. Refund timing depends on the selected payment method and seller verification."],privacy:["Privacy policy","This front-end demo stores cart and wishlist data locally in your browser. A production implementation should add secure authentication, encrypted payment processing, consent controls, order records and a formal privacy policy."]};
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>${data[type][0]}</h2><p style="line-height:1.8;color:#475467">${data[type][1]}</p></div>`;el("modalWrap").classList.add("show");
}
function showAccount(){el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>My account</h2><p>Sign in or create an account to manage orders, addresses, wishlist and seller messages.</p><div class="formGrid"><label>Email / phone<input placeholder="Email or phone"></label><label>Password<input type="password" placeholder="Password"></label></div><button class="yellowBtn" style="margin-top:16px;width:100%" onclick="toast('Demo sign-in');closeModal()">Sign in</button></div>`;el("modalWrap").classList.add("show")}
function showOrders(){el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>Your orders</h2><div class="empty">No orders yet.<br>Orders you place will appear here.</div></div>`;el("modalWrap").classList.add("show")}
function showSell(){el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>Sell on Mbale Shopper</h2><p>List your shop and products so local customers can compare your offers.</p><div class="formGrid"><label>Business name<input placeholder="Shop name"></label><label>Contact phone<input placeholder="+256 ..."></label><label>Business category<select><option>Electronics</option><option>Fashion</option><option>Grocery</option><option>Home</option><option>Other</option></select></label><label>Location<input placeholder="Mbale area / landmark"></label><label class="full">Business description<textarea placeholder="Tell shoppers about your store"></textarea></label></div><button class="yellowBtn" style="margin-top:16px" onclick="toast('Seller application saved in demo');closeModal()">Submit seller application</button></div>`;el("modalWrap").classList.add("show")}
function goHome(){window.scrollTo({top:0,behavior:"smooth"})}
renderCategories();renderDeals();renderPartners();initSellerFilter();renderCatalog();updateCartBadge();
