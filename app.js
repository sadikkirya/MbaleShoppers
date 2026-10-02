const img = (q) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=700&q=80`;
const categories = [
 {value:"Phones",label:"Phones",image:"photo-1511707171634-5f897ff02aa9"},
 {value:"Electronics",label:"Electronics",image:"photo-1498049794561-7780e7231661"},
 {value:"Computers & Gaming",label:"Computers & Gaming",image:"photo-1496181133206-80ce9b88a853"},
 {value:"Fashion",label:"Fashion",image:"photo-1445205170230-053b83016050"},
 {value:"Home",label:"Home & Kitchen",image:"photo-1556911220-bff31c812dba"},
 {value:"Grocery",label:"Grocery",image:"photo-1542838132-92c53300491e"},
 {value:"Beauty & Fragrance",label:"Beauty & Fragrance",image:"photo-1596462502278-27bfdc403348"},
 {value:"Health & Pharmacy",label:"Health & Pharmacy",image:"photo-1576091160399-112ba8d25d1d"},
 {value:"Baby & Toys",label:"Baby & Toys",image:"photo-1596461404969-9ae70f2830c1"},
 {value:"Sports & Outdoors",label:"Sports & Outdoors",image:"photo-1461896836934-ffe607ba8211"},
 {value:"Automotive",label:"Automotive",image:"photo-1492144534655-ae79c964c9d7"},
 {value:"Books & Stationery",label:"Books & Stationery",image:"photo-1507842217343-583bb7270b66"},
 {value:"Pet Supplies",label:"Pet Supplies",image:"photo-1548199973-03cce0bbc87b"},
 {value:"Jewelry & Watches",label:"Jewelry & Watches",image:"photo-1523275335684-37898b6baf30"}
];
const serviceCategories = [
 {name:"Home repairs",image:"photo-1607472586893-edb57bdc0e39"},
 {name:"Beauty & grooming",image:"photo-1560066984-138dadb4c035"},
 {name:"Cleaning",image:"photo-1581578731548-c64695cc6952"},
 {name:"Auto care",image:"photo-1486262715619-67b85e0b08d3"},
 {name:"Events & catering",image:"photo-1556911220-e15b29be8c8f"},
 {name:"Tech support",image:"photo-1521737711867-e3b97375f902"}
];
const services = [
 {id:"plumbing",name:"Plumbing repairs",category:"Home repairs",description:"Get help with leaks, taps, drainage and common household plumbing jobs.",image:"photo-1607472586893-edb57bdc0e39"},
 {id:"electrical",name:"Electrical installation & repair",category:"Home repairs",description:"Request help with household wiring, lighting and electrical checks.",image:"photo-1621905251189-08b45d6a269e"},
 {id:"salon",name:"Salon & barber services",category:"Beauty & grooming",description:"Find hair styling, grooming and beauty appointments near you.",image:"photo-1560066984-138dadb4c035"},
 {id:"cleaning",name:"Home cleaning",category:"Cleaning",description:"Arrange help with regular home cleaning or a one-time deep clean.",image:"photo-1581578731548-c64695cc6952"},
 {id:"mechanic",name:"Vehicle mechanic",category:"Auto care",description:"Request vehicle inspection, routine service and repair assistance.",image:"photo-1486262715619-67b85e0b08d3"},
 {id:"catering",name:"Event catering",category:"Events & catering",description:"Discuss menus and food service for family or community gatherings.",image:"photo-1556911220-e15b29be8c8f"},
 {id:"decor",name:"Event decoration",category:"Events & catering",description:"Request ideas and a quote for decor at a celebration or community event.",image:"photo-1530103862676-de8c9debad1d"},
 {id:"photography",name:"Event photography",category:"Events & catering",description:"Ask about photography coverage for weddings, parties and special occasions.",image:"photo-1542038784456-1ea8e935640e"},
 {id:"wedding-planning",name:"Wedding planning",category:"Events & catering",description:"Discuss planning support and coordination for your wedding day.",image:"photo-1519741497674-611481863552"},
 {id:"computer",name:"Phone & computer support",category:"Tech support",description:"Get help diagnosing common phone, laptop and setup issues.",image:"photo-1521737711867-e3b97375f902"}
];
const eventSpotlightItems = [
 {eyebrow:"UPCOMING · 3 OCT 2026",title:"Salam TV Uganda Finals",detail:"IUIU Main Campus · Mbale",image:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=240&q=80",href:"https://www.instagram.com/reel/Dd113D8oW7v/",linkLabel:"View event post",source:"Salam TV Uganda · Instagram"},
 {eyebrow:"MORE MBALE EVENTS",title:"Check the city calendar",detail:"No other future dates are currently posted by Mbale City.",image:"https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=240&q=80",href:"https://www.mbalecity.go.ug/events-calendar",linkLabel:"Open official calendar",source:"Mbale City"}
];
const influencerSpotlightItems = [
 {eyebrow:"CREATOR · X",name:"Waduwa Joel",handle:"@mbales_finest",platform:"X",icon:"𝕏",audience:"12K+ followers",reported:"Milestone reported Jul 2026",image:"https://www.ugnewsline.com/wp-content/uploads/2026/07/IMG-20260719-WA02091.jpg",profile:"https://x.com/mbales_finest",source:"https://www.ugnewsline.com/waduwa-joel-builds-mbales-brand-beyond-eastern-uganda/",sourceLabel:"Ugnews Line feature"},
 {eyebrow:"LOCAL MEDIA CHANNEL · YOUTUBE",name:"TARGET MEDIA MBALE",handle:"@Targetmediambale",platform:"YouTube",icon:"▶",audience:"956 subscribers",reported:"Public channel count · Oct 2026",image:"https://yt3.googleusercontent.com/bR_HkEml0xiA34kOdgZ9nqd_wfAeC2kIS7pilSM6_Pxtj-KGCfYX4Fhi4bVUtn9LGBOnpVau=s900-c-k-c0x00ffffff-no-rj",profile:"https://www.youtube.com/@Targetmediambale",source:"https://www.youtube.com/@Targetmediambale",sourceLabel:"YouTube channel"}
];
const heroPromoItems = [
 {eyebrow:"MBALE GROCERY PICKS",title:"Fresh essentials for every day.",description:"Build a better basket with local grocery prices and convenient pickup options.",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",action:"Browse grocery",actionType:"category",value:"Grocery"},
 {eyebrow:"COMPARE BEFORE YOU CHOOSE",title:"One product. Several local offers.",description:"See seller options side by side and choose the offer that works for you.",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",action:"Compare products",actionType:"catalog"},
 {eyebrow:"LOCAL SERVICES",title:"Find help around Mbale.",description:"Request quotes for repairs, events, cleaning, beauty and tech support.",image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",action:"Explore services",actionType:"services"}
];
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
{id:13,name:"Baby Clothing Set",cat:"Baby & Toys",shop:"Twinma’s Fashion store",price:55000,old:70000,rating:4.7,reviews:18,tag:"NEW",delivery:"Pickup / local delivery",desc:"Comfortable baby clothing set; available sizes and colours vary by stock.",image:img("photo-1519238263530-99bdd11df2ea")},
{id:14,name:"Men's Running Sneakers",cat:"Fashion",shop:"Think Twice Second Hand Clothes.",price:90000,old:125000,rating:4.2,reviews:22,tag:"LOW PRICE",delivery:"Store pickup",desc:"Casual sports sneakers. Check size, condition and exact pair with seller.",image:img("photo-1542291026-7eec264c27ff")},
{id:15,name:"USB-C Fast Charger 45W",cat:"Electronics",shop:"MY PHONES MBALE",price:68000,old:85000,rating:4.5,reviews:93,tag:"DEAL",delivery:"Pickup available",desc:"Fast USB-C wall charger for compatible smartphones, tablets and accessories.",image:img("photo-1609592424846-1d8d6e1a8a2a")},
{id:16,name:"Microwave Oven 20L",cat:"Home",shop:"Bam Shopping Center",price:390000,old:450000,rating:4.3,reviews:17,tag:"SAVE",delivery:"Seller delivery",desc:"Compact microwave oven for everyday reheating and cooking.",image:img("photo-1585659722983-3a675dabf23d")},
{id:17,name:"LED Ring Light 12-inch",cat:"Electronics",shop:"Sms Phone And electronic center mbale",price:75000,old:95000,rating:4.5,reviews:44,tag:"CREATOR PICK",delivery:"Pickup / seller delivery",desc:"Adjustable LED ring light for content creation, calls and product photos.",image:img("photo-1520857014576-2c4f4c972b57")},
{id:18,name:"Women's Casual Dress",cat:"Fashion",shop:"Kim's fashion house",price:72000,old:95000,rating:4.5,reviews:27,tag:"TRENDING",delivery:"Local delivery",desc:"Easy everyday dress with a relaxed silhouette. Colours and sizes vary.",image:img("photo-1496747611176-843222e1e57c")},
{id:19,name:"Laundry Detergent 2kg",cat:"Grocery",shop:"Masse Supermarket",price:18000,old:21500,rating:4.5,reviews:49,tag:"VALUE",delivery:"Store pickup",desc:"Household laundry detergent; confirm brand and pack size with seller.",image:img("photo-1583947215259-38e31be8751f")},
{id:20,name:"Office Backpack",cat:"Fashion",shop:"Abrah Shopping Centre Mbale",price:78000,old:95000,rating:4.4,reviews:36,tag:"WORK ESSENTIAL",delivery:"Local delivery",desc:"Everyday backpack suitable for laptops, school and office use.",image:img("photo-1553062407-98eeb64c6a62")},
{id:21,name:"IdeaPad Slim 3 Laptop",cat:"Computers & Gaming",shop:"P & T ELECTRONICS MBALE",price:1650000,old:1850000,rating:4.6,reviews:34,tag:"WORK PICK",delivery:"Seller delivery",desc:"Everyday laptop for study, office work and browsing. Confirm exact configuration and warranty with the seller.",image:img("photo-1496181133206-80ce9b88a853")},
{id:22,name:"Wireless Gaming Controller",cat:"Computers & Gaming",shop:"VIVA ELECTRONICS",price:210000,old:245000,rating:4.5,reviews:28,tag:"GAMING",delivery:"Pickup available",desc:"Wireless game controller. Confirm device compatibility and included accessories with the seller.",image:img("photo-1593305841991-05c297ba4575")},
{id:23,name:"Daily Face Cleanser 200ml",cat:"Beauty & Fragrance",shop:"Map Supermarket",price:32000,old:39000,rating:4.4,reviews:46,tag:"DAILY CARE",delivery:"Store pickup",desc:"Gentle daily facial cleanser. Check ingredients and suitability on the product packaging before use.",image:img("photo-1608248543803-ba4f8c70ae0b")},
{id:24,name:"SPF 50 Sunscreen 100ml",cat:"Beauty & Fragrance",shop:"Republic Super Market",price:48000,old:56000,rating:4.5,reviews:52,tag:"SUN CARE",delivery:"Store pickup",desc:"Broad-spectrum sunscreen. Follow the label directions and check the expiry date before use.",image:img("photo-1556229010-6c3f2c9ca5f8")},
{id:25,name:"Digital Thermometer",cat:"Health & Pharmacy",shop:"Bam Shopping Center",price:35000,old:42000,rating:4.5,reviews:41,tag:"HEALTH ESSENTIAL",delivery:"Store pickup",desc:"Digital thermometer for home temperature checks. Read the instructions and consult a qualified health professional for medical advice.",image:img("photo-1584308666744-24d5c474f2ae")},
{id:26,name:"Home First Aid Kit",cat:"Health & Pharmacy",shop:"Republic Super Market",price:45000,old:52000,rating:4.6,reviews:37,tag:"HOME ESSENTIAL",delivery:"Store pickup",desc:"Compact first-aid kit for basic household preparedness. Contents can vary; check the pack and expiry dates.",image:img("photo-1603398938378-e54eab446dde")},
{id:27,name:"Baby Diapers Value Pack",cat:"Baby & Toys",shop:"Map Supermarket",price:42000,old:49000,rating:4.6,reviews:63,tag:"FAMILY PICK",delivery:"Store pickup",desc:"Everyday baby diaper pack. Confirm size and quantity shown on the pack with the seller.",image:img("photo-1519689680058-324335c77eba")},
{id:28,name:"Training Football",cat:"Sports & Outdoors",shop:"Bam Shopping Center",price:65000,old:78000,rating:4.4,reviews:24,tag:"SPORTS PICK",delivery:"Local delivery",desc:"Football for casual practice and recreation. Confirm size and construction with the seller.",image:img("photo-1574629810360-7efbbe195018")},
{id:29,name:"Universal Car Phone Mount",cat:"Automotive",shop:"Sms Phone And electronic center mbale",price:35000,old:43000,rating:4.3,reviews:33,tag:"TRAVEL PICK",delivery:"Pickup available",desc:"Adjustable phone mount for vehicle dashboards and vents. Check fit and placement before driving.",image:img("photo-1492144534655-ae79c964c9d7")},
{id:30,name:"A5 Notebook Set",cat:"Books & Stationery",shop:"Abrah Shopping Centre Mbale",price:18000,old:22000,rating:4.5,reviews:58,tag:"STUDY ESSENTIAL",delivery:"Store pickup",desc:"Set of lined notebooks for school, planning and everyday notes. Confirm page count with the seller.",image:img("photo-1531346878377-a5be20888e57")},
{id:31,name:"Adult Dog Food 2kg",cat:"Pet Supplies",shop:"Map Supermarket",price:47000,old:55000,rating:4.2,reviews:19,tag:"PET CARE",delivery:"Store pickup",desc:"Packaged dog food. Check ingredients, feeding guidance and expiry date on the label.",image:img("photo-1589924691995-400dc9ecc119")},
{id:32,name:"Classic Quartz Wristwatch",cat:"Jewelry & Watches",shop:"MY PHONES MBALE",price:95000,old:115000,rating:4.4,reviews:31,tag:"CLASSIC STYLE",delivery:"Pickup available",desc:"Quartz wristwatch with a versatile everyday design. Confirm colour, materials and warranty with the seller.",image:img("photo-1523275335684-37898b6baf30")},
{id:33,name:"Fresh Milk 1 Litre",cat:"Grocery",shop:"Republic Super Market",price:5500,old:6500,rating:4.6,reviews:32,tag:"FRESH PICK",delivery:"Store pickup",desc:"Fresh household milk. Confirm brand, storage and expiry date with the seller.",image:img("photo-1550583724-b2692b85b150")},
{id:34,name:"Sliced White Bread",cat:"Grocery",shop:"Map Supermarket",price:7000,old:8000,rating:4.5,reviews:44,tag:"BREAKFAST",delivery:"Store pickup",desc:"Everyday sliced bread. Stock and pack size may vary by seller.",image:img("photo-1509440159596-0249088772ff")},
{id:35,name:"Brown Sugar 1kg",cat:"Grocery",shop:"Masse Supermarket",price:6500,old:7500,rating:4.5,reviews:28,tag:"PANTRY PICK",delivery:"Store pickup",desc:"Household sugar for tea and baking. Check packaging and expiry details before purchase.",image:img("photo-1581441363689-1f3c3c414635")},
{id:36,name:"Dry Beans 1kg",cat:"Grocery",shop:"Republic Super Market",price:8000,old:9500,rating:4.4,reviews:36,tag:"VALUE",delivery:"Store pickup",desc:"Dry beans for everyday home cooking. Grade and origin can vary with stock.",image:img("photo-1551462147-ff29053bfc14")},
{id:37,name:"Fresh Tomatoes 1kg",cat:"Grocery",shop:"Map Supermarket",price:6000,old:7000,rating:4.3,reviews:21,tag:"FRESH PRODUCE",delivery:"Store pickup",desc:"Fresh tomatoes for household meals. Confirm current freshness and weight with the seller.",image:img("photo-1546094096-0df4bcaaa337")},
{id:38,name:"Maize Flour 2kg",cat:"Grocery",shop:"Masse Supermarket",price:9000,old:10500,rating:4.6,reviews:48,tag:"HOUSEHOLD FAVOURITE",delivery:"Store pickup",desc:"Maize flour for everyday meals. Confirm brand, pack size and expiry date before purchase.",image:img("photo-1606787366850-de6330128bfc")}
];
const extraProductImages={
 "Automotive":["photo-1503376780353-7e6692767b70"],
 "Jewelry & Watches":["photo-1524592094714-0f0654e20314"]
};
const productGalleryImages=new Map(products.map(product=>{
 const categoryImage=categories.find(category=>category.value===product.cat)?.image;
 const relatedImages=products.filter(item=>item.cat===product.cat&&item.id!==product.id).map(item=>item.image);
 const categoryImageUrl=categoryImage?img(categoryImage):null;
 const additionalImages=(extraProductImages[product.cat]||[]).map(img);
 return [product.id,[...new Set([product.image,...relatedImages,categoryImageUrl,...additionalImages].filter(Boolean))].slice(0,4)];
}));
const demoInventory = [
 {stock:8,sold:86},{stock:0,sold:61},{stock:16,sold:143},{stock:0,sold:48},
 {stock:12,sold:37},{stock:9,sold:52},{stock:20,sold:74},{stock:0,sold:56},
 {stock:4,sold:23},{stock:11,sold:39},{stock:6,sold:42},{stock:18,sold:97},
 {stock:14,sold:28},{stock:7,sold:34},{stock:24,sold:69},{stock:5,sold:21},
 {stock:10,sold:47},{stock:13,sold:32},{stock:30,sold:88},{stock:9,sold:41},
 {stock:6,sold:26},{stock:15,sold:43},{stock:19,sold:58},{stock:8,sold:63},
 {stock:0,sold:45},{stock:10,sold:29},{stock:22,sold:57},{stock:17,sold:36},
 {stock:12,sold:31},{stock:28,sold:92},{stock:7,sold:18},{stock:5,sold:27},
 {stock:18,sold:46},{stock:22,sold:63},{stock:15,sold:39},{stock:27,sold:71},{stock:12,sold:34},{stock:20,sold:58}
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
let cart=JSON.parse(localStorage.getItem("mbaleCart")||"[]"), wish=JSON.parse(localStorage.getItem("mbaleWish")||"[]"), recentlyViewed=JSON.parse(localStorage.getItem("mbaleRecentlyViewed")||"[]"), currentProduct=null, activeSearchSuggestion=-1, activeServiceCategory="all";
const spotlightTimers=new Map();
const searchPromptExamples=[products[0].name,products[2].name,services[0].name,services[5].name,"Health & Pharmacy","Home & Kitchen"];

const money=n=>"UGX "+Number(n).toLocaleString("en-UG");
const el=id=>document.getElementById(id);
function save(){localStorage.setItem("mbaleCart",JSON.stringify(cart));localStorage.setItem("mbaleWish",JSON.stringify(wish));updateCartBadge()}
function toast(t){el("toast").textContent=t;el("toast").classList.add("show");setTimeout(()=>el("toast").classList.remove("show"),2200)}
function updateCartBadge(){el("cartCount").textContent=cart.reduce((s,x)=>s+x.qty,0)}
const heroPromoTimers=new Map();
function renderHeroPromos(){
 const stage=el("heroPromoStage");
 stage.innerHTML=heroPromoItems.map((promo,index)=>`<article class="heroPromo${index===0?" active":""}" aria-hidden="${index!==0}"><img src="${promo.image}" alt=""><div class="heroPromoShade"></div><div class="heroPromoCopy"><span class="eyebrow">${promo.eyebrow}</span><h1>${promo.title}</h1><p>${promo.description}</p><button class="cta" onclick="heroPromoAction('${promo.actionType}','${promo.value||""}')">${promo.action} <span aria-hidden="true">→</span></button></div><span class="heroPromoCount">${index+1} / ${heroPromoItems.length}</span></article>`).join("");
 stage.addEventListener("mouseenter",pauseHeroPromos);stage.addEventListener("mouseleave",resumeHeroPromos);stage.addEventListener("focusin",pauseHeroPromos);stage.addEventListener("focusout",event=>{if(!stage.contains(event.relatedTarget))resumeHeroPromos()});
 resumeHeroPromos();
}
function advanceHeroPromo(){const slides=[...el("heroPromoStage").querySelectorAll(".heroPromo")],current=slides.findIndex(slide=>slide.classList.contains("active")),next=(current+1)%slides.length;slides[current].classList.remove("active");slides[current].setAttribute("aria-hidden","true");slides[next].classList.add("active");slides[next].setAttribute("aria-hidden","false")}
function pauseHeroPromos(){clearInterval(heroPromoTimers.get("hero"));heroPromoTimers.delete("hero")}
function resumeHeroPromos(){pauseHeroPromos();heroPromoTimers.set("hero",setInterval(advanceHeroPromo,5000))}
function heroPromoAction(type,value){if(type==="category")filterCategory(value);else if(type==="services")filterServiceCategory("all");else document.getElementById("catalog").scrollIntoView({behavior:"smooth"})}
function changeCardImage(button,direction){
 const imageBox=button.closest(".productImg"),image=imageBox.querySelector(".productGalleryImage"),images=productGalleryImages.get(Number(image.dataset.productId));
 const nextIndex=(Number(image.dataset.imageIndex)+direction+images.length)%images.length;
 image.src=images[nextIndex];image.dataset.imageIndex=nextIndex;
 imageBox.querySelector(".galleryCount").textContent=`${nextIndex+1} / ${images.length}`;
}
function productCard(p){
 const liked=wish.includes(p.id);
 const inventory=demoInventory[p.id-1]||{stock:0,sold:0};
 const outOfStock=inventory.stock===0;
 const images=productGalleryImages.get(p.id)||[p.image];
 return `<article class="card" onclick="openProduct(${p.id})">
 <div class="productImg"><img class="productGalleryImage" loading="lazy" data-product-id="${p.id}" data-image-index="0" src="${images[0]}" alt="${p.name}">${images.length>1?`<div class="galleryControls"><button type="button" aria-label="Previous image of ${p.name}" onclick="event.stopPropagation();changeCardImage(this,-1)">‹</button><span class="galleryCount">1 / ${images.length}</span><button type="button" aria-label="Next image of ${p.name}" onclick="event.stopPropagation();changeCardImage(this,1)">›</button></div>`:""}<span class="tag">${p.tag}</span><button class="cartQuick" aria-label="${outOfStock?"Out of stock: ":"Add to cart: "}${p.name}" title="${outOfStock?"Out of stock":"Add to cart"}" ${outOfStock?"disabled":""} onclick="event.stopPropagation();addToCart(${p.id})">🛒</button><button class="heart" aria-label="${liked?"Remove from":"Add to"} wishlist: ${p.name}" onclick="event.stopPropagation();toggleWish(${p.id})">${liked?"♥":"♡"}</button></div>
 <div class="cardBody"><div class="rating">★ ${p.rating} <span style="color:#98a2b3">(${p.reviews})</span></div><div class="title">${p.name}</div><div class="seller">Sold by ${p.shop}</div><div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="save">Save ${money(p.old-p.price)}</div><div class="inventoryMeta"><span class="stockStatus${outOfStock?" outOfStock":""}"><b>Stock:</b> ${outOfStock?"Out of stock":`${inventory.stock} available`}</span><span><b>Sold:</b> ${inventory.sold}</span></div><div class="delivery">✓ ${p.delivery}</div>${offers[p.id]?`<div class="compare"><span>Compare</span><strong>${offers[p.id].length} offers</strong></div>`:""}</div></article>`;
}
function renderCategories(){
 el("categories").innerHTML=categories.map(category=>`<button class="cat" onclick="filterCategory('${category.value}')"><img loading="lazy" src="${img(category.image)}" alt=""><span>${category.label}</span></button>`).join("");
}
function initCategories(){
 el("searchCat").innerHTML='<option value="all">All categories</option>'+categories.map(category=>`<option value="${category.value}">${category.label}</option>`).join("");
 renderCatalogFilters();
}
let megaMenuCloseTimer=null;
const brandLogos={
 Samsung:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/samsung.svg",
 Apple:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/apple.svg",
 Lenovo:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/lenovo.svg",
 Logitech:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/logitech.svg",
 Nike:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nike.svg",
 Adidas:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/adidas.svg",
 Sony:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sony.svg",
 LG:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/lg.svg",
 Dell:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dell.svg",
 HP:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hp.svg",
 Toyota:"https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/toyota.svg"
};
const categoryBrandSets={
 "Computers & Gaming":["Lenovo","Dell","HP","Logitech"],
 Electronics:["Sony","LG","Logitech"],
 Fashion:["Nike","Adidas"],
 "Sports & Outdoors":["Nike","Adidas"],
 Automotive:["Toyota"],
 Home:["LG"]
};
function productBrand(product){
 const name=product.name.toLowerCase();
 if(name.includes("samsung"))return "Samsung";
 if(name.includes("apple")||name.includes("iphone")||name.includes("ipad")||name.includes("macbook"))return "Apple";
 if(name.includes("oraimo"))return "Oraimo";
 if(name.includes("lenovo"))return "Lenovo";
 return null;
}
function productFilterGroup(product){
 const brand=productBrand(product);
 return brand?{key:`${product.cat}|brand:${brand}`,label:brand}:{key:`${product.cat}|shop:${product.shop}`,label:product.shop};
}
function renderCatalogFilters(){
 el("categoryFilters").innerHTML=categories.map(category=>{
  const categoryProducts=products.filter(product=>product.cat===category.value);
  if(!categoryProducts.length)return "";
  const groups=new Map();
  categoryProducts.forEach(product=>{
   const group=productFilterGroup(product);
   if(!groups.has(group.key))groups.set(group.key,{...group,products:[]});
   groups.get(group.key).products.push(product);
  });
  const brandMarkup=[...groups.values()].map(group=>`<details class="filterTreeBrand"><summary><span>${group.label}</span><span class="filterCount">${group.products.length}</span></summary><div class="filterTreeProducts"><label class="filterTreeOption"><input class="brandFilter" type="checkbox" value="${group.key}" onchange="renderCatalog()"><span>All ${group.label}</span></label>${group.products.map(product=>`<button class="filterProductTitle" type="button" onclick="openProduct(${product.id})">${product.name}</button>`).join("")}</div></details>`).join("");
  return `<details class="filterTreeCategory"><summary><span>${category.label}</span><span class="filterCount">${categoryProducts.length}</span></summary><div class="filterTreeBody"><label class="filterTreeOption"><input class="categoryFilter" type="checkbox" value="${category.value}" onchange="renderCatalog()"><span>All ${category.label}</span></label>${brandMarkup}</div></details>`;
 }).join("");
}
function electronicsAccessoryGroup(product){
 const name=product.name.toLowerCase();
 if(/\biphone\b/.test(name))return "iPhones";
 if(/\bsamsung\b/.test(name))return "Samsung";
 if(/\bpower bank\b/.test(name))return "Power banks";
 if(/\b(?:earbuds?|headphones?|earphones?)\b/.test(name))return "Earbuds";
 if(/\bspeakers?\b/.test(name))return "Speakers";
 if(/\b(?:tv|television)\b/.test(name))return "TVs";
 if(/\bchargers?\b/.test(name))return "Chargers";
 if(/\bring light\b/.test(name))return "Lighting";
 if(/\bphone mount\b/.test(name))return "Phone accessories";
 return "Other accessories";
}
function renderMenuProductGroup(label,items){
 const productIds=items.map(product=>product.id).join(",");
 return `<button class="megaProductGroupTitle" onclick="filterProductGroup('${productIds}')">${label}</button>`;
}
function renderMegaCategory(label,items,content){
 const productIds=items.map(product=>product.id).join(",");
 return `<section class="megaCategory"><button class="megaCategoryTitle" onclick="filterProductGroup('${productIds}')">${label}</button><div class="megaCategoryGroups">${content}</div></section>`;
}
function renderElectronicsMegaMenu(menu){
 const phoneAccessoryProducts=products.filter(product=>["Phones","Electronics"].includes(product.cat)||/\bphone mount\b/i.test(product.name));
 const computerProducts=products.filter(product=>product.cat==="Computers & Gaming"&&/(laptop|computer|notebook|desktop)/i.test(product.name));
 const gamingProducts=products.filter(product=>product.cat==="Computers & Gaming"&&/(gaming|game|controller|console)/i.test(product.name));
 const homeKitchenGroup='<section class="megaCategory"><button class="megaCategoryTitle" onclick="filterCategory(\'Home\')">Home &amp; Kitchen</button></section>';
 const accessoryGroups=new Map();
 phoneAccessoryProducts.forEach(product=>{
  const label=electronicsAccessoryGroup(product);
  if(!accessoryGroups.has(label))accessoryGroups.set(label,[]);
  accessoryGroups.get(label).push(product);
 });
 const preferredOrder=["iPhones","Samsung","Power banks","Earbuds","Speakers","TVs","Chargers","Lighting","Phone accessories","Other accessories"];
 const accessoryMarkup=[...accessoryGroups.entries()].sort((a,b)=>preferredOrder.indexOf(a[0])-preferredOrder.indexOf(b[0])).map(([label,items])=>renderMenuProductGroup(label,items)).join("");
 const sections=[
  renderMegaCategory("Phones and accessories",phoneAccessoryProducts,accessoryMarkup),
  renderMegaCategory("Computers",computerProducts,""),
  renderMegaCategory("Gaming",gamingProducts,""),
  homeKitchenGroup
 ];
 const total=phoneAccessoryProducts.length+computerProducts.length+gamingProducts.length+products.filter(product=>product.cat==="Home").length;
 menu.innerHTML=`<div class="megaInner"><div class="megaHeader"><h3>Electronics</h3><small>${total} products available</small></div><div class="megaCategories">${sections.join("")}</div></div>`;
}
function renderCategoryMegaMenu(category){
 const menu=el("categoryMegaMenu"),items=products.filter(product=>product.cat===category),brands=[...new Set([...items.map(productBrand).filter(Boolean),...(categoryBrandSets[category]||[])])].filter(brand=>brandLogos[brand]).slice(0,6);
 if(category==="Electronics")renderElectronicsMegaMenu(menu);
 else menu.innerHTML=`<div class="megaInner"><div class="megaHeader"><h3>${category}</h3><small>${items.length} products available</small></div><div class="megaProducts">${items.slice(0,6).map(product=>`<button class="megaProduct" onclick="openProduct(${product.id})"><img loading="lazy" src="${product.image}" alt=""><span class="megaProductInfo"><b>${product.name}</b><small>${money(product.price)}</small></span></button>`).join("")}</div>${brands.length?`<div class="megaBrands" aria-label="Product brands">${brands.map(brand=>`<span class="megaBrand" title="${brand}" aria-label="${brand}"><span class="megaBrandIcon"><img src="${brandLogos[brand]}" alt="${brand} logo"></span></span>`).join("")}</div>`:""}</div>`;
 menu.classList.add("show");menu.setAttribute("aria-hidden","false");
}
function scheduleMegaMenuClose(){clearTimeout(megaMenuCloseTimer);megaMenuCloseTimer=setTimeout(()=>{const menu=el("categoryMegaMenu");menu.classList.remove("show");menu.setAttribute("aria-hidden","true")},180)}
function updateCategoryNavArrows(){
 const scroller=el("navScroller");
 if(!scroller)return;
 el("navScrollLeft").hidden=scroller.scrollLeft<=1;
 el("navScrollRight").hidden=scroller.scrollLeft+scroller.clientWidth>=scroller.scrollWidth-1;
}
function scrollCategoryNav(direction){
 const scroller=el("navScroller");
 if(scroller)scroller.scrollBy({left:direction*Math.max(180,scroller.clientWidth*.72),behavior:"smooth"});
}
function initCategoryMegaMenu(){
 const menu=el("categoryMegaMenu");
 const nav=menu.parentElement,links=[...nav.querySelectorAll(":scope > a")],scroller=document.createElement("div");
 scroller.id="navScroller";scroller.className="navScroller";
 links.forEach(link=>scroller.append(link));
 const leftArrow=document.createElement("button"),rightArrow=document.createElement("button");
 leftArrow.id="navScrollLeft";leftArrow.type="button";leftArrow.className="navScrollArrow";leftArrow.setAttribute("aria-label","Scroll navigation left");leftArrow.innerHTML="←";leftArrow.onclick=()=>scrollCategoryNav(-1);
 rightArrow.id="navScrollRight";rightArrow.type="button";rightArrow.className="navScrollArrow";rightArrow.setAttribute("aria-label","Scroll navigation right");rightArrow.innerHTML="→";rightArrow.onclick=()=>scrollCategoryNav(1);
 nav.prepend(leftArrow);nav.insertBefore(scroller,menu);nav.insertBefore(rightArrow,menu);
 scroller.addEventListener("scroll",updateCategoryNavArrows,{passive:true});
 window.addEventListener("resize",updateCategoryNavArrows);
 requestAnimationFrame(updateCategoryNavArrows);
 document.querySelectorAll('.categoryNavLink[data-category="Phones"], .categoryNavLink[data-category="Computers & Gaming"], .categoryNavLink[data-category="Home"]').forEach(link=>link.remove());
 document.querySelectorAll(".categoryNavLink").forEach(link=>{link.addEventListener("mouseenter",()=>{clearTimeout(megaMenuCloseTimer);renderCategoryMegaMenu(link.dataset.category)});link.addEventListener("mouseleave",scheduleMegaMenuClose)});
 menu.addEventListener("mouseenter",()=>clearTimeout(megaMenuCloseTimer));menu.addEventListener("mouseleave",scheduleMegaMenuClose);
}
function renderDeals(){el("dealGrid").innerHTML=products.filter(p=>p.old>p.price).sort((a,b)=>(b.old-b.price)/b.old-(a.old-a.price)/a.old).slice(0,10).map(productCard).join("")}
function renderRecommendations(){
 const signals=[...recentlyViewed.map(id=>[id,3]),...wish.map(id=>[id,2]),...cart.map(item=>[item.id,1])];
 const categoryScores={};
 signals.forEach(([id,weight])=>{const product=products.find(item=>item.id===id);if(product)categoryScores[product.cat]=(categoryScores[product.cat]||0)+weight});
 const preferredCategory=Object.keys(categoryScores).sort((a,b)=>categoryScores[b]-categoryScores[a])[0];
 let picks=preferredCategory?products.filter(product=>product.cat===preferredCategory&&!recentlyViewed.includes(product.id)):[];
 const fallback=products.slice().sort((a,b)=>b.rating-a.rating||(b.old-b.price)-(a.old-a.price));
 fallback.forEach(product=>{if(picks.length<8&&!picks.some(item=>item.id===product.id))picks.push(product)});
 el("recommendationReason").textContent=preferredCategory?`More ${preferredCategory.toLowerCase()} picks based on your activity`:"Popular with Mbale shoppers";
 el("recommendationGrid").innerHTML=picks.slice(0,10).map(productCard).join("");
}
function renderSpotlight(containerId,title,items,type){
 const container=el(containerId);
 container.innerHTML=`<div class="spotlightHeading"><span>${title}</span><span class="spotlightCount">1 / ${items.length}</span></div><div class="spotlightViewport">${items.map((item,index)=>`<div class="spotlightSlide${index===0?" active":""}" aria-hidden="${index!==0}"><img class="spotlightImage${type==="influencer"?" influencerImage":""}" src="${item.image}" alt="${type==="influencer"?item.name:item.title}"><div class="spotlightCopy"><span class="spotlightEyebrow">${item.eyebrow}</span>${type==="event"?`<b>${item.title}</b><small>${item.detail}</small><a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.linkLabel} <span aria-hidden="true">↗</span></a><small class="spotlightSource">${item.source}</small>`:`<b>${item.name}</b><span class="creatorHandle">${item.handle}</span><span class="creatorPlatform"><span class="platformIcon ${item.platform==="YouTube"?"youtubeIcon":""}" aria-hidden="true">${item.icon}</span>${item.platform} · ${item.audience}</span><small>${item.reported}</small><a href="${item.profile}" target="_blank" rel="noopener noreferrer">View profile <span aria-hidden="true">↗</span></a><small class="spotlightSource">Source: <a href="${item.source}" target="_blank" rel="noopener noreferrer">${item.sourceLabel}</a></small>`}</div></div>`).join("")}</div>`;
 container.addEventListener("mouseenter",()=>pauseSpotlight(containerId));
 container.addEventListener("mouseleave",()=>resumeSpotlight(containerId,items.length));
 container.addEventListener("focusin",()=>pauseSpotlight(containerId));
 container.addEventListener("focusout",event=>{if(!container.contains(event.relatedTarget))resumeSpotlight(containerId,items.length)});
 resumeSpotlight(containerId,items.length);
}
function advanceSpotlight(containerId){
 const container=el(containerId),slides=[...container.querySelectorAll(".spotlightSlide")],currentIndex=slides.findIndex(slide=>slide.classList.contains("active")),nextIndex=(currentIndex+1)%slides.length;
 slides[currentIndex].classList.remove("active");slides[currentIndex].classList.add("leaving");slides[currentIndex].setAttribute("aria-hidden","true");
 slides[nextIndex].classList.add("active");slides[nextIndex].setAttribute("aria-hidden","false");
 container.querySelector(".spotlightCount").textContent=`${nextIndex+1} / ${slides.length}`;
 setTimeout(()=>slides[currentIndex].classList.remove("leaving"),450);
}
function pauseSpotlight(containerId){clearInterval(spotlightTimers.get(containerId));spotlightTimers.delete(containerId)}
function resumeSpotlight(containerId,count){
 pauseSpotlight(containerId);
 if(count>1)spotlightTimers.set(containerId,setInterval(()=>advanceSpotlight(containerId),5000));
}
function renderServiceCategories(){
 el("serviceCategoryGrid").innerHTML=serviceCategories.map(category=>`<button class="serviceCategoryTile" onclick="filterServiceCategory('${category.name}')"><img loading="lazy" src="${img(category.image)}" alt=""><span>${category.name}</span></button>`).join("");
}
function renderServiceFilters(){
 const filterOptions=[{name:"all",label:"All services"},...serviceCategories.map(category=>({name:category.name,label:category.name}))];
 el("serviceFilters").innerHTML=filterOptions.map(option=>`<button class="serviceFilterChip${activeServiceCategory===option.name?" active":""}" aria-pressed="${activeServiceCategory===option.name}" onclick="filterServiceCategory('${option.name}')">${option.label}</button>`).join("");
}
function renderServices(){
 const visibleServices=activeServiceCategory==="all"?services:services.filter(service=>service.category===activeServiceCategory);
 el("serviceGrid").innerHTML=visibleServices.map(service=>`<article class="serviceCard"><div class="serviceImage"><img loading="lazy" src="${img(service.image)}" alt="${service.name}"></div><div class="serviceBody"><span class="serviceCategoryLabel">${service.category}</span><h3>${service.name}</h3><p>${service.description}</p><div class="serviceFoot"><small>Example listing · Mbale<br>Quote on request</small><button class="serviceRequest" onclick="requestService('${service.id}')">Request a quote</button></div></div></article>`).join("");
 el("serviceResultLabel").textContent=activeServiceCategory==="all"?"Example service listings · Request a quote directly":`${visibleServices.length} example ${activeServiceCategory.toLowerCase()} listings`;
}
function filterServiceCategory(category){activeServiceCategory=category;renderServiceFilters();renderServices();el("services").scrollIntoView({behavior:"smooth"})}
function requestService(id){
 const service=services.find(item=>item.id===id);
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><span class="serviceCategoryLabel">${service.category}</span><h2>Request a quote</h2><p style="color:#667085">${service.name}. This demo does not send your request to a real provider.</p><div class="formGrid"><label>Your name<input id="serviceRequestName" placeholder="Full name"></label><label>Phone number<input id="serviceRequestPhone" placeholder="+256 ..."></label><label class="full">Your area in Mbale<input id="serviceRequestArea" placeholder="Area or landmark"></label><label class="full">What do you need?<textarea id="serviceRequestDetails" placeholder="Describe the service and preferred time"></textarea></label></div><button class="yellowBtn" style="margin-top:16px;width:100%" onclick="submitServiceRequest()">Send demo request</button></div>`;
 el("modalWrap").classList.add("show");
}
function submitServiceRequest(){
 if(!el("serviceRequestName").value.trim()||!el("serviceRequestPhone").value.trim()||!el("serviceRequestArea").value.trim()){toast("Please add your name, phone and Mbale area");return}
 closeModal();toast("Demo service request recorded");
}
function scrollShelf(id,direction){const shelf=el(id),distance=id==="categories"?shelf.clientWidth*.8:510;shelf.scrollBy({left:direction*distance,behavior:"smooth"})}
function initSearchPromptTrack(){el("searchPromptTrack").innerHTML=[...searchPromptExamples,searchPromptExamples[0]].map(example=>`<span>Try ${example}</span>`).join("")}
function pauseSearchPromptRotation(){el("searchPromptTrack").classList.add("paused")}
function syncSearchPromptState(){el("searchBox").classList.toggle("hasValue",Boolean(el("searchInput").value.trim()))}
function resumeSearchPromptRotation(){
 syncSearchPromptState();
 if(el("searchInput").value.trim())pauseSearchPromptRotation();
 else el("searchPromptTrack").classList.remove("paused");
}
function handleSearchInput(event){pauseSearchPromptRotation();syncSearchPromptState();renderCatalog();renderSearchSuggestions(event.target.value)}
function handleSearchFocus(){pauseSearchPromptRotation();renderSearchSuggestions(el("searchInput").value)}
function handleSearchKeydown(event){
 const suggestions=[...el("searchSuggestions").querySelectorAll(".suggestion")];
 if(event.key==="ArrowDown"||event.key==="ArrowUp"){
  if(!suggestions.length)return;
  event.preventDefault();activeSearchSuggestion=(activeSearchSuggestion+(event.key==="ArrowDown"?1:-1)+suggestions.length)%suggestions.length;
  suggestions.forEach((item,index)=>{item.classList.toggle("active",index===activeSearchSuggestion);item.setAttribute("aria-selected",String(index===activeSearchSuggestion))});
 }else if(event.key==="Enter"){
  event.preventDefault();if(activeSearchSuggestion>=0&&suggestions[activeSearchSuggestion])suggestions[activeSearchSuggestion].click();else submitSearch();
 }else if(event.key==="Escape")closeSearchSuggestions();
}
function renderSearchSuggestions(query=""){
 const box=el("searchSuggestions"),normalized=query.trim().toLowerCase();activeSearchSuggestion=-1;
 const categoryMatches=categories.filter(category=>!normalized||category.label.toLowerCase().includes(normalized)||category.value.toLowerCase().includes(normalized));
 if(!normalized){
  box.innerHTML='<div class="suggestionLabel">Popular categories</div>'+categories.slice(0,6).map(category=>`<button class="suggestion" role="option" aria-selected="false" onclick="selectSearchSuggestion('category','${category.value}')"><span class="suggestionInfo"><b>${category.label}</b><small>Browse ${category.label.toLowerCase()} products</small></span><span class="suggestionArrow">→</span></button>`).join("");
 }else{
  const matches=products.filter(product=>(product.name+" "+product.cat+" "+product.shop).toLowerCase().includes(normalized)).slice(0,5);
  const serviceMatches=services.filter(service=>(service.name+" "+service.category+" "+service.description).toLowerCase().includes(normalized)).slice(0,4);
  const productRows=matches.length?'<div class="suggestionLabel">Products</div>'+matches.map(product=>`<button class="suggestion" role="option" aria-selected="false" onclick="selectSearchSuggestion('product',${product.id})"><img class="suggestionThumb" src="${product.image}" alt=""><span class="suggestionInfo"><b>${product.name}</b><small>${product.cat} · ${money(product.price)}</small></span><span class="suggestionArrow">→</span></button>`).join(""):"";
  const serviceRows=serviceMatches.length?'<div class="suggestionLabel">Services</div>'+serviceMatches.map(service=>`<button class="suggestion" role="option" aria-selected="false" onclick="selectSearchSuggestion('service','${service.id}')"><img class="suggestionThumb" src="${img(service.image)}" alt=""><span class="suggestionInfo"><b>${service.name}</b><small>${service.category} · Quote on request</small></span><span class="suggestionArrow">→</span></button>`).join(""):"";
  const categoryRows=categoryMatches.length?'<div class="suggestionLabel">Categories</div>'+categoryMatches.slice(0,5).map(category=>`<button class="suggestion" role="option" aria-selected="false" onclick="selectSearchSuggestion('category','${category.value}')"><span class="suggestionInfo"><b>${category.label}</b><small>Browse this category</small></span><span class="suggestionArrow">→</span></button>`).join(""):"";
  box.innerHTML=productRows+serviceRows+categoryRows||'<div class="suggestionLabel">No matching products or services yet</div>';
 }
 box.hidden=false;el("searchInput").setAttribute("aria-expanded","true");
}
function selectSearchSuggestion(type,value){
 if(type==="category"){el("searchCat").value=value;el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();renderCatalog();el("catalog").scrollIntoView({behavior:"smooth"})}
 else if(type==="service"){const service=services.find(item=>item.id===value);el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();filterServiceCategory(service.category)}
 else openProduct(Number(value));
 closeSearchSuggestions();
}
function closeSearchSuggestions(){el("searchSuggestions").hidden=true;el("searchInput").setAttribute("aria-expanded","false");activeSearchSuggestion=-1}
function submitSearch(){
 const query=el("searchInput").value.trim().toLowerCase();
 const productMatch=products.some(product=>(product.name+" "+product.cat+" "+product.shop+" "+product.desc).toLowerCase().includes(query));
 const serviceMatch=services.find(service=>(service.name+" "+service.category+" "+service.description).toLowerCase().includes(query));
 closeSearchSuggestions();
 if(query&&!productMatch&&serviceMatch){el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();filterServiceCategory(serviceMatch.category);return}
 renderCatalog();el("catalog").scrollIntoView({behavior:"smooth"});
}
function toggleFilters(){el("filters").classList.toggle("open")}
function recordRecentlyViewed(id){recentlyViewed=[id,...recentlyViewed.filter(item=>item!==id)].slice(0,12);localStorage.setItem("mbaleRecentlyViewed",JSON.stringify(recentlyViewed));renderRecommendations()}
function renderPartners(){
 const shopList=shops.map(shop=>`<div class="partnerItem"><span class="partnerLogo" aria-hidden="true">${shop.letter}</span><span class="partnerName">${shop.name}</span></div>`).join("");
 const deliveryPartners=["Seller delivery","Local delivery","Shop pickup"];
 const deliveryList=deliveryPartners.map((name,index)=>`<div class="partnerItem"><span class="partnerLogo" aria-hidden="true">${["S","L","P"][index]}</span><span class="partnerName">${name}</span></div>`).join("");
 el("partnerShopList").innerHTML=shopList;
 el("deliveryPartnerList").innerHTML=deliveryList;
}
function initSellerFilter(){el("sellerFilter").innerHTML='<option value="all">All shops</option>'+shops.map(s=>`<option>${s.name}</option>`).join("")}
let activeCatalogProductIds=null;
function renderCatalog(){
 const q=el("searchInput").value.toLowerCase(), cat=el("searchCat").value, max=Number(el("priceRange").value), seller=el("sellerFilter").value;
 const checkedCategories=[...document.querySelectorAll(".categoryFilter:checked")].map(input=>input.value);
 const checkedBrands=[...document.querySelectorAll(".brandFilter:checked")].map(input=>input.value);
 let arr=products.filter(p=>(!activeCatalogProductIds||activeCatalogProductIds.has(p.id))&&(!q||(p.name+" "+p.shop+" "+p.cat+" "+p.desc).toLowerCase().includes(q))&&(cat==="all"||p.cat===cat)&&(!checkedCategories.length||checkedCategories.includes(p.cat))&&(!checkedBrands.length||checkedBrands.includes(productFilterGroup(p).key))&&p.price<=max&&(seller==="all"||p.shop===seller));
 const sort=el("sort").value;if(sort==="priceLow")arr.sort((a,b)=>a.price-b.price);if(sort==="priceHigh")arr.sort((a,b)=>b.price-a.price);if(sort==="rating")arr.sort((a,b)=>b.rating-a.rating);
 el("rangeVal").textContent=max>=2000000?"2M+":money(max).replace("UGX ","");
 el("resultCount").textContent=`${arr.length} products`;el("catalogGrid").innerHTML=arr.length?arr.map(productCard).join(""):`<div class="empty"><div style="font-size:35px">🔎</div><h3>No matching products</h3><p>Try another search, category or price range.</p></div>`;
}
document.addEventListener("click",event=>{if(!event.target.closest(".search"))closeSearchSuggestions()});
function filterCategory(cat){activeCatalogProductIds=null;el("searchCat").value=cat;el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();document.querySelectorAll(".filters input[type=checkbox]").forEach(input=>input.checked=false);document.getElementById("catalog").scrollIntoView({behavior:"smooth"});renderCatalog()}
function filterCategoryGroup(categoryValues){
 activeCatalogProductIds=null;
 const selected=categoryValues.split("|");
 el("searchCat").value="all";el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();
 document.querySelectorAll(".filters input[type=checkbox]").forEach(input=>{input.checked=input.classList.contains("categoryFilter")&&selected.includes(input.value)});
 document.getElementById("catalog").scrollIntoView({behavior:"smooth"});renderCatalog();
}
function filterProductGroup(productIds){
 activeCatalogProductIds=new Set(productIds.split(",").map(Number));
 el("searchCat").value="all";el("searchInput").value="";el("priceRange").value=2000000;el("sellerFilter").value="all";syncSearchPromptState();resumeSearchPromptRotation();
 document.querySelectorAll(".filters input[type=checkbox]").forEach(input=>input.checked=false);
 document.getElementById("catalog").scrollIntoView({behavior:"smooth"});renderCatalog();
}
function filterDeals(){el("searchInput").value="";syncSearchPromptState();resumeSearchPromptRotation();document.getElementById("catalog").scrollIntoView();el("sort").value="featured";renderCatalog()}
function clearFilters(){activeCatalogProductIds=null;document.querySelectorAll(".filters input[type=checkbox]").forEach(x=>x.checked=false);el("priceRange").value=2000000;el("sellerFilter").value="all";el("searchInput").value="";el("searchCat").value="all";syncSearchPromptState();resumeSearchPromptRotation();renderCatalog()}
function toggleWish(id){if(wish.includes(id)){wish=wish.filter(x=>x!==id);toast("Removed from wishlist")}else{wish.push(id);toast("Added to wishlist")}save();renderCatalog();renderDeals();renderRecommendations()}
function openProduct(id){
 currentProduct=products.find(p=>p.id===id);recordRecentlyViewed(id);const p=currentProduct, os=offers[id]||[[p.shop,p.price]];
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
function addToCart(id){if(demoInventory[id-1]?.stock===0){toast("This item is out of stock");return}const found=cart.find(x=>x.id===id);if(found)found.qty++;else cart.push({id,qty:1});save();renderRecommendations();toast("Added to cart");}
function buyNow(id){if(demoInventory[id-1]?.stock===0){toast("This item is out of stock");return}addToCart(id);closeModal();toggleCart()}
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
initCategories();initSearchPromptTrack();initCategoryMegaMenu();renderHeroPromos();renderCategories();renderDeals();renderRecommendations();renderSpotlight("eventSpotlight","UPCOMING EVENTS",eventSpotlightItems,"event");renderSpotlight("influencerSpotlight","TOP CITY INFLUENCERS",influencerSpotlightItems,"influencer");renderServiceCategories();renderServiceFilters();renderServices();renderPartners();initSellerFilter();renderCatalog();updateCartBadge();resumeSearchPromptRotation();
