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
let cart=JSON.parse(localStorage.getItem("mbaleCart")||"[]"), wish=JSON.parse(localStorage.getItem("mbaleWish")||"[]"), recentlyViewed=JSON.parse(localStorage.getItem("mbaleRecentlyViewed")||"[]"), chats=JSON.parse(localStorage.getItem("mbaleChats")||"[]"), currentProduct=null, activeSearchSuggestion=-1, activeServiceCategory="all", selectedOfferIndexes={}, activeChatId=null, activeChatFilter="all", chatSearchQuery="", isChatSelected=false;
let sellerOrders=JSON.parse(localStorage.getItem("mbaleSellerOrders")||"[]"), sellerListings=JSON.parse(localStorage.getItem("mbaleSellerListings")||"[]"), sellerProductOverrides=JSON.parse(localStorage.getItem("mbaleSellerProductOverrides")||"{}"), sellerInventory=JSON.parse(localStorage.getItem("mbaleSellerInventory")||"{}"), sellerProfiles=JSON.parse(localStorage.getItem("mbaleSellerProfiles")||"{}"), sellerApplications=JSON.parse(localStorage.getItem("mbaleSellerApplications")||"[]"), activeSellerShop=localStorage.getItem("mbaleActiveSellerShop")||shops[0]?.name||products[0].shop, sellerSection="overview", activeSellerChatId=null, isSellerChatSelected=false;
let sellerMessageFilter="all",sellerMessageSearch="";
sellerListings.forEach(listing=>{if(!products.some(product=>product.id===listing.id))products.push(listing)});
Object.entries(sellerProductOverrides).forEach(([id,overrides])=>{const product=products.find(item=>item.id===Number(id));if(product){Object.assign(product,overrides);productGalleryImages.set(product.id,[product.image])}});
Object.entries(sellerInventory).forEach(([id,inventory])=>{if(Number(id)>0)demoInventory[Number(id)-1]=inventory});
const spotlightTimers=new Map();
const searchPromptExamples=[products[0].name,products[2].name,services[0].name,services[5].name,"Health & Pharmacy","Home & Kitchen"];

const money=n=>"UGX "+Number(n).toLocaleString("en-UG");
const el=id=>document.getElementById(id);
const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
function getProductInventory(id){return sellerInventory[id]||demoInventory[Number(id)-1]||{stock:0,sold:0}}
function saveSellerData(){localStorage.setItem("mbaleSellerOrders",JSON.stringify(sellerOrders));localStorage.setItem("mbaleSellerListings",JSON.stringify(sellerListings));localStorage.setItem("mbaleSellerProductOverrides",JSON.stringify(sellerProductOverrides));localStorage.setItem("mbaleSellerInventory",JSON.stringify(sellerInventory));localStorage.setItem("mbaleSellerProfiles",JSON.stringify(sellerProfiles));localStorage.setItem("mbaleSellerApplications",JSON.stringify(sellerApplications));localStorage.setItem("mbaleActiveSellerShop",activeSellerShop)}
function getProductOffer(id,index=selectedOfferIndexes[id]||0){
 const product=products.find(item=>item.id===Number(id));
 const productOffers=offers[id]||[[product.shop,product.price]];
 return productOffers[index]||productOffers[0];
}
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
function changeDetailImage(button,direction){
 const imageBox=button.closest(".detailImg"),image=imageBox.querySelector(".detailGalleryImage"),images=productGalleryImages.get(Number(image.dataset.productId));
 const nextIndex=(Number(image.dataset.imageIndex)+direction+images.length)%images.length;
 image.src=images[nextIndex];image.dataset.imageIndex=nextIndex;
 imageBox.querySelector(".detailGalleryCount").textContent=`${nextIndex+1} / ${images.length}`;
}
function productCard(p){
 const liked=wish.includes(p.id);
 const inventory=getProductInventory(p.id);
 const outOfStock=inventory.stock===0;
 const images=productGalleryImages.get(p.id)||[p.image];
 const productName=escapeHTML(p.name),sellerName=escapeHTML(p.shop),productTag=escapeHTML(p.tag),productDelivery=escapeHTML(p.delivery),imageUrl=escapeHTML(images[0]);
 return `<article class="card" onclick="openProduct(${p.id})">
 <div class="productImg"><img class="productGalleryImage" loading="lazy" data-product-id="${p.id}" data-image-index="0" src="${imageUrl}" alt="${productName}">${images.length>1?`<div class="galleryControls"><button type="button" aria-label="Previous image of ${productName}" onclick="event.stopPropagation();changeCardImage(this,-1)">‹</button><span class="galleryCount">1 / ${images.length}</span><button type="button" aria-label="Next image of ${productName}" onclick="event.stopPropagation();changeCardImage(this,1)">›</button></div>`:""}<span class="tag">${productTag}</span><button class="cartQuick" aria-label="${outOfStock?"Out of stock: ":"Add to cart: "}${productName}" title="${outOfStock?"Out of stock":"Add to cart"}" ${outOfStock?"disabled":""} onclick="event.stopPropagation();addToCart(${p.id})">🛒</button><button class="heart" aria-label="${liked?"Remove from":"Add to"} wishlist: ${productName}" onclick="event.stopPropagation();toggleWish(${p.id})">${liked?"♥":"♡"}</button></div>
 <div class="cardBody"><div class="rating">★ ${p.rating} <span style="color:#98a2b3">(${p.reviews})</span></div><div class="title">${productName}</div><div class="seller">Sold by ${sellerName}</div><div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="save">Save ${money(p.old-p.price)}</div><div class="inventoryMeta"><span class="stockStatus${outOfStock?" outOfStock":""}"><b>Stock:</b> ${outOfStock?"Out of stock":`${inventory.stock} available`}</span><span><b>Sold:</b> ${inventory.sold}</span></div><div class="delivery">✓ ${productDelivery}</div>${offers[p.id]?`<div class="compare"><span>Compare</span><strong>${offers[p.id].length} offers</strong></div>`:""}</div></article>`;
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
function getRecommendedProducts(excludeId=null){
 const signals=[...recentlyViewed.map(id=>[id,3]),...wish.map(id=>[id,2]),...cart.map(item=>[item.id,1])];
 const categoryScores={};
 signals.forEach(([id,weight])=>{const product=products.find(item=>item.id===id);if(product)categoryScores[product.cat]=(categoryScores[product.cat]||0)+weight});
 const preferredCategory=Object.keys(categoryScores).sort((a,b)=>categoryScores[b]-categoryScores[a])[0];
 let picks=preferredCategory?products.filter(product=>product.cat===preferredCategory&&!recentlyViewed.includes(product.id)&&product.id!==excludeId):[];
 const fallback=products.slice().sort((a,b)=>b.rating-a.rating||(b.old-b.price)-(a.old-a.price));
 fallback.forEach(product=>{if(picks.length<8&&product.id!==excludeId&&!picks.some(item=>item.id===product.id))picks.push(product)});
 return {picks:picks.slice(0,10),preferredCategory};
}
function renderRecommendations(){
 const {picks,preferredCategory}=getRecommendedProducts();
 el("recommendationReason").textContent=preferredCategory?`More ${preferredCategory.toLowerCase()} picks based on your activity`:"Popular with Mbale shoppers";
 el("recommendationGrid").innerHTML=picks.map(productCard).join("");
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
function initSellerFilter(){const sellers=[...new Set([...shops.map(shop=>shop.name),...products.map(product=>product.shop)])].sort((a,b)=>a.localeCompare(b));el("sellerFilter").innerHTML='<option value="all">All shops</option>'+sellers.map(shop=>`<option>${escapeHTML(shop)}</option>`).join("")}
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
function productShelfMarkup(id,title,description,items){
 if(!items.length)return "";
 return `<section class="section productShelf"><div class="sectionHead"><div><h2>${title}</h2><p>${description}</p></div><div class="shelfControls"><button class="shelfArrow" aria-label="Scroll ${title} left" onclick="scrollShelf('${id}',-1)">←</button><button class="shelfArrow" aria-label="Scroll ${title} right" onclick="scrollShelf('${id}',1)">→</button></div></div><div class="productRail" id="${id}">${items.map(productCard).join("")}</div></section>`;
}
function renderProductPage(p){
 const os=offers[p.id]||[[p.shop,p.price]],images=productGalleryImages.get(p.id)||[p.image];
 const sellerProducts=products.filter(product=>product.shop===p.shop&&product.id!==p.id);
 const sameCategory=products.filter(product=>product.cat===p.cat&&product.id!==p.id);
 const customersViewed=sameCategory.slice().sort((a,b)=>b.reviews-a.reviews||b.rating-a.rating).slice(0,10);
 const related=sameCategory.slice().sort((a,b)=>Number(b.name.split(" ")[0]===p.name.split(" ")[0])-Number(a.name.split(" ")[0]===p.name.split(" ")[0])||b.rating-a.rating).slice(0,10);
 const {picks,preferredCategory}=getRecommendedProducts(p.id);
 el("productPage").innerHTML=`<button class="productBack" type="button" onclick="closeProductPage()"><span aria-hidden="true">←</span> Back to shopping</button><div class="productDetail"><div class="detailImg"><img class="detailGalleryImage" data-product-id="${p.id}" data-image-index="0" src="${images[0]}" alt="${p.name}">${images.length>1?`<div class="detailGalleryControls"><button type="button" aria-label="Previous image of ${p.name}" onclick="changeDetailImage(this,-1)">‹</button><span class="detailGalleryCount">1 / ${images.length}</span><button type="button" aria-label="Next image of ${p.name}" onclick="changeDetailImage(this,1)">›</button></div>`:""}</div><div class="detailBody"><div class="rating">★ ${p.rating} • ${p.reviews} reviews</div><h1>${p.name}</h1><p class="productDescription">${p.desc}</p><div class="bigPrice">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="detailMeta"><span class="pill">✓ Mbale seller</span><span class="pill">↻ Return policy shown below</span><span class="pill">⚡ Local pickup/delivery</span></div><h3>Compare seller offers</h3>${os.map((o,i)=>`<div class="offer ${i===0?"best":""}"><div><b>${o[0]}</b><small>${i===0?"Lowest listed offer":"Alternative seller offer"} • Terms may vary</small></div><strong>${money(o[1])}</strong></div>`).join("")}<div class="productActions"><button class="yellowBtn" onclick="addToCart(${p.id})">Add to cart</button><button class="primary" onclick="buyNow(${p.id})">Buy now</button></div><div class="tabs"><span class="tab active" onclick="showTab('details')">Details</span><span class="tab" onclick="showTab('seller')">Seller</span><span class="tab" onclick="showTab('returns')">Returns</span><span class="tab" onclick="showTab('terms')">Terms</span></div><div id="tabPane" class="tabPane"><b>Product details</b><br>${p.desc}<br><br><b>Availability:</b> Seller stock must be confirmed before checkout.</div></div></div>${productShelfMarkup("sellerProductGrid","More from "+p.shop,"Browse other products from this seller.",sellerProducts)}${productShelfMarkup("customersViewedGrid","Customers also viewed","Popular products in this category.",customersViewed)}${productShelfMarkup("relatedProductGrid","Related products","More products from the same category.",related)}${productShelfMarkup("productPicksGrid","Top picks for you",preferredCategory?`Selected from your activity in ${preferredCategory.toLowerCase()}.`:"Popular picks from Mbale shoppers.",picks)}`;
 const chatSeller=getProductOffer(p.id)[0];
 el("productPage").querySelector(".productActions").insertAdjacentHTML("afterend",`<section class="sellerChat" aria-label="Chat with seller"><div class="sellerChatHeading"><div><h2>Chat with seller</h2><p>Ask <strong>${chatSeller}</strong> about this item</p></div><span class="sellerChatStatus">Seller</span></div><div class="sellerChatQuick" aria-label="Quick messages"><button type="button" onclick="setSellerQuickMessage('offer')">Make offer</button><button type="button" onclick="setSellerQuickMessage('available')">Is this available?</button><button type="button" onclick="setSellerQuickMessage('price')">Last price</button></div><label class="sellerChatLabel" for="sellerChatMessage">Message</label><textarea id="sellerChatMessage" placeholder="Write your message here"></textarea><button type="button" class="primary sellerChatStart" onclick="startSellerChat()">Start chat</button></section>`);
 initializeProductOffers(p);
 el("productPage").hidden=false;document.querySelector("main.container").classList.add("productView");window.scrollTo({top:0,behavior:"smooth"});
}
function initializeProductOffers(product){
 const offerElements=el("productPage").querySelectorAll(".offer");
 offerElements.forEach((offerElement,index)=>{
  offerElement.classList.add("offerOption");offerElement.setAttribute("role","button");offerElement.setAttribute("tabindex","0");
  offerElement.addEventListener("click",()=>selectProductOffer(product.id,index));
  offerElement.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();selectProductOffer(product.id,index)}});
 });
 selectProductOffer(product.id,selectedOfferIndexes[product.id]||0);
}
function selectProductOffer(id,index){
 const selectedProduct=products.find(product=>product.id===Number(id));
 const productOffers=offers[id]||[[selectedProduct.shop,selectedProduct.price]];
 if(!productOffers[index]||currentProduct?.id!==Number(id))return;
 selectedOfferIndexes[id]=index;
 el("productPage").querySelectorAll(".offerOption").forEach((offerElement,offerIndex)=>{
  const selected=offerIndex===index;offerElement.classList.toggle("selected",selected);offerElement.setAttribute("aria-pressed",String(selected));
 });
 el("productPage").querySelector(".bigPrice").firstChild.textContent=money(productOffers[index][1])+" ";
 const seller=el("productPage").querySelector(".sellerChatHeading p strong");
 if(seller)seller.textContent=productOffers[index][0];
}
function setSellerQuickMessage(type){
 if(!currentProduct)return;
 const messages={offer:`Hi, would you consider a better price for ${currentProduct.name}?`,available:`Hi, is ${currentProduct.name} available?`,price:`Hi, what is your last price for ${currentProduct.name}?`};
 const message=el("sellerChatMessage");
 if(message){message.value=messages[type]||"";message.focus()}
}
function startSellerChat(){
 const message=el("sellerChatMessage")?.value.trim();
 if(!message){toast("Write a message to start chatting");return}
 if(!currentProduct)return;
 const [seller,price]=getProductOffer(currentProduct.id);
 let chat=chats.find(item=>item.productId===currentProduct.id&&item.seller===seller);
 if(!chat){chat={id:`chat-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`,productId:currentProduct.id,seller,price,buyerName:"Shopper",messages:[],updatedAt:Date.now(),online:Math.random()<.6,lastSeenAt:Date.now()-Math.floor(Math.random()*3600000)};chats.push(chat)}
 const sentMessage={text:message,from:"buyer",time:Date.now(),seen:false};
 chat.messages.push(sentMessage);chat.updatedAt=Date.now();
 activeChatId=chat.id;saveChats();showMessages(chat.id);simulateReadReceipt(chat.id,sentMessage.time);
}
function saveChats(){localStorage.setItem("mbaleChats",JSON.stringify(chats));updateMessageNotification()}
function updateMessageNotification(){
 const badge=el("messageUnreadBadge"),button=el("messagesButton");
 if(!badge)return;
 const unread=chats.reduce((total,chat)=>total+getChatUnreadCount(chat),0);
 badge.textContent=unread>99?"99+":String(unread);
 badge.hidden=unread===0;
 if(button)button.setAttribute("aria-label",unread?`Messages, ${unread} unread replies`:"Messages");
}
function showMessages(chatId=null){
 if(chatId){activeChatId=chatId;isChatSelected=true}else isChatSelected=false;
 const activeChat=chats.find(chat=>chat.id===activeChatId);
 if(activeChat){activeChat.messages.forEach(message=>{if(message.from==="seller")message.read=true});saveChats()}
 renderMessagesModal();el("modalWrap").classList.add("show");
}
function renderMessagesModal(){
 const orderedChats=[...chats].sort((a,b)=>b.updatedAt-a.updatedAt);
 if(!orderedChats.some(chat=>chat.id===activeChatId))activeChatId=orderedChats[0]?.id||null;
 const activeChat=chats.find(chat=>chat.id===activeChatId);
 const activeProduct=activeChat&&products.find(product=>product.id===activeChat.productId);
 el("modal").innerHTML=`<div class="messagesView" role="dialog" aria-label="Messages"><aside class="messagesSidebar"><div class="messagesSidebarHeader"><div><h2>Messages</h2><p>Your seller conversations</p></div><button class="messagesClose" type="button" aria-label="Close messages" onclick="closeModal()">×</button></div><div class="messagesList">${orderedChats.length?orderedChats.map(chat=>{const product=products.find(item=>item.id===chat.productId),lastMessage=chat.messages[chat.messages.length-1];return `<button class="messageListItem${chat.id===activeChatId?" active":""}" type="button" onclick="showMessages('${chat.id}')"><span class="messageAvatar" aria-hidden="true">${escapeHTML(chat.seller.slice(0,1).toUpperCase())}</span><span class="messageListCopy"><strong>${escapeHTML(chat.seller)}</strong><small>${escapeHTML(product?.name||"Product inquiry")}</small><span>${escapeHTML(lastMessage?.text||"")}</span></span></button>`}).join(""):`<p class="messageListEmpty">No conversations yet</p>`}</div></aside><section class="messageThread">${activeChat?`<header class="messageThreadHeader"><span class="messageAvatar" aria-hidden="true">${escapeHTML(activeChat.seller.slice(0,1).toUpperCase())}</span><div><strong>${escapeHTML(activeChat.seller)}</strong><small>${escapeHTML(activeProduct?.name||"Product inquiry")}</small></div></header><div class="messageHistory" id="messageHistory">${activeChat.messages.map(message=>`<div class="messageRow ${message.from==="buyer"?"buyerMessage":"sellerMessage"}"><div class="messageBubble">${escapeHTML(message.text)}<time>${new Date(message.time).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}</time></div></div>`).join("")}</div><form class="messageComposer" onsubmit="sendChatMessage(event)"><textarea id="chatComposer" rows="1" maxlength="2000" aria-label="Write a message" placeholder="Write a message"></textarea><button class="primary" type="submit">Send</button></form><p class="messagesNote">Demo chat is saved in this browser. Seller replies are not connected.</p>`:`<div class="messageEmpty"><strong>Your messages</strong><p>Start a chat from a product page to ask a seller about an item.</p></div>`}</section></div>`;
 const messagesView=el("modal").querySelector(".messagesView");
 messagesView.classList.toggle("chatSelected",isChatSelected);
 setupMessageControls();renderMessageList();
 const threadHeader=el("modal").querySelector(".messageThreadHeader");
 if(threadHeader)threadHeader.insertAdjacentHTML("afterbegin",`<button class="messagesBack" type="button" aria-label="Back to conversations" onclick="showMessages()">‹</button>`);
 if(threadHeader&&activeChat){const detail=threadHeader.querySelector("div"),presence=document.createElement("small");presence.className=`messagePresence${activeChat.online?" online":""}`;presence.textContent=getChatPresenceLabel(activeChat);detail.append(presence)}
 const messageNote=el("modal").querySelector(".messagesNote");
 if(messageNote)messageNote.textContent="Demo chat is saved here. Seller presence and read receipts are simulated.";
 const history=el("messageHistory");
 if(history&&activeChat&&activeProduct){const matchingOffer=(offers[activeProduct.id]||[[activeProduct.shop,activeProduct.price]]).find(([seller])=>seller===activeChat.seller),chatPrice=activeChat.price??matchingOffer?.[1]??activeProduct.price;history.insertAdjacentHTML("beforebegin",`<div class="chatProductContext"><img src="${activeProduct.image}" alt=""><span class="chatProductInfo"><small>ITEM IN THIS CHAT</small><strong>${escapeHTML(activeProduct.name)}</strong><span>${escapeHTML(activeChat.seller)} · ${money(chatPrice)}</span></span><button type="button" onclick="closeModal();openProduct(${activeProduct.id})">View item</button></div>`)}
 if(history&&activeChat){activeChat.messages.forEach((message,index)=>{if(message.from!=="buyer")return;const time=history.children[index]?.querySelector("time");if(!time)return;const receipt=document.createElement("span");receipt.className=`messageReceipt${message.seen?" seen":""}`;receipt.setAttribute("aria-label",message.seen?"Seen":"Sent");receipt.textContent="✓✓";time.append(receipt)})}
 if(history)history.scrollTop=history.scrollHeight;
 const composer=el("chatComposer");
 if(composer)composer.addEventListener("keydown",event=>{if(event.key==="Enter"&&!event.shiftKey){event.preventDefault();composer.form.requestSubmit()}});
}
function setupMessageControls(){
 const sidebar=el("modal").querySelector(".messagesSidebar");
 if(!sidebar||sidebar.querySelector(".messagesTools"))return;
 sidebar.querySelector(".messagesList").insertAdjacentHTML("beforebegin",`<div class="messagesTools"><label class="messageSearch"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search conversations" placeholder="Search chats" value="${escapeHTML(chatSearchQuery)}" oninput="updateMessageSearch(this.value)"></label><div class="messagesFilters" role="group" aria-label="Filter conversations"><button type="button" class="messageFilterBtn" data-filter="all" onclick="updateMessageFilter('all')">All <span class="allChatCount"></span></button><button type="button" class="messageFilterBtn" data-filter="unread" onclick="updateMessageFilter('unread')">Unread <span class="unreadChatCount"></span></button></div></div>`);
}
function getChatUnreadCount(chat){return chat.messages.filter(message=>message.from==="seller"&&!message.read).length}
function getChatPresenceLabel(chat){
 if(chat.online)return "Online";
 const elapsedMinutes=Math.max(1,Math.floor((Date.now()-(chat.lastSeenAt||chat.updatedAt||Date.now()))/60000));
 if(elapsedMinutes<60)return `Last seen ${elapsedMinutes} min ago`;
 const elapsedHours=Math.floor(elapsedMinutes/60);
 return elapsedHours<24?`Last seen ${elapsedHours} hr ago`:`Last seen ${Math.floor(elapsedHours/24)} d ago`;
}
function getChatLastSeenDetails(chat){
 if(chat.online)return "Online";
 const lastSeen=new Date(chat.lastSeenAt||chat.updatedAt||Date.now()),date=lastSeen.toLocaleDateString("en-UG",{day:"numeric",month:"short",year:"numeric"}),time=lastSeen.toLocaleTimeString("en-UG",{hour:"numeric",minute:"2-digit"});
 return `Last seen ${date} · ${time}`;
}
function renderMessageList(){
 const list=el("modal").querySelector(".messagesList");if(!list)return;
 const orderedChats=[...chats].sort((a,b)=>b.updatedAt-a.updatedAt);
 const search=chatSearchQuery.trim().toLowerCase();
 const visibleChats=orderedChats.filter(chat=>(activeChatFilter!=="unread"||getChatUnreadCount(chat)>0)&&(!search||chat.seller.toLowerCase().includes(search)));
 list.innerHTML=visibleChats.length?visibleChats.map(chat=>{const count=chat.messages.length,unread=getChatUnreadCount(chat),lastBuyerMessage=chat.messages.slice().reverse().find(message=>message.from==="buyer"),receipt=lastBuyerMessage?`<span class="messageListReceipt${lastBuyerMessage.seen?" seen":""}" aria-label="${lastBuyerMessage.seen?"Seen":"Sent"}" title="${lastBuyerMessage.seen?"Seen":"Sent"}">✓✓</span>`:"";return `<button class="messageListItem${chat.id===activeChatId?" active":""}" type="button" onclick="showMessages('${escapeHTML(chat.id)}')"><span class="messageAvatar" aria-hidden="true">${escapeHTML(chat.seller.slice(0,1).toUpperCase())}</span><span class="messageListCopy"><strong>${escapeHTML(chat.seller)}</strong>${receipt}<small class="messageListPresence${chat.online?" online":""}">${getChatLastSeenDetails(chat)}</small></span><span class="messageCount" aria-label="${count} messages">${count}</span>${unread?`<span class="messageUnreadCount" aria-label="${unread} unread messages">${unread}</span>`:""}</button>`}).join(""):`<p class="messageListEmpty">${search?"No matching chats":activeChatFilter==="unread"?"No unread messages":"No conversations yet"}</p>`;
 el("modal").querySelectorAll(".messageFilterBtn").forEach(button=>button.classList.toggle("active",button.dataset.filter===activeChatFilter));
 const allCount=el("modal").querySelector(".allChatCount"),unreadCount=el("modal").querySelector(".unreadChatCount");
 if(allCount)allCount.textContent=chats.length;
 if(unreadCount)unreadCount.textContent=chats.reduce((total,chat)=>total+getChatUnreadCount(chat),0);
}
function updateMessageSearch(value){chatSearchQuery=value;renderMessageList()}
function updateMessageFilter(filter){activeChatFilter=filter;renderMessageList()}
function simulateReadReceipt(chatId,messageTime){
 setTimeout(()=>{const chat=chats.find(item=>item.id===chatId),message=chat?.messages.find(item=>item.time===messageTime&&item.from==="buyer");if(!chat||!message)return;message.seen=true;saveChats();if(activeChatId===chatId&&el("modalWrap").classList.contains("show"))renderMessagesModal()},1600);
}
function sendChatMessage(event){
 event.preventDefault();
 const chat=chats.find(item=>item.id===activeChatId),input=el("chatComposer"),text=input?.value.trim();
 if(!chat||!text)return;
 const sentMessage={text,from:"buyer",time:Date.now(),seen:false};
 chat.messages.push(sentMessage);chat.updatedAt=Date.now();saveChats();renderMessagesModal();el("chatComposer")?.focus();simulateReadReceipt(chat.id,sentMessage.time);
}
function openProduct(id,fromHistory=false){
 const product=products.find(item=>item.id===Number(id));if(!product)return;
 if(!fromHistory)history.pushState({productId:product.id},"",`#product-${product.id}`);
 currentProduct=product;recordRecentlyViewed(product.id);renderProductPage(product);
}
function showStorefront(){
 el("productPage").hidden=true;document.querySelector("main.container").classList.remove("productView");currentProduct=null;
}
function closeProductPage(){
 if(history.state?.productId){history.back();return}
 history.replaceState(null,"",`${location.pathname}${location.search}`);showStorefront();document.getElementById("catalog").scrollIntoView({behavior:"smooth"});
}
window.addEventListener("popstate",event=>{
 const productId=event.state?.productId||Number(location.hash.match(/^#product-(\d+)$/)?.[1]);
 if(productId)openProduct(productId,true);else showStorefront();
});
function showTab(t){
 const p=currentProduct;
 const content={details:`<b>Product details</b><br>${p.desc}<br><br><b>Important:</b> Product specifications, colour, size and stock can vary by seller. Confirm before payment.`,seller:`<b>Seller information</b><br><strong>${p.shop}</strong><br>Mbale, Uganda<br><br>Seller ratings and store information are displayed where available. Contact the seller to confirm stock, warranty and delivery before purchase.`,returns:`<b>Returns & refunds</b><br>Return terms are seller- and category-dependent. Items should normally be unused, undamaged and in original packaging. Start a return request through your order record and provide the reason and supporting information.<br><br><b>Demo marketplace rule:</b> seller-specific return windows must be displayed on the final checkout/order page before payment.`,terms:`<b>Terms & conditions</b><br>Mbale Shopper provides the marketplace interface; participating sellers are responsible for listing accuracy, stock, pricing, fulfilment and seller-specific warranties. Prices in this demo are illustrative. A purchase becomes binding only after the marketplace confirms the order.`};
 el("tabPane").innerHTML=content[t]||content.details;
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));event?.target?.classList.add("active");
}
function closeModal(){if(typeof stopPosScanner==="function")stopPosScanner();el("modalWrap").classList.remove("show","posFullscreen")}
function addToCart(id,offerIndex=selectedOfferIndexes[id]||0){
 if(getProductInventory(id).stock===0){toast("This item is out of stock");return}
 const product=products.find(item=>item.id===id),[seller,price]=getProductOffer(id,offerIndex),found=cart.find(item=>item.id===id&&(item.seller||product.shop)===seller&&Number(item.price??product.price)===price);
 if(found)found.qty++;else cart.push({id,qty:1,seller,price});
 save();renderRecommendations();renderCart();toast(`Added from ${seller}`);
}
function buyNow(id,offerIndex=selectedOfferIndexes[id]||0){if(getProductInventory(id).stock===0){toast("This item is out of stock");return}addToCart(id,offerIndex);closeModal();toggleCart()}
function toggleCart(){el("cartDrawer").classList.toggle("show");renderCart()}
function renderCart(){
 const box=el("cartItems");if(!cart.length){box.innerHTML='<div class="empty" style="margin-top:20px">Your cart is empty.<br><button class="primary" style="margin-top:12px" onclick="toggleCart();document.getElementById(\'catalog\').scrollIntoView()">Start shopping</button></div>';el("cartTotal").textContent="UGX 0";return}
 let total=0;box.innerHTML=cart.map((item,index)=>{const product=products.find(entry=>entry.id===item.id),price=Number(item.price??product.price),seller=item.seller||product.shop;total+=price*item.qty;return `<div class="cartItem"><img src="${product.image}" alt=""><div><b style="font-size:12px">${product.name}</b><div style="font-size:11px;color:#667085">${seller}</div><div class="qty"><button aria-label="Remove one ${product.name}" onclick="changeQty(${index},-1)">−</button><span>${item.qty}</span><button aria-label="Add one ${product.name}" onclick="changeQty(${index},1)">+</button></div></div><b>${money(price*item.qty)}</b></div>`}).join("");el("cartTotal").textContent=money(total);
}
function changeQty(index,d){const item=cart[index];if(!item)return;item.qty+=d;if(item.qty<=0)cart.splice(index,1);save();renderCart()}
function checkout(){
 if(!cart.length){toast("Your cart is empty");return}
 const total=cart.reduce((sum,item)=>sum+Number(item.price??products.find(product=>product.id===item.id).price)*item.qty,0);
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>Checkout</h2><p style="color:#667085">Review your delivery details and choose a payment method. This demo does not process real payments.</p><div class="formGrid"><div><label>Full name<input placeholder="Your name"></label></div><div><label>Phone number<input placeholder="+256 ..."></label></div><div class="full"><label>Delivery address<textarea placeholder="Area, street, landmark, Mbale"></textarea></label></div><div><label>Delivery method<select><option>Seller delivery</option><option>Pickup from shop</option></select></label></div><div><label>Payment method<select><option>Mobile Money</option><option>Cash on delivery</option><option>Card</option></select></label></div></div><div style="background:#f8fafc;padding:14px;border-radius:9px;margin:18px 0"><b>Order total: ${money(total)}</b><br><small style="color:#667085">Delivery fees and seller terms are confirmed before final order placement.</small></div><button class="yellowBtn" style="width:100%" onclick="placeOrder()">Place demo order</button></div>`;
 el("modalWrap").classList.add("show");el("cartDrawer").classList.remove("show");
}
function placeOrder(){
 const inputs=el("modal").querySelectorAll(".formGrid input"),address=el("modal").querySelector(".formGrid textarea")?.value.trim(),customerName=inputs[0]?.value.trim(),phone=inputs[1]?.value.trim(),phoneDigits=phone?.replace(/\D/g,"")||"";
 if(!customerName||!phone||!address){toast("Enter your name, phone number and delivery address");return}
 if(phoneDigits.length<9||phoneDigits.length>15){toast("Enter a valid phone number");return}
 const quantities=new Map();cart.forEach(item=>quantities.set(item.id,(quantities.get(item.id)||0)+item.qty));
 for(const [productId,quantity] of quantities){if(getProductInventory(productId).stock<quantity){toast(`${products.find(product=>product.id===productId)?.name||"Item"} no longer has enough stock`);return}}
 const selects=el("modal").querySelectorAll(".formGrid select"),orderGroup=`MS-${Date.now().toString(36).toUpperCase()}`;
 cart.forEach((item,index)=>{
  const product=products.find(entry=>entry.id===item.id),price=Number(item.price??product.price),seller=item.seller||product.shop;
  sellerOrders.unshift({id:`${orderGroup}-${String(index+1).padStart(2,"0")}`,checkoutId:orderGroup,seller,productId:item.id,productName:product.name,quantity:item.qty,unitPrice:price,total:price*item.qty,customerName,phone,address,deliveryMethod:selects[0]?.value||"Seller delivery",paymentMethod:selects[1]?.value||"Mobile Money",paymentStatus:"Awaiting payment",status:"New",createdAt:Date.now()});
 });
 quantities.forEach((quantity,id)=>{const inventory=getProductInventory(id);sellerInventory[id]={stock:inventory.stock-quantity,sold:inventory.sold+quantity}});
 saveSellerData();cart=[];save();renderCart();renderCatalog();closeModal();toast("Demo order recorded; payment is still pending");
}
function showPolicy(type){
 const data={terms:["Terms & conditions","Mbale Shopper is a marketplace interface connecting shoppers with participating sellers. Sellers control their own inventory, product information, fulfilment and seller-specific warranties. Buyers should review the seller and product terms before confirming payment."],returns:["Returns & refunds","Return eligibility, timelines and conditions should be displayed by each seller and category. Items generally need to be unused, undamaged and in original packaging where applicable. Refund timing depends on the selected payment method and seller verification."],privacy:["Privacy policy","This front-end demo stores cart and wishlist data locally in your browser. A production implementation should add secure authentication, encrypted payment processing, consent controls, order records and a formal privacy policy."]};
 el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>${data[type][0]}</h2><p style="line-height:1.8;color:#475467">${data[type][1]}</p></div>`;el("modalWrap").classList.add("show");
}
function showAccount(){el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>My account</h2><p>Sign in or create an account to manage orders, addresses, wishlist and seller messages.</p><div class="formGrid"><label>Email / phone<input placeholder="Email or phone"></label><label>Password<input type="password" placeholder="Password"></label></div><button class="yellowBtn" style="margin-top:16px;width:100%" onclick="toast('Demo sign-in');closeModal()">Sign in</button></div>`;el("modalWrap").classList.add("show")}
function showOrders(){el("modal").innerHTML=`<button class="close" onclick="closeModal()">✕</button><div class="form"><h2>Your orders</h2><div class="empty">No orders yet.<br>Orders you place will appear here.</div></div>`;el("modalWrap").classList.add("show")}
function sellerProductsFor(shop=activeSellerShop){return products.filter(product=>product.shop===shop)}
function sellerOrdersFor(shop=activeSellerShop){return sellerOrders.filter(order=>order.seller===shop)}
function sellerChatsFor(shop=activeSellerShop){return chats.filter(chat=>chat.seller===shop)}
function sellerUnreadCount(chat){return chat.messages.filter(message=>message.from==="buyer"&&!message.read).length}
function getSellerProfile(shop=activeSellerShop){const saved=sellerProfiles[shop]||{},store=shops.find(item=>item.name===shop);return {phone:"",email:"",location:"Mbale, Uganda",hours:"Mon-Sat, 9:00 AM-6:00 PM",description:store?.desc||"Local seller on Mbale Shopper",...saved}}
function showSell(){renderSellerCenter("overview")}
function renderSellerCenter(section=sellerSection){
 if(section!==sellerSection)isSellerChatSelected=false;
 sellerSection=section;
 const shopNames=[...new Set([...shops.map(shop=>shop.name),...products.map(product=>product.shop)])].sort((a,b)=>a.localeCompare(b));
 if(!shopNames.includes(activeSellerShop))activeSellerShop=shopNames[0];
 const sections=[["overview","Overview"],["products","Products"],["orders","Orders"],["messages","Messages"],["profile","Shop profile"],["payments","Payments"],["verification","Verification"],["support","Support"],["application","Application"]];
 el("modal").innerHTML=`<div class="sellerWorkspace" role="dialog" aria-label="Seller center"><header class="sellerWorkspaceHeader"><button class="sellerNavToggle" type="button" aria-label="Toggle seller navigation" aria-expanded="false" onclick="toggleSellerNav()">☰</button><div><span class="sellerEyebrow">MBALE SHOPPER</span><h1>Seller center</h1></div><label class="sellerWorkspaceShop">Demo shop<select aria-label="Select demo shop" onchange="switchSellerShop(this.value)">${shopNames.map(shop=>`<option value="${escapeHTML(shop)}"${shop===activeSellerShop?" selected":""}>${escapeHTML(shop)}</option>`).join("")}</select></label><button class="messagesClose" type="button" aria-label="Close seller center" onclick="closeModal()">×</button></header><div class="sellerWorkspaceLayout"><nav class="sellerWorkspaceNav" aria-label="Seller sections">${sections.map(([key,label])=>`<button type="button" class="sellerNavButton${sellerSection===key?" active":""}" onclick="renderSellerCenter('${key}')">${label}${key==="messages"&&sellerChatsFor().reduce((sum,chat)=>sum+sellerUnreadCount(chat),0)?`<span>${sellerChatsFor().reduce((sum,chat)=>sum+sellerUnreadCount(chat),0)}</span>`:""}</button>`).join("")}</nav><main class="sellerWorkspaceContent" id="sellerWorkspaceContent"></main></div><footer class="sellerWorkspaceFooter"><span>Local demo workspace · Changes are stored in this browser only</span><span>Production requires authenticated seller accounts and server-side data</span></footer></div>`;
 el("modalWrap").classList.add("show");renderSellerSection();
}
function toggleSellerNav(){
 const workspace=el("modal").querySelector(".sellerWorkspace"),button=workspace?.querySelector(".sellerNavToggle");
 if(!workspace||!button)return;
 const isOpen=workspace.classList.toggle("navOpen");
 button.setAttribute("aria-expanded",String(isOpen));
}
function switchSellerShop(shop){activeSellerShop=shop;activeSellerChatId=null;isSellerChatSelected=false;saveSellerData();renderSellerCenter(sellerSection)}
function renderSellerSection(){
 const content=el("sellerWorkspaceContent");if(!content)return;
 const renderers={overview:renderSellerOverview,products:renderSellerProducts,orders:renderSellerOrders,messages:renderSellerMessages,profile:renderSellerProfile,payments:renderSellerPayments,verification:renderSellerVerification,support:renderSellerSupport,application:renderSellerApplication};
 content.innerHTML=(renderers[sellerSection]||renderSellerOverview)();
 if(sellerSection==="messages"){
  const threadHeader=content.querySelector(".messageThreadHeader");
  if(threadHeader){
   const backButton=document.createElement("button");backButton.className="sellerInboxBack";backButton.type="button";backButton.setAttribute("aria-label","Back to conversations");backButton.textContent="‹";backButton.addEventListener("click",showSellerInboxList);
   threadHeader.insertBefore(backButton,threadHeader.firstChild);
  }
  syncSellerInboxNames();
  const sellerHistory=content.querySelector("#sellerMessageHistory");
  if(sellerHistory)sellerHistory.scrollTop=sellerHistory.scrollHeight;
  const composer=el("sellerReplyInput");
  if(composer)composer.addEventListener("keydown",event=>{if(event.key==="Enter"&&!event.shiftKey){event.preventDefault();composer.form.requestSubmit()}});
 }
 syncSellerMessageCount();
}
function syncSellerInboxNames(){
 const ordered=sellerChatsFor().slice().sort((a,b)=>b.updatedAt-a.updatedAt);
 const list=el("modal").querySelector(".sellerInboxList");if(!list)return;
 if(!list.querySelector(".sellerInboxTools"))list.insertAdjacentHTML("afterbegin",`<div class="sellerInboxTools"><label><span aria-hidden="true">⌕</span><input type="search" aria-label="Search seller conversations" placeholder="Search buyer or item" value="${escapeHTML(sellerMessageSearch)}" oninput="updateSellerInboxSearch(this.value)"></label><div class="sellerInboxFilters" role="group" aria-label="Filter by message status"><button type="button" data-filter="all" onclick="updateSellerInboxFilter('all')">All <span></span></button><button type="button" data-filter="unread" onclick="updateSellerInboxFilter('unread')">Unread <span></span></button><button type="button" data-filter="seen" onclick="updateSellerInboxFilter('seen')">Seen <span></span></button><button type="button" data-filter="sent" onclick="updateSellerInboxFilter('sent')">Sent <span></span></button></div></div>`);
 list.querySelectorAll(".sellerInboxItem").forEach((item,index)=>{
  const chat=ordered[index];if(!chat)return;
  const product=products.find(entry=>entry.id===chat.productId),status=getSellerChatStatus(chat),buyerName=chat.buyerName||"Shopper";
  item.innerHTML=`<span class="sellerInboxAvatar" aria-hidden="true">👤</span><span class="sellerInboxIdentity"><span class="sellerInboxIdentityLine"><strong>${escapeHTML(buyerName)}</strong><span class="sellerConversationStatus ${status.key}" aria-label="${escapeHTML(status.label)}">${status.hasReceipt?`<span class="sellerReceiptTicks${status.key==="seen"?" seen":""}" aria-hidden="true">✓✓</span>`:""}${status.count?`<span class="sellerUnreadBadge" aria-label="${status.count} unread messages">${status.count}</span>`:""}${escapeHTML(status.label)}</span></span><small class="sellerInboxLastSeen">${escapeHTML(getChatLastSeenDetails(chat))}</small></span>`;
  item.dataset.messageStatus=status.key;
  item.dataset.searchText=`${chat.buyerName||"Shopper"} ${product?.name||""}`.toLowerCase();
 });
 renderSellerInboxFilters();
 const active=ordered.find(chat=>chat.id===activeSellerChatId),threadLabel=el("modal").querySelector(".sellerInboxThread>header strong");
 if(active&&threadLabel)threadLabel.textContent=active.buyerName||"Shopper";
}
function getSellerChatStatus(chat){
 const unread=sellerUnreadCount(chat);
 if(unread)return {key:"unread",label:"Unread",count:unread,hasReceipt:false};
 const latestSellerMessage=chat.messages.slice().reverse().find(message=>message.from==="seller");
 if(latestSellerMessage)return latestSellerMessage.read?{key:"seen",label:"Seen",hasReceipt:true}:{key:"sent",label:"Sent",hasReceipt:true};
 const latestBuyerMessage=chat.messages.slice().reverse().find(message=>message.from==="buyer");
 if(latestBuyerMessage)return latestBuyerMessage.read?{key:"seen",label:"Read",hasReceipt:false}:{key:"unread",label:"Unread",count:1,hasReceipt:false};
 return {key:"sent",label:"No messages",hasReceipt:false};
}
function renderSellerInboxFilters(){
 const list=el("modal").querySelector(".sellerInboxList");if(!list)return;
 const chatsForShop=sellerChatsFor().slice().sort((a,b)=>b.updatedAt-a.updatedAt),search=sellerMessageSearch.trim().toLowerCase();
 const buttons=list.querySelectorAll(".sellerInboxFilters button");
 buttons.forEach(button=>{
  const key=button.dataset.filter,count=key==="all"?chatsForShop.length:chatsForShop.filter(chat=>getSellerChatStatus(chat).key===key).length;
  button.classList.toggle("active",key===sellerMessageFilter);button.querySelector("span").textContent=count;
 });
 let shown=0;
 list.querySelectorAll(".sellerInboxItem").forEach(item=>{
  const matchesFilter=sellerMessageFilter==="all"||item.dataset.messageStatus===sellerMessageFilter,matchesSearch=!search||item.dataset.searchText.includes(search);
  item.hidden=!(matchesFilter&&matchesSearch);if(!item.hidden)shown++;
 });
 let empty=list.querySelector(".sellerInboxFilterEmpty");
 if(!empty){empty=document.createElement("p");empty.className="sellerInboxFilterEmpty sellerInlineNote";list.append(empty)}
 empty.hidden=shown>0||!list.querySelector(".sellerInboxItem");
 empty.textContent=search?"No conversations match your search.":sellerMessageFilter==="all"?"No buyer conversations for this shop yet.":`No ${sellerMessageFilter} conversations.`;
}
function updateSellerInboxSearch(value){sellerMessageSearch=value;renderSellerInboxFilters()}
function updateSellerInboxFilter(filter){sellerMessageFilter=filter;renderSellerInboxFilters()}
function syncSellerMessageCount(){
 const button=[...el("modal").querySelectorAll(".sellerNavButton")].find(item=>item.textContent.startsWith("Messages"));
 if(!button)return;
 const unread=sellerChatsFor().reduce((sum,chat)=>sum+sellerUnreadCount(chat),0),badge=button.querySelector("span");
 if(unread){if(badge)badge.textContent=unread;else{const count=document.createElement("span");count.textContent=unread;button.append(count)}}else badge?.remove();
}
function sellerPageHeading(title,description,action=""){return `<div class="sellerPageHeading"><div><h2>${title}</h2><p>${description}</p></div>${action}</div>`}
function renderSellerOverview(){
 const items=sellerProductsFor(),orders=sellerOrdersFor(),openOrders=orders.filter(order=>!["Completed","Cancelled"].includes(order.status)),lowStock=items.filter(product=>getProductInventory(product.id).stock<=5),unread=sellerChatsFor().reduce((sum,chat)=>sum+sellerUnreadCount(chat),0),sales=orders.reduce((sum,order)=>sum+Number(order.total||0),0);
 return `${sellerPageHeading("Overview",`Daily operations for ${escapeHTML(activeSellerShop)}.`)}<div class="sellerWorkspaceNotice"><strong>Demo data only.</strong> This workspace runs locally; orders, messages and changes are not synced to other devices.</div><div class="sellerMetricGrid"><article><span>Active listings</span><strong>${items.length}</strong><small>${lowStock.length} low or out of stock</small></article><article><span>Open orders</span><strong>${openOrders.length}</strong><small>Needs fulfilment attention</small></article><article><span>Unread buyer messages</span><strong>${unread}</strong><small>Across seller conversations</small></article><article><span>Order value</span><strong>${money(sales)}</strong><small>Demo orders recorded</small></article></div><section class="sellerOverviewSection"><div class="sellerSubheading"><h3>Recent orders</h3><button type="button" onclick="renderSellerCenter('orders')">View orders</button></div>${sellerOrderTableMarkup(orders.slice().sort((a,b)=>b.createdAt-a.createdAt).slice(0,5),false)}</section><section class="sellerOverviewSection"><div class="sellerSubheading"><h3>Stock to review</h3><button type="button" onclick="renderSellerCenter('products')">Manage products</button></div>${lowStock.length?`<ul class="sellerAttentionList">${lowStock.slice(0,5).map(product=>`<li><span>${escapeHTML(product.name)}</span><b>${getProductInventory(product.id).stock===0?"Out of stock":`${getProductInventory(product.id).stock} left`}</b></li>`).join("")}</ul>`:`<p class="sellerInlineNote">No low-stock listings right now.</p>`}</section>`;
}
function sellerOrderTableMarkup(orders,editable=true){
 if(!orders.length)return `<div class="sellerEmptyState"><strong>No orders yet</strong><p>New orders for this shop will appear here.</p></div>`;
 return `<div class="sellerTableWrap"><table class="sellerTable"><thead><tr><th>Order</th><th>Item</th><th>Buyer</th><th>Total</th><th>Status</th></tr></thead><tbody>${orders.map(order=>`<tr><td><strong>${escapeHTML(order.id)}</strong><small>${new Date(order.createdAt).toLocaleDateString()}</small></td><td>${escapeHTML(order.productName)}<small>Qty ${order.quantity}</small></td><td>${escapeHTML(order.customerName||"Shopper")}</td><td>${money(order.total)}</td><td>${editable?`<select aria-label="Order status ${escapeHTML(order.id)}" onchange="updateSellerOrderStatus('${escapeHTML(order.id)}',this.value)">${["New","Confirmed","Preparing","Ready for pickup","Completed","Cancelled"].map(status=>`<option${order.status===status?" selected":""}>${status}</option>`).join("")}</select>`:`<span class="sellerStatus ${escapeHTML((order.status||"New").toLowerCase().replaceAll(" ","-"))}">${escapeHTML(order.status||"New")}</span>`}</td></tr>`).join("")}</tbody></table></div>`;
}
function renderSellerProducts(){
 const items=sellerProductsFor().slice().sort((a,b)=>a.name.localeCompare(b.name));
 return `${sellerPageHeading("Products", "Manage marketplace listings, prices and stock.", `<button class="primary sellerPageAction" type="button" onclick="renderSellerProductForm()">+ Add listing</button>`)}<div class="sellerWorkspaceNotice">Price and stock changes update this browser’s shopper catalog. Public listings require server-side moderation and inventory sync in production.</div>${items.length?`<div class="sellerTableWrap"><table class="sellerTable"><thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Listing</th><th></th></tr></thead><tbody>${items.map(product=>{const stock=getProductInventory(product.id).stock;return `<tr><td class="sellerProductCell"><img src="${product.image}" alt=""><span><strong>${escapeHTML(product.name)}</strong><small>ID ${product.id}</small></span></td><td>${escapeHTML(product.cat)}</td><td>${money(product.price)}</td><td>${stock}</td><td><span class="sellerStatus ${stock?"active":"out-of-stock"}">${stock?"Active":"Out of stock"}</span></td><td><button class="sellerTableAction" type="button" onclick="renderSellerProductForm(${product.id})">Edit</button></td></tr>`}).join("")}</tbody></table></div>`:`<div class="sellerEmptyState"><strong>No products listed</strong><p>Add your first item to the demo marketplace.</p><button class="primary" onclick="renderSellerProductForm()">Add listing</button></div>`}`;
}
function renderSellerOrders(){
 const orders=sellerOrdersFor().slice().sort((a,b)=>b.createdAt-a.createdAt);
 return `${sellerPageHeading("Orders", "Confirm, prepare and update buyer orders.")}<div class="sellerWorkspaceNotice">Order status changes are recorded locally. Payment capture, buyer notifications and delivery tracking need connected services.</div>${sellerOrderTableMarkup(orders)}`;
}
function renderSellerMessages(){
 const sellerChats=sellerChatsFor().slice().sort((a,b)=>b.updatedAt-a.updatedAt);
 if(!sellerChats.some(chat=>chat.id===activeSellerChatId))activeSellerChatId=sellerChats[0]?.id||null;
 const activeChat=sellerChats.find(chat=>chat.id===activeSellerChatId),product=activeChat&&products.find(item=>item.id===activeChat.productId);
 if(activeChat&&(isSellerChatSelected||!window.matchMedia("(max-width: 760px)").matches)){activeChat.messages.forEach(message=>{if(message.from==="buyer")message.read=true});saveChats()}
 const productOffer=product&&(offers[product.id]||[[product.shop,product.price]]).find(([seller])=>seller===activeChat.seller),chatPrice=activeChat?.price??productOffer?.[1]??product?.price;
 return `<div class="sellerInbox${isSellerChatSelected?" chatSelected":""}"><aside class="sellerInboxList">${sellerChats.length?sellerChats.map(chat=>`<button type="button" class="sellerInboxItem${activeChat?.id===chat.id?" active":""}" onclick="selectSellerChat('${escapeHTML(chat.id)}')"><strong>${escapeHTML(chat.seller)}</strong><small>${escapeHTML(products.find(item=>item.id===chat.productId)?.name||"Product enquiry")}</small><span>${chat.messages.length} messages${sellerUnreadCount(chat)?` · ${sellerUnreadCount(chat)} unread`:""}</span></button>`).join(""):`<p class="sellerInlineNote">No buyer conversations for this shop yet.</p>`}</aside><section class="sellerInboxThread messageThread">${activeChat?`<header class="messageThreadHeader"><span class="messageAvatar" aria-hidden="true">${escapeHTML((activeChat.buyerName||"Shopper").slice(0,1).toUpperCase())}</span><div><strong>${escapeHTML(activeChat.buyerName||"Shopper")}</strong><small>${escapeHTML(product?.name||"Product enquiry")}</small><small class="messagePresence">Buyer</small></div></header><div class="chatProductContext"><img src="${escapeHTML(product?.image||"")}" alt=""><span class="chatProductInfo"><small>ITEM IN THIS CHAT</small><strong>${escapeHTML(product?.name||"Product enquiry")}</strong><span>${escapeHTML(activeChat.seller)} · ${money(chatPrice||0)}</span></span></div><div class="messageHistory sellerInboxHistory" id="sellerMessageHistory">${activeChat.messages.map(message=>`<div class="messageRow ${message.from==="seller"?"buyerMessage":"sellerMessage"}"><div class="messageBubble">${escapeHTML(message.text)}<time>${new Date(message.time).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}${message.from==="seller"?`<span class="messageReceipt${message.read?" seen":""}" aria-label="${message.read?"Seen":"Sent"}">✓✓</span>`:""}</time></div></div>`).join("")}</div><form class="messageComposer sellerReplyForm" onsubmit="sendSellerReply(event)"><textarea id="sellerReplyInput" name="reply" rows="1" required maxlength="2000" placeholder="Write a reply" aria-label="Write a reply"></textarea><button class="primary" type="submit">Send</button></form><p class="messagesNote">Seller replies are saved locally; live delivery is not connected.</p>`:`<div class="sellerEmptyState"><strong>Select a conversation</strong><p>Buyer messages for this shop will appear here.</p></div>`}</section></div>`;
}
function renderSellerProfile(){
 const profile=getSellerProfile();
 return `${sellerPageHeading("Shop profile", "Keep your public shop details accurate and useful.")}<form class="sellerProfileForm" onsubmit="saveSellerProfile(event)"><label>Shop name<input value="${escapeHTML(activeSellerShop)}" readonly></label><label>Contact phone<input name="phone" type="tel" autocomplete="tel" value="${escapeHTML(profile.phone)}" placeholder="+256 7XX XXX XXX" required></label><label>Contact email<input name="email" type="email" autocomplete="email" value="${escapeHTML(profile.email)}" placeholder="shop@example.com"></label><label>Location in Mbale<input name="location" value="${escapeHTML(profile.location)}" required></label><label>Opening hours<input name="hours" value="${escapeHTML(profile.hours)}"></label><label class="sellerFormFull">Store description<textarea name="description" maxlength="500" required>${escapeHTML(profile.description)}</textarea></label><div class="sellerFormFull"><button class="primary" type="submit">Save shop profile</button></div></form><p class="sellerInlineNote">For production, profile edits should be versioned, moderated and audited on the server.</p>`;
}
function renderSellerPayments(){
 const orders=sellerOrdersFor(),total=orders.reduce((sum,order)=>sum+Number(order.total||0),0),settled=orders.filter(order=>order.paymentStatus==="Paid").reduce((sum,order)=>sum+Number(order.total||0),0);
 return `${sellerPageHeading("Payments & fees", "Review order value and settlement state.")}<div class="sellerMetricGrid sellerPaymentMetrics"><article><span>Recorded order value</span><strong>${money(total)}</strong><small>From local demo orders</small></article><article><span>Marked paid</span><strong>${money(settled)}</strong><small>Payment processor not connected</small></article><article><span>Marketplace fees</span><strong>Not configured</strong><small>No fee is charged in this demo</small></article></div><div class="sellerWorkspaceNotice"><strong>No real money moves here.</strong> Production payouts require a regulated payment provider, signed webhooks, reconciliation, seller KYC and an auditable ledger. Do not enter bank or mobile-money PIN details into this demo.</div>${sellerOrderTableMarkup(orders,false)}`;
}
function renderSellerVerification(){
 return `${sellerPageHeading("Verification", "Prepare your shop for safe marketplace selling.")}<div class="sellerWorkspaceNotice"><strong>Secure verification is not connected.</strong> Identity and business documents must be uploaded to a protected backend, never stored in browser storage.</div><ul class="sellerChecklist"><li><span>Shop contact details</span><b>Complete in Shop profile</b></li><li><span>Business registration</span><b>Not submitted</b></li><li><span>Owner identity check</span><b>Not submitted</b></li><li><span>Payout account verification</span><b>Not connected</b></li></ul><h3>Production safeguards</h3><p class="sellerInlineNote">Use authenticated seller accounts, role-based access per shop, encrypted document storage, explicit consent, manual review and an audit trail. No sensitive documents should be uploaded here.</p>`;
}
function renderSellerSupport(){
 return `${sellerPageHeading("Seller support", "Get help with shop setup, listings and order fulfilment.")}<div class="sellerSupportLinks"><a href="mailto:support@mbaleshopper.example?subject=Seller%20support">Email seller support <span>support@mbaleshopper.example</span></a><button type="button" onclick="showPolicy('terms')">Read seller terms</button><button type="button" onclick="showPolicy('privacy')">Read privacy information</button></div><section class="sellerOverviewSection"><h3>Before launch</h3><p class="sellerInlineNote">Set response-time expectations, return rules, prohibited items, complaint escalation and account recovery procedures. Add server-side moderation and an operational support queue.</p></section>`;
}
function renderSellerApplication(){
 return `${sellerPageHeading("Seller application", "Apply to list your business on Mbale Shopper.", `<button type="button" class="sellerTableAction" onclick="renderSellerCenter('overview')">Back to overview</button>`)}<form class="sellerProfileForm" onsubmit="submitSellerApplication(event)"><label>Business name<input name="business" required maxlength="120"></label><label>Contact phone<input name="phone" type="tel" required autocomplete="tel"></label><label>Business category<select name="category" required>${categories.map(category=>`<option value="${escapeHTML(category.value)}">${escapeHTML(category.label)}</option>`).join("")}</select></label><label>Location in Mbale<input name="location" required></label><label class="sellerFormFull">Business description<textarea name="description" required maxlength="500"></textarea></label><p class="sellerFormFull sellerInlineNote">This demo saves an application locally. Production onboarding needs identity checks, consent, server validation and a review workflow.</p><div class="sellerFormFull"><button class="primary" type="submit">Submit application</button></div></form>${sellerApplications.length?`<section class="sellerOverviewSection"><h3>Saved applications</h3><ul class="sellerAttentionList">${sellerApplications.map(application=>`<li><span>${escapeHTML(application.business)} · ${escapeHTML(application.location)}</span><b>${escapeHTML(application.status)}</b></li>`).join("")}</ul></section>`:""}`;
}
function renderSellerProductForm(productId=null){
 const product=productId?products.find(item=>item.id===Number(productId)):null;
 if(product&&product.shop!==activeSellerShop){toast("This listing belongs to another shop");return}
 const stock=product?getProductInventory(product.id).stock:"";
 el("sellerWorkspaceContent").innerHTML=`${sellerPageHeading(product?"Edit listing":"Add listing","Required product details are validated before saving.",`<button type="button" class="sellerTableAction" onclick="renderSellerCenter('products')">Back to listings</button>`)}<form class="sellerProfileForm" onsubmit="saveSellerListing(event,${product?.id||"null"})"><label>Product name<input name="name" required maxlength="140" value="${escapeHTML(product?.name||"")}"></label><label>Category<select name="category" required>${categories.map(category=>`<option value="${escapeHTML(category.value)}"${category.value===(product?.cat||categories[0].value)?" selected":""}>${escapeHTML(category.label)}</option>`).join("")}</select></label><label>Price (UGX)<input name="price" type="number" min="1" step="1" required value="${product?.price||""}"></label><label>Was price (UGX)<input name="oldPrice" type="number" min="1" step="1" value="${product?.old||""}"></label><label>Stock quantity<input name="stock" type="number" min="0" step="1" required value="${stock}"></label><label>Product photo URL<input name="image" type="url" value="${escapeHTML(product?.image||"")}" placeholder="https://..."></label><label class="sellerFormFull">Description<textarea name="description" maxlength="600" required>${escapeHTML(product?.desc||"")}</textarea></label><div class="sellerFormFull sellerFormActions"><button class="primary" type="submit">Save listing</button><button class="sellerTableAction" type="button" onclick="renderSellerCenter('products')">Cancel</button></div></form>`;
}
function saveSellerListing(event,productId=null){
 event.preventDefault();
 const values=Object.fromEntries(new FormData(event.currentTarget).entries()),price=Number(values.price),old=Number(values.oldPrice)||price,stock=Number(values.stock);
 if(!Number.isFinite(price)||price<1||!Number.isInteger(stock)||stock<0){toast("Enter a valid price and whole-number stock quantity");return}
 if(old<price){toast("Was price should be equal to or higher than the current price");return}
 let product=productId?products.find(item=>item.id===Number(productId)):null;
 if(product&&product.shop!==activeSellerShop){toast("This listing belongs to another shop");return}
 if(/[<>"\u0000-\u001f]/.test(values.name)||/[<>\u0000-\u001f]/.test(values.description)){toast("Product name and description cannot contain markup");return}
 let image=values.image.trim()||(product?.image)||img(categories.find(category=>category.value===values.category)?.image||categories[0].image);
 try{const parsedImage=new URL(image);if(!["https:","http:"].includes(parsedImage.protocol))throw new Error("Unsupported image URL");image=parsedImage.href}catch{toast("Use a valid HTTP or HTTPS photo URL");return}
 const changes={name:values.name.trim(),cat:values.category,price,old,desc:values.description.trim(),image};
 if(!product){const id=Math.max(...products.map(item=>item.id))+1;product={id,...changes,shop:activeSellerShop,rating:0,reviews:0,tag:"NEW",delivery:"Pickup / seller delivery"};products.push(product);sellerListings.push(product)}else{Object.assign(product,changes);sellerProductOverrides[product.id]=changes}
 productGalleryImages.set(product.id,[product.image]);
 const previous=getProductInventory(product.id);sellerInventory[product.id]={stock,sold:previous.sold||0};saveSellerData();
 renderCatalogFilters();initSellerFilter();renderCatalog();renderDeals();renderRecommendations();renderSellerSection();
 toast("Listing saved to the demo marketplace");
}
function saveSellerProfile(event){
 event.preventDefault();
 const profile=Object.fromEntries(new FormData(event.currentTarget).entries()),phone=profile.phone.replace(/[\s()-]/g,"");
 if(!/^\+?\d{9,15}$/.test(phone)){toast("Enter a valid contact phone number");return}
 profile.phone=phone;sellerProfiles[activeSellerShop]=profile;saveSellerData();renderSellerSection();toast("Shop profile saved in this browser");
}
function submitSellerApplication(event){
 event.preventDefault();
 const application={...Object.fromEntries(new FormData(event.currentTarget).entries()),id:`APP-${Date.now().toString(36).toUpperCase()}`,status:"Received · demo only",submittedAt:new Date().toISOString()};
 sellerApplications.unshift(application);saveSellerData();renderSellerSection();toast("Application saved locally");
}
function updateSellerOrderStatus(orderId,status){
 const order=sellerOrders.find(item=>item.id===orderId&&item.seller===activeSellerShop);if(!order)return;
 order.status=status;order.updatedAt=new Date().toISOString();saveSellerData();renderSellerSection();toast(`Order ${orderId} updated`);
}
function selectSellerChat(chatId){
 activeSellerChatId=chatId;isSellerChatSelected=true;const chat=chats.find(item=>item.id===chatId);
 if(chat)chat.messages.forEach(message=>{if(message.from==="buyer")message.read=true});
 if(chat)saveChats();renderSellerCenter("messages");
}
function showSellerInboxList(){isSellerChatSelected=false;renderSellerCenter("messages")}
function sendSellerReply(event){
 event.preventDefault();
 const chat=chats.find(item=>item.id===activeSellerChatId),input=event.currentTarget.elements.reply,text=input.value.trim();
 if(!chat||!text)return;
 chat.messages.push({text,from:"seller",time:Date.now(),read:false});chat.updatedAt=Date.now();saveChats();renderSellerCenter("messages");toast("Reply saved in this demo");
}
function readPosLocal(key,fallback){
 try{const value=localStorage.getItem(key);return value?JSON.parse(value):fallback}catch(error){console.error(`Unable to read ${key}`,error);return fallback}
}
function writePosLocal(key,value){
 try{localStorage.setItem(key,JSON.stringify(value));return true}catch(error){console.error(`Unable to save ${key}`,error);return false}
}
const industryTemplates=[
 {id:"Grocery",label:"Grocery",categories:["Grocery"]},
 {id:"Pharmacy",label:"Pharmacy",categories:["Health & Pharmacy","Beauty & Fragrance"]},
 {id:"Cafe",label:"Cafe",categories:["Grocery","Home"]},
 {id:"Hardware",label:"Hardware",categories:["Home","Automotive"]}
];
let activePosShop=localStorage.getItem("mbalePosShop")||shops[0]?.name||products[0].shop;
let activeManagedShop=localStorage.getItem("mbaleManagedShop")||activePosShop;
let posSales=readPosLocal("mbalePosSales",[]),invoiceRecords=readPosLocal("mbaleSupplierInvoices",[]);
let onlineStoreOrders=readPosLocal("mbaleOnlineStoreOrders",[]),publicShopCart=[],publicShopBusiness=null,publicShopForm={customerName:"",phone:"",fulfillment:"Pickup",address:""};
let posAuditEntries=readPosLocal("mbalePosAudit",[]),managedCostOverrides=readPosLocal("mbaleManagedCosts",{});
let businessIndustries=readPosLocal("mbaleBusinessIndustries",{});
let advisorSuggestions=readPosLocal("mbaleAdvisorSuggestions",{});
let dismissedAdvice=readPosLocal("mbaleDismissedAdvice",{});
let ownerPosSection="home",managedStaffSection="overview",posSearchQuery="",posActiveCategory="all",parkedPosSales=readPosLocal("mbaleParkedSales",[]);
let posCart=[],posPaymentMode="cash",posForm={customerName:"",phone:"",cashReceived:"",splitCash:"",splitTransfer:"",creditDeposit:""};
let posDatabasePromise=null,posStorageWarningShown=false,posScanStream=null,posScanTimer=null,activeInvoiceObjectURL=null,deferredInstallPrompt=null;
function getPosBusinessNames(){return [...new Set([...shops.map(shop=>shop.name),...products.map(product=>product.shop)])].sort((a,b)=>a.localeCompare(b))}
function posBusinessProducts(shop=activePosShop){return products.filter(product=>product.shop===shop)}
function getManagedCost(productId,shop=activeManagedShop){
 const product=products.find(item=>item.id===Number(productId));
 return Number(managedCostOverrides[`${shop}::${productId}`]??product?.buyingPrice??0);
}
function openPosDatabase(){
 if(!("indexedDB" in window))return Promise.reject(new Error("IndexedDB is unavailable in this browser"));
 if(!posDatabasePromise)posDatabasePromise=new Promise((resolve,reject)=>{
  const request=indexedDB.open("mbale-shopper-offline",2);
  request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains("sales"))db.createObjectStore("sales",{keyPath:"id"});if(!db.objectStoreNames.contains("invoices"))db.createObjectStore("invoices",{keyPath:"id"});if(!db.objectStoreNames.contains("onlineOrders"))db.createObjectStore("onlineOrders",{keyPath:"id"})};
  request.onsuccess=()=>resolve(request.result);
  request.onerror=()=>reject(request.error||new Error("Could not open the offline database"));
 });
 return posDatabasePromise;
}
function posDbRequest(storeName,operation,record){
 return openPosDatabase().then(db=>new Promise((resolve,reject)=>{
  const transaction=db.transaction(storeName,operation==="getAll"?"readonly":"readwrite"),store=transaction.objectStore(storeName);
  const request=operation==="getAll"?store.getAll():store.put(record);
  let result;
  request.onsuccess=()=>{result=request.result;if(operation==="getAll")resolve(result)};
  request.onerror=()=>reject(request.error||new Error(`Could not ${operation} ${storeName}`));
  transaction.oncomplete=()=>{if(operation!=="getAll")resolve(result)};
  transaction.onerror=()=>reject(transaction.error||new Error(`Could not finish ${storeName} transaction`));
  transaction.onabort=()=>reject(transaction.error||new Error(`${storeName} transaction was cancelled`));
 }));
}
function mergePosRecords(primary,secondary){
 const records=new Map();
 [...primary,...secondary].forEach(record=>{if(record?.id)records.set(record.id,{...records.get(record.id),...record})});
 return [...records.values()].sort((a,b)=>Number(b.createdAt||0)-Number(a.createdAt||0));
}
async function hydratePosData(){
 try{
  const [storedSales,storedInvoices,storedOrders]=await Promise.all([posDbRequest("sales","getAll"),posDbRequest("invoices","getAll"),posDbRequest("onlineOrders","getAll")]);
  posSales=mergePosRecords(storedSales,readPosLocal("mbalePosSales",[]));
  invoiceRecords=mergePosRecords(storedInvoices,readPosLocal("mbaleSupplierInvoices",[]));
  onlineStoreOrders=mergePosRecords(storedOrders,readPosLocal("mbaleOnlineStoreOrders",[]));
  writePosLocal("mbalePosSales",posSales);
  writePosLocal("mbaleSupplierInvoices",invoiceRecords.map(({file,...metadata})=>metadata));
  writePosLocal("mbaleOnlineStoreOrders",onlineStoreOrders);
  updateWorkspaceConnection();
 }catch(error){
  console.error("Offline records could not be loaded from IndexedDB",error);
  posSales=readPosLocal("mbalePosSales",[]);
  invoiceRecords=readPosLocal("mbaleSupplierInvoices",[]);
  onlineStoreOrders=readPosLocal("mbaleOnlineStoreOrders",[]);
  if(!posStorageWarningShown){toast("Offline database unavailable; using browser storage where possible");posStorageWarningShown=true}
  updateWorkspaceConnection();
 }
}
async function storePosRecord(storeName,record){
 try{
  await posDbRequest(storeName,"put",record);
  return "indexedDB";
 }catch(error){
  console.error(`Could not persist ${storeName} record to IndexedDB`,error);
  if(storeName==="sales"||storeName==="onlineOrders"){
   const key=storeName==="sales"?"mbalePosSales":"mbaleOnlineStoreOrders",records=mergePosRecords(readPosLocal(key,[]),[record]);
   if(writePosLocal(key,records)){
     if(!posStorageWarningShown){toast(`${storeName==="sales"?"Sale":"Online order"} saved on this device using browser-storage fallback`);posStorageWarningShown=true}
    return "localStorage";
   }
  }
  throw error;
 }
}
function persistPosMetadata(){
 const salesSaved=writePosLocal("mbalePosSales",posSales);
 const invoicesSaved=writePosLocal("mbaleSupplierInvoices",invoiceRecords.map(({file,...metadata})=>metadata));
 const ordersSaved=writePosLocal("mbaleOnlineStoreOrders",onlineStoreOrders);
 if(!salesSaved||!invoicesSaved||!ordersSaved)toast("Some demo metadata could not be saved in browser storage");
}
function getBusinessSales(shop=activePosShop){return posSales.filter(sale=>sale.business===shop&&sale.source!=="online")}
function getBusinessOnlineOrders(shop=activePosShop){return onlineStoreOrders.filter(order=>order.business===shop)}
function currentPosTotal(){return posCart.reduce((sum,item)=>{const product=products.find(entry=>entry.id===item.productId);return sum+Number(item.unitPrice??product?.price??0)*item.quantity},0)}
function currentPosStock(productId){return Number(getProductInventory(productId).stock||0)}
function pendingPosSyncCount(){return [...posSales,...onlineStoreOrders].filter(record=>record.syncStatus==="pending_backend").length}
function currentPosStatus(){
 const pending=pendingPosSyncCount();
 return navigator.onLine?`Online · ${pending} pending sync`:`Offline · ${pending} pending locally`;
}
function workspaceHeader(title,shop,onChange,staff=false,mobileNav=false){
 return `<header class="workspaceHeader">${mobileNav?`<button class="workspaceNavToggle" type="button" aria-label="Open POS navigation" aria-controls="ownerPosNav" aria-expanded="false" onclick="toggleOwnerPosNav()">☰</button>`:""}<div class="workspaceBrand"><small>${staff?"MANAGED OPERATIONS":"MBALE SHOPPER"}</small><h1>${title}</h1></div><label class="workspaceHeaderBusiness"><span>${staff?"Business":"Demo shop"}</span><select aria-label="${staff?"Select managed business":"Select POS business"}" onchange="${onChange}(this.value)">${getPosBusinessNames().map(name=>`<option value="${escapeHTML(name)}"${name===shop?" selected":""}>${escapeHTML(name)}</option>`).join("")}</select></label><span class="workspaceStatus${navigator.onLine?"":" offline"}" id="workspaceConnectionStatus" title="Local records are not automatically synchronized">${currentPosStatus()}</span>${deferredInstallPrompt?`<button class="workspaceButton secondary" type="button" onclick="installMbaleApp()">Install</button>`:""}<button class="workspaceClose" type="button" aria-label="Close workspace" onclick="stopPosScanner();closeModal()">×</button></header>`;
}
let mobileCheckoutOpen=false;
function toggleOwnerPosNav(force){
 const screen=el("modal")?.querySelector(".ownerPosWorkspace");if(!screen)return;
 const open=force??!screen.classList.contains("ownerPosNavOpen");screen.classList.toggle("ownerPosNavOpen",open);
 const button=screen.querySelector(".workspaceNavToggle");if(button){button.setAttribute("aria-expanded",String(open));button.setAttribute("aria-label",open?"Close POS navigation":"Open POS navigation")}
}
function toggleMobileCheckout(force){
 const screen=el("modal")?.querySelector(".ownerPosWorkspace");if(!screen)return;
 mobileCheckoutOpen=force??!mobileCheckoutOpen;screen.classList.toggle("mobileCheckoutOpen",mobileCheckoutOpen);
 const button=screen.querySelector(".posMobileCartBar");if(button)button.setAttribute("aria-expanded",String(mobileCheckoutOpen));
}
function showOwnerPOS(section="home"){
 if(!getPosBusinessNames().includes(activePosShop))activePosShop=getPosBusinessNames()[0];
 ownerPosSection=section;mobileCheckoutOpen=false;
 el("modalWrap").classList.add("posFullscreen");
 el("modal").innerHTML=`<div class="workspaceScreen ownerPosWorkspace" role="dialog" aria-modal="true" aria-label="Owner point of sale">${workspaceHeader("Owner POS",activePosShop,"switchPosBusiness",false,true)}<button class="workspaceNavBackdrop" type="button" aria-label="Close POS navigation" onclick="toggleOwnerPosNav(false)"></button><nav class="workspaceTabs" id="ownerPosNav" aria-label="POS sections">${[["home","Home"],["sale","New sale"],["parked","Parked sales"],["sales","Sales"],["online","Online orders"],["credit","Credit ledger"],["invoice","Supplier bills"],["advisor","Weekly advice"]].map(([key,label])=>`<button class="workspaceTab${ownerPosSection===key?" active":""}" type="button" onclick="showOwnerPOS('${key}')">${label}${key==="online"&&getBusinessOnlineOrders(activePosShop).some(order=>order.status==="New")?` <span class="workspaceStatusPill warning">${getBusinessOnlineOrders(activePosShop).filter(order=>order.status==="New").length}</span>`:key==="parked"&&parkedPosSales.filter(sale=>sale.business===activePosShop).length?` <span class="workspaceStatusPill">${parkedPosSales.filter(sale=>sale.business===activePosShop).length}</span>`:""}</button>`).join("")}<button class="workspaceTab" type="button" onclick="openShopPreview(activePosShop)">Store preview ↗</button></nav><main class="workspaceBody" id="ownerPosBody"></main><div class="posScanner" id="posScanner" hidden><div class="posScannerCard"><video id="posScannerVideo" autoplay playsinline></video><p class="workspaceHint">Point the camera at a product barcode.</p><button class="workspaceButton secondary" type="button" onclick="stopPosScanner()">Close camera</button></div></div></div>`;
 el("modalWrap").classList.add("show");
 renderOwnerPosSection();
 hydratePosData().then(()=>{if(el("ownerPosBody"))renderOwnerPosSection()});
 if(section==="sale")focusPosSearch();
}
function switchPosBusiness(shop){
 if(posCart.length&&shop!==activePosShop&&!confirm("Switching businesses clears the current basket. Continue?")){renderOwnerPOS(ownerPosSection);return}
 if(shop!==activePosShop){posCart=[];posPaymentMode="cash";posForm={customerName:"",phone:"",cashReceived:"",splitCash:"",splitTransfer:"",creditDeposit:""}}
 activePosShop=shop;localStorage.setItem("mbalePosShop",shop);renderOwnerPOS(ownerPosSection);
}
function renderOwnerPosSection(){
 const body=el("ownerPosBody");if(!body)return;
 const renderers={home:renderOwnerDashboard,sale:renderPosSale,parked:renderParkedPosSales,sales:renderPosSales,online:renderPosOnlineOrders,credit:renderPosCredit,invoice:renderPosInvoices,advisor:renderOwnerAdvice};
 body.innerHTML=(renderers[ownerPosSection]||renderPosSale)();
 if(ownerPosSection==="sale"){
  const count=posCart.reduce((sum,item)=>sum+item.quantity,0),total=currentPosTotal();
  body.querySelector(".posCurrentSale")?.setAttribute("id","posCurrentSale");
  body.querySelector(".posCheckoutHead")?.insertAdjacentHTML("beforeend",`<button class="posCheckoutClose" type="button" aria-label="Close sale checkout" onclick="toggleMobileCheckout(false)">×</button>`);
  body.insertAdjacentHTML("beforeend",`<button class="posCheckoutBackdrop" type="button" aria-label="Close sale checkout" onclick="toggleMobileCheckout(false)"></button><button class="posMobileCartBar" type="button" aria-controls="posCurrentSale" aria-expanded="${mobileCheckoutOpen}" onclick="toggleMobileCheckout(true)"><span><small>Current sale · ${count} item${count===1?"":"s"}</small><strong>${money(total)}</strong></span><span class="posMobileCartAction">Review sale <b aria-hidden="true">↑</b></span></button>`);
 }
 if(ownerPosSection==="sale")focusPosSearch();
}
function focusPosSearch(){
 if(window.matchMedia?.("(max-width: 620px)").matches)return;
 const focus=()=>el("ownerPosBody")?.querySelector(".posSearchInput")?.focus();
 if(typeof requestAnimationFrame==="function")requestAnimationFrame(focus);else setTimeout(focus,0);
}
function renderOwnerDashboard(){
 const sales=getBusinessSales(activePosShop).filter(sale=>sale.status!=="Voided"),today=new Date().toDateString();
 const todaySales=sales.filter(sale=>new Date(sale.createdAt).toDateString()===today),online=getBusinessOnlineOrders(activePosShop).filter(order=>order.status==="New");
 const debts=sales.filter(sale=>Number(sale.due)>0),lowStock=posBusinessProducts().filter(product=>currentPosStock(product.id)<=5);
 const tips=(advisorSuggestions[activePosShop]||[]).filter(tip=>!(dismissedAdvice[activePosShop]||[]).includes(tip.id));
 const recent=[...online.map(order=>({...order,kind:"Online"})),...todaySales.map(sale=>({...sale,kind:"POS"}))].sort((a,b)=>b.createdAt-a.createdAt).slice(0,5);
 return `<div class="workspaceNotice"><strong>Device-local demo.</strong> ${currentPosStatus()}. No records are sent to a server, and reconnecting does not sync them.</div><div class="workspacePageHead posDashboardHead"><div><h2>Today at ${escapeHTML(activePosShop)}</h2><p>Your shop at a glance. Start a sale or review what needs attention.</p></div><button class="workspaceButton primary" type="button" onclick="showOwnerPOS('sale')">＋ Start a sale</button></div><div class="posMetricGrid posDashboardMetrics"><article class="posMetric"><span>Today's POS sales</span><strong>${money(todaySales.reduce((sum,sale)=>sum+sale.total,0))}</strong><small>${todaySales.length} transactions · device-local</small></article><article class="posMetric"><span>Online orders to pack</span><strong>${online.length}</strong><small>Notifications are not connected</small></article><article class="posMetric"><span>Customer credit outstanding</span><strong>${money(debts.reduce((sum,sale)=>sum+Number(sale.due),0))}</strong><small>${debts.length} local credit sales</small></article><article class="posMetric"><span>Products low in stock</span><strong>${lowStock.length}</strong><small>At or below 5 units</small></article></div><div class="posDashboardGrid"><section class="workspaceCard"><div class="workspaceSectionTitle"><h3>Recent activity</h3><button class="workspaceButton secondary" type="button" onclick="showOwnerPOS('online')">View online orders</button></div><div class="workspaceList">${recent.length?recent.map(record=>`<article class="workspaceListItem"><div><strong>${escapeHTML(record.kind)} · ${escapeHTML(record.id)} · ${money(record.total)}</strong><p>${escapeHTML(record.customerName||"Walk-in customer")} · ${record.kind==="Online"?escapeHTML(record.status):record.paymentStatus==="Awaiting verification"?"Payment awaiting verification":"POS sale saved locally"}</p><small>${new Date(record.createdAt).toLocaleString()}</small></div></article>`).join(""):`<div class="posEmpty">No sales or online orders yet.</div>`}</div></section><section class="workspaceCard"><div class="workspaceSectionTitle"><h3>Needs attention</h3><button class="workspaceButton secondary" type="button" onclick="showOwnerPOS('credit')">Credit ledger</button></div><div class="workspaceList">${online.slice(0,4).map(order=>`<article class="workspaceListItem"><div><strong>Pack order ${escapeHTML(order.id)}</strong><p>${escapeHTML(order.customerName)} · ${money(order.total)}</p></div><span class="workspaceStatusPill warning">New</span></article>`).join("")}${lowStock.slice(0,4).map(product=>`<article class="workspaceListItem"><div><strong>${escapeHTML(product.name)}</strong><p>${currentPosStock(product.id)} left · restock when convenient</p></div><span class="workspaceStatusPill${currentPosStock(product.id)===0?" danger":"warning"}">${currentPosStock(product.id)===0?"Out":"Low stock"}</span></article>`).join("")}${!online.length&&!lowStock.length?`<div class="posEmpty">Nothing needs attention right now.</div>`:""}</div></section></div>${tips.length?`<section class="workspaceCard posDashboardAdvice"><div class="workspaceSectionTitle"><h3>Weekly advice</h3><button class="workspaceButton secondary" type="button" onclick="showOwnerPOS('advisor')">View all</button></div>${tips.slice(0,2).map(tip=>`<article class="workspaceListItem"><div><strong>${escapeHTML(tip.title)}</strong><p>${escapeHTML(tip.message)}</p></div><button class="workspaceButton secondary" type="button" onclick="dismissAdvice('${escapeHTML(tip.id)}')">Mark read</button></article>`).join("")}</section>`:""}`;
}
function renderPosSale(){
 const items=posBusinessProducts().filter(product=>(posActiveCategory==="all"||product.cat===posActiveCategory)&&(!posSearchQuery||`${product.name} ${product.cat} ${product.barcode||""}`.toLowerCase().includes(posSearchQuery.toLowerCase())));
 const categories=["all",...new Set(posBusinessProducts().map(product=>product.cat))];
 const total=currentPosTotal(),cashValue=Number(posForm.cashReceived||total),change=Math.max(0,cashValue-total);
 const cartMarkup=posCart.length?posCart.map((item,index)=>{const product=products.find(entry=>entry.id===item.productId),unitPrice=Number(item.unitPrice??product?.price);if(!product)return "";return `<div class="posCartRow"><strong title="${escapeHTML(item.name||product.name)}">${escapeHTML(item.name||product.name)}</strong><small>${money(unitPrice)} each</small><span class="posCartRowTotal">${money(unitPrice*item.quantity)}</span><div class="posQuantity"><button type="button" aria-label="Remove one ${escapeHTML(product.name)}" onclick="changePosQuantity(${index},-1)">−</button><span>${item.quantity}</span><button type="button" aria-label="Add one ${escapeHTML(product.name)}" onclick="changePosQuantity(${index},1)">+</button></div><button class="workspaceButton secondary posRemoveItemButton" type="button" aria-label="Remove ${escapeHTML(product.name)} from sale" title="Remove item" onclick="removePosItem(${index})">×</button></div>`}).join(""):`<div class="posEmpty posCartEmpty"><span class="posCartEmptyIcon" aria-hidden="true">＋</span><strong>Nothing in this sale yet</strong><span>Choose a product to get started.</span></div>`;
 let paymentFields="";
 if(posPaymentMode==="cash")paymentFields=`<label class="full">Cash received (UGX)<input type="number" min="${total}" step="1" value="${escapeHTML(posForm.cashReceived||String(total))}" oninput="updatePosField('cashReceived',this.value)"></label>`;
 if(posPaymentMode==="split")paymentFields=`<label>Cash (UGX)<input type="number" min="0" step="1" value="${escapeHTML(posForm.splitCash)}" oninput="updatePosField('splitCash',this.value)"></label><label>Transfer/card (UGX)<input type="number" min="0" step="1" value="${escapeHTML(posForm.splitTransfer)}" oninput="updatePosField('splitTransfer',this.value)"></label>`;
 if(posPaymentMode==="credit")paymentFields=`<label class="full">Cash deposit paid now (UGX)<input type="number" min="0" max="${total}" step="1" value="${escapeHTML(posForm.creditDeposit)}" oninput="updatePosField('creditDeposit',this.value)"></label><label>Customer name<input value="${escapeHTML(posForm.customerName)}" oninput="updatePosField('customerName',this.value)" autocomplete="name"></label><label>Phone number<input type="tel" value="${escapeHTML(posForm.phone)}" oninput="updatePosField('phone',this.value)" autocomplete="tel"></label>`;
 return `<div class="workspaceNotice"><strong>Frontend prototype.</strong> Transactions are saved on this device only. Transfer/card entries are recorded but are not verified; no server sync or payment processing is active.</div><div class="posSaleLayout"><section class="posCatalogPanel"><div class="posCatalogToolbar"><input class="posSearchInput" type="search" aria-label="Search POS products" placeholder="Search product or scan barcode (Enter to add)" value="${escapeHTML(posSearchQuery)}" oninput="updatePosSearch(this.value)" onkeydown="handlePosSearchKeydown(event)" autocomplete="off"><button class="workspaceButton secondary" type="button" onclick="scanPosBarcode()">Camera scan</button></div><div class="posCategoryRail">${categories.map(category=>`<button class="posCategoryButton${posActiveCategory===category?" active":""}" type="button" onclick="setPosCategory('${escapeHTML(category)}')">${category==="all"?"All":escapeHTML(category)}</button>`).join("")}</div><div class="posProductGrid">${items.length?items.map(product=>{const stock=currentPosStock(product.id),disabled=stock<1||Number(product.price)<=0;return `<button class="posProductCard" type="button" ${disabled?"disabled":""} onclick="addPosItem(${product.id})" aria-label="Add ${escapeHTML(product.name)} to basket"><img src="${escapeHTML(product.image)}" alt="" loading="lazy"><span class="posProductCopy"><strong>${escapeHTML(product.name)}</strong><span>${Number(product.price)>0?money(product.price):"Price not set"}</span><small>${stock>0?`${stock} in stock`:stock===0?"Out of stock":"Stock unavailable"}</small></span></button>`}).join(""):`<div class="posEmpty">No matching products for this business.</div>`}</div></section><aside class="posCheckoutPanel posCurrentSale"><div class="posCheckoutHead"><div class="posCheckoutTitle"><span>CHECKOUT</span><h2>Current sale</h2></div><span class="posItemCount"><strong>${posCart.reduce((sum,item)=>sum+item.quantity,0)}</strong> items</span></div><div class="posCartRows">${cartMarkup}</div><div class="posTotalRow posSaleTotal"><span>Total to collect</span><strong>${money(total)}</strong></div><div class="posPaymentModes" role="group" aria-label="Payment method">${[["cash","Cash"],["transfer","Transfer / card"],["split","Split"],["credit","Credit"]].map(([key,label])=>`<button class="posPaymentMode${posPaymentMode===key?" active":""}" type="button" onclick="setPosPaymentMode('${key}')">${label}</button>`).join("")}</div>${posPaymentMode==="transfer"?`<div class="posPaymentWarning"><strong>Awaiting verification</strong><span>Record the payment only; this demo cannot confirm receipt.</span></div>`:""}${posPaymentMode==="split"?`<div class="posPaymentWarning"><strong>Transfer/card amount is unverified</strong><span>Cash can be counted locally; card/transfer must be checked separately.</span></div>`:""}<div class="posCheckoutFields">${paymentFields}</div>${posPaymentMode==="cash"&&total?`<div class="posChangeDue">Change: ${money(change)}</div>`:""}${posPaymentMode==="credit"&&total?`<div class="posChangeDue">Balance due: ${money(Math.max(0,total-Number(posForm.creditDeposit||0)))}</div>`:""}${posCart.length?`<div class="posSaleActions"><button class="workspaceButton secondary" type="button" onclick="parkPosSale()">Park sale</button><button class="workspaceButton secondary" type="button" onclick="clearPosBasket()">Clear basket</button></div>`:""}<button class="posCompleteButton" type="button" onclick="completePosSale()" ${!posCart.length?"disabled":""}>Complete sale · ${money(total)}</button><p class="posKeyboardHint"><kbd>F2</kbd> search · <kbd>F4</kbd> payment · <kbd>Ctrl</kbd>+<kbd>Enter</kbd> finish</p></aside></div>`;
}
function renderParkedPosSales(){
 const parked=parkedPosSales.filter(sale=>sale.business===activePosShop).sort((a,b)=>b.parkedAt-a.parkedAt);
 return `<div class="workspacePageHead"><div><h2>Parked sales</h2><p>Resume an unfinished basket on this device. These are not synced.</p></div><button class="workspaceButton primary" type="button" onclick="showOwnerPOS('sale')">New sale</button></div><div class="workspaceList">${parked.length?parked.map(sale=>`<article class="workspaceListItem"><div><strong>${sale.lines.reduce((sum,line)=>sum+line.quantity,0)} items · ${money(sale.total)}</strong><p>${sale.lines.map(line=>`${escapeHTML(line.name)} × ${line.quantity}`).join(", ")}<br>${sale.customerName?`For ${escapeHTML(sale.customerName)} · `:""}${new Date(sale.parkedAt).toLocaleString()}</p></div><div class="posParkedActions"><button class="workspaceButton primary" type="button" onclick="resumeParkedPosSale('${escapeHTML(sale.id)}')">Resume</button><button class="workspaceButton secondary" type="button" onclick="deleteParkedPosSale('${escapeHTML(sale.id)}')">Delete</button></div></article>`).join(""):`<div class="posEmpty">No parked sales for this shop.</div>`}</div>`;
}
function saveParkedPosSales(){
 if(!writePosLocal("mbaleParkedSales",parkedPosSales)){toast("Parked sale could not be saved in this browser");return false}
 return true;
}
function parkPosSale(){
 if(!posCart.length){toast("Add products before parking a sale");return}
 const sale={id:`PARK-${Date.now().toString(36).toUpperCase()}`,business:activePosShop,parkedAt:Date.now(),paymentMode:posPaymentMode,form:{...posForm},lines:posCart.map(item=>{const product=products.find(entry=>entry.id===item.productId);return {productId:item.productId,name:item.name||product?.name||"Product",quantity:item.quantity,unitPrice:Number(item.unitPrice??product?.price??0)}}),total:currentPosTotal()};
 parkedPosSales=[sale,...parkedPosSales];
 if(!saveParkedPosSales()){parkedPosSales=parkedPosSales.filter(item=>item.id!==sale.id);return}
 posCart=[];posPaymentMode="cash";posForm={customerName:"",phone:"",cashReceived:"",splitCash:"",splitTransfer:"",creditDeposit:""};
 toast("Sale parked on this device");showOwnerPOS("parked");
}
function resumeParkedPosSale(saleId){
 const sale=parkedPosSales.find(item=>item.id===saleId&&item.business===activePosShop);if(!sale)return;
 if(posCart.length&&!confirm("Park the current basket and resume this sale?"))return;
 if(posCart.length){
  const current={id:`PARK-${Date.now().toString(36).toUpperCase()}`,business:activePosShop,parkedAt:Date.now(),paymentMode:posPaymentMode,form:{...posForm},lines:posCart.map(item=>{const product=products.find(entry=>entry.id===item.productId);return {productId:item.productId,name:item.name||product?.name||"Product",quantity:item.quantity,unitPrice:Number(item.unitPrice??product?.price??0)}}),total:currentPosTotal()};
  parkedPosSales.unshift(current);
 }
 posCart=sale.lines.map(line=>({productId:line.productId,name:line.name,quantity:line.quantity,unitPrice:line.unitPrice}));
 posPaymentMode=sale.paymentMode||"cash";posForm={customerName:"",phone:"",cashReceived:"",splitCash:"",splitTransfer:"",creditDeposit:"",...sale.form};
 parkedPosSales=parkedPosSales.filter(item=>item.id!==saleId);
 if(!saveParkedPosSales()){parkedPosSales.push(sale);return}
 showOwnerPOS("sale");
}
function deleteParkedPosSale(saleId){
 const existing=parkedPosSales.find(sale=>sale.id===saleId&&sale.business===activePosShop);if(!existing)return;
 if(!confirm("Delete this parked basket?"))return;
 parkedPosSales=parkedPosSales.filter(sale=>sale.id!==saleId);
 if(!saveParkedPosSales()){parkedPosSales.push(existing);return}
 renderOwnerPosSection();
}
function handlePosSearchKeydown(event){
 if(event.key!=="Enter")return;
 event.preventDefault();
 const query=event.currentTarget.value.trim().toLowerCase();if(!query)return;
 const matches=posBusinessProducts().filter(product=>String(product.barcode||"").toLowerCase()===query);
 const exact=matches[0]||posBusinessProducts().find(product=>product.name.trim().toLowerCase()===query);
 if(exact){addPosItem(exact.id);posSearchQuery="";renderOwnerPosSection();focusPosSearch();return}
 const visible=posBusinessProducts().filter(product=>(posActiveCategory==="all"||product.cat===posActiveCategory)&&`${product.name} ${product.cat} ${product.barcode||""}`.toLowerCase().includes(query)&&currentPosStock(product.id)>0);
 if(visible.length===1){addPosItem(visible[0].id);posSearchQuery="";renderOwnerPosSection();focusPosSearch();return}
 toast(visible.length?"More than one product matches; narrow the search":"No available product matches that search");
}
function handlePosHotkeys(event){
 if(!el("modalWrap")?.classList.contains("posFullscreen"))return;
 if(event.key==="Escape"){
  const screen=el("modal")?.querySelector(".ownerPosWorkspace");
  if(screen?.classList.contains("mobileCheckoutOpen")){toggleMobileCheckout(false);event.preventDefault();return}
  if(screen?.classList.contains("ownerPosNavOpen")){toggleOwnerPosNav(false);event.preventDefault();return}
 }
 const target=event.target,editable=target instanceof Element&&(target.matches("input,textarea,select")||target.isContentEditable);
 if(event.key==="F2"){event.preventDefault();if(ownerPosSection!=="sale")showOwnerPOS("sale");else focusPosSearch();return}
 if(event.key==="F4"&&!editable&&ownerPosSection==="sale"){
  event.preventDefault();const modes=["cash","transfer","split","credit"],next=(modes.indexOf(posPaymentMode)+1)%modes.length;setPosPaymentMode(modes[next]);return;
 }
 if(event.key==="Enter"&&event.ctrlKey&&ownerPosSection==="sale"){event.preventDefault();completePosSale()}
}
window.addEventListener("keydown",handlePosHotkeys);
function updatePosSearch(value){
 posSearchQuery=value;renderOwnerPosSection();
 const input=el("ownerPosBody")?.querySelector('input[type="search"]');
 if(input){input.focus();input.setSelectionRange(value.length,value.length)}
}
function setPosCategory(category){posActiveCategory=category;renderOwnerPosSection()}
function updatePosField(key,value){
 posForm[key]=value;
 const notice=el("ownerPosBody")?.querySelector(".posChangeDue");
 if(!notice)return;
 if(key==="cashReceived"&&posPaymentMode==="cash")notice.textContent=`Change: ${money(Math.max(0,Number(value||0)-currentPosTotal()))}`;
 if(key==="creditDeposit"&&posPaymentMode==="credit")notice.textContent=`Balance due: ${money(Math.max(0,currentPosTotal()-Number(value||0)))}`;
}
function setPosPaymentMode(mode){posPaymentMode=mode;if(mode==="cash"&&!posForm.cashReceived)posForm.cashReceived=String(currentPosTotal());renderOwnerPosSection()}
function addPosItem(productId){
 const product=products.find(item=>item.id===Number(productId));if(!product)return;
 if(product.shop!==activePosShop){toast("This product is not in the selected business");return}
 const existing=posCart.find(item=>item.productId===product.id),stock=currentPosStock(product.id);
 if(!Number(product.price)||stock<1){toast("Set a selling price and available stock before adding this item");return}
 if(existing&&existing.quantity>=stock){toast("Basket quantity cannot exceed available stock");return}
 if(existing)existing.quantity++;else posCart.push({productId:product.id,name:product.name,unitPrice:Number(product.price),quantity:1});
 renderOwnerPosSection();
}
function changePosQuantity(index,delta){
 const item=posCart[index];if(!item)return;
 if(delta>0&&item.quantity>=currentPosStock(item.productId)){toast("Basket quantity cannot exceed available stock");return}
 item.quantity+=delta;if(item.quantity<=0)posCart.splice(index,1);renderOwnerPosSection();
}
function removePosItem(index){posCart.splice(index,1);renderOwnerPosSection()}
function clearPosBasket(){if(!posCart.length)return;if(!confirm("Clear all items from this basket?"))return;posCart=[];renderOwnerPosSection()}
async function completePosSale(){
 if(!posCart.length){toast("Add products before completing a sale");return}
 const total=currentPosTotal(),quantities=new Map();
 if(!Number.isInteger(total)||total<=0){toast("Sale total must be a positive whole number of UGX");return}
 posCart.forEach(item=>quantities.set(item.productId,(quantities.get(item.productId)||0)+item.quantity));
 for(const [productId,quantity] of quantities){if(currentPosStock(productId)<quantity){toast(`${products.find(product=>product.id===productId)?.name||"Item"} no longer has enough stock`);return}}
 let payments=[],paid=0,customerName=posForm.customerName.trim(),phone=posForm.phone.trim();
 if(posPaymentMode==="cash"){
  const tendered=Number(posForm.cashReceived||total);if(!Number.isInteger(tendered)||tendered<total){toast("Cash received must cover the sale total using a whole UGX amount");return}
  paid=total;payments=[{method:"Cash",amount:total,status:"counted_locally",change:tendered-total}];
 }else if(posPaymentMode==="transfer"){paid=total;payments=[{method:"Transfer / card",amount:total,status:"awaiting_verification"}]}
 else if(posPaymentMode==="split"){
  const cash=Number(posForm.splitCash||0),transfer=Number(posForm.splitTransfer||0);
  if(!Number.isInteger(cash)||!Number.isInteger(transfer)||cash<0||transfer<0||cash+transfer!==total){toast("Cash and transfer amounts must be whole numbers that add up to the exact total");return}
  paid=total;payments=[{method:"Cash",amount:cash,status:"counted_locally"},{method:"Transfer / card",amount:transfer,status:"awaiting_verification"}].filter(payment=>payment.amount>0);
 }else{
  const deposit=Number(posForm.creditDeposit||0);
  if(!Number.isInteger(deposit)||deposit<0||deposit>total){toast("Enter a whole-number credit deposit between zero and the total");return}
  if(total-deposit>0&&(!customerName||!phone)){toast("Credit sales need the customer's name and phone number");return}
  const creditPhoneDigits=phone.replace(/\D/g,"");
  if(total-deposit>0&&(creditPhoneDigits.length<9||creditPhoneDigits.length>15)){toast("Enter a valid customer phone number");return}
  paid=deposit;if(deposit)payments=[{method:"Cash deposit",amount:deposit,status:"counted_locally"}];
 }
 const lines=posCart.map(item=>{const product=products.find(entry=>entry.id===item.productId),unitPrice=Number(item.unitPrice??product?.price);return {productId:product.id,name:item.name||product.name,quantity:item.quantity,unitPrice,costPrice:getManagedCost(product.id,activePosShop),lineTotal:unitPrice*item.quantity}});
 const paymentStatus=posPaymentMode==="transfer"||posPaymentMode==="split"&&payments.some(payment=>payment.status==="awaiting_verification")?"Awaiting verification":total-paid?"Credit outstanding":"Recorded locally";
 const sale={id:`POS-${Date.now().toString(36).toUpperCase()}`,business:activePosShop,createdAt:Date.now(),source:"in-store",lines,total,paid,due:posPaymentMode==="credit"?total-paid:0,payments,customerName:customerName||"Walk-in customer",phone:phone||"",dueAt:posPaymentMode==="credit"&&total-paid?Date.now()+30*24*60*60*1000:null,status:"Completed",paymentStatus,syncStatus:"pending_backend"};
 try{
  const storage=await storePosRecord("sales",sale);
  posSales=mergePosRecords(posSales,[sale]);
  quantities.forEach((quantity,id)=>{const inventory=getProductInventory(id);sellerInventory[id]={stock:inventory.stock-quantity,sold:inventory.sold+quantity}});
  try{saveSellerData()}catch(error){console.error("Sale saved but inventory could not be mirrored to browser storage",error);toast("Sale saved locally; stock mirror could not be updated")}
  persistPosMetadata();appendPosAudit("sale_created",`${sale.id} · ${money(total)}`,activePosShop);
  posCart=[];posForm={customerName:"",phone:"",cashReceived:"",splitCash:"",splitTransfer:"",creditDeposit:""};toggleMobileCheckout(false);
  renderCatalog();renderDeals();renderRecommendations();renderOwnerPosSection();
  updateWorkspaceConnection();
  toast(storage==="indexedDB"?"Sale saved offline; awaiting backend sync":"Sale saved in browser storage only");
  showPosReceipt(sale.id);
 }catch(error){console.error("Sale could not be saved",error);toast("Sale was not saved. Keep the basket open and try again")}
}
function renderPosSales(){
 const sales=getBusinessSales().filter(sale=>sale.status!=="Voided");
 const today=new Date().toDateString(),todaySales=sales.filter(sale=>new Date(sale.createdAt).toDateString()===today);
 return `<div class="workspacePageHead"><div><h2>Recent sales</h2><p>Transactions recorded on this device. Transfer/card entries stay pending until checked by staff.</p></div><button class="workspaceButton primary" type="button" onclick="showOwnerPOS('sale')">New sale</button></div><div class="posMetricGrid"><article class="posMetric"><span>Today's sales</span><strong>${money(todaySales.reduce((sum,sale)=>sum+sale.total,0))}</strong><small>${todaySales.length} transactions</small></article><article class="posMetric"><span>Pending online orders</span><strong>${getBusinessOnlineOrders(activePosShop).filter(order=>order.status==="New").length}</strong><small>Local storefront orders</small></article></div><div class="workspaceTableWrap"><table class="workspaceTable"><thead><tr><th>Receipt</th><th>Items</th><th>Customer</th><th>Total</th><th>Payment status</th><th></th></tr></thead><tbody>${sales.length?sales.map(sale=>`<tr><td><strong>${escapeHTML(sale.id)}</strong><small>${new Date(sale.createdAt).toLocaleString()}</small></td><td>${sale.lines.map(line=>`${escapeHTML(line.name)} × ${line.quantity}`).join("<br>")}</td><td>${escapeHTML(sale.customerName)}<small>${escapeHTML(sale.phone||"Walk-in")}</small></td><td>${money(sale.total)}</td><td>${sale.due?`Credit · ${money(sale.due)} due`:escapeHTML(sale.paymentStatus||"Recorded locally")}<small>${sale.payments.map(payment=>`${escapeHTML(payment.method)}: ${payment.status==="awaiting_verification"?"unverified":"recorded"}`).join(" · ")}</small></td><td><button class="workspaceButton secondary" type="button" onclick="showPosReceipt('${escapeHTML(sale.id)}')">Receipt</button></td></tr>`).join(""):`<tr><td colspan="6"><div class="posEmpty">No sales recorded for this business yet.</div></td></tr>`}</tbody></table></div>`;
}
function renderPosOnlineOrders(){
 const orders=getBusinessOnlineOrders(activePosShop).slice().sort((a,b)=>b.createdAt-a.createdAt);
 return `<div class="workspacePageHead"><div><h2>Online orders</h2><p>Orders placed through this device's business storefront.</p></div><button class="workspaceButton secondary" type="button" onclick="openShopPreview(activePosShop)">Open store preview ↗</button></div><div class="workspaceNotice">Orders can only appear here when the storefront and POS share this browser database. No real-time sync, customer notification, or payment processing is connected.</div><div class="workspaceList" style="margin-top:12px">${orders.length?orders.map(order=>`<article class="workspaceListItem"><div><strong>${escapeHTML(order.id)} · ${money(order.total)}</strong><p>${escapeHTML(order.customerName)} · ${escapeHTML(order.phone)}<br>${order.lines.map(line=>`${escapeHTML(line.name)} × ${line.quantity}`).join(", ")}<br>${escapeHTML(order.fulfillment)} · ${new Date(order.createdAt).toLocaleString()}</p><span class="workspaceStatusPill${order.status==="New"?" warning":""}">${escapeHTML(order.status)}</span></div></article>`).join(""):`<div class="posEmpty">No online orders yet.</div>`}</div>`;
}
function shopSlug(name){return String(name).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function shopForSlug(slug){return getPosBusinessNames().find(name=>shopSlug(name)===slug)||null}
function openShopPreview(shop){
 if(!getPosBusinessNames().includes(shop)){toast("Business storefront is not available");return}
 stopPosScanner();publicShopBusiness=shop;publicShopCart=[];publicShopForm={customerName:"",phone:"",fulfillment:"Pickup",address:""};
 const route=new URL(`./shop/${shopSlug(shop)}`,location.href);
 history.pushState({shopSlug:shopSlug(shop)},"",route.pathname);
 showPublicStorefront(shop);
}
function closePublicStorefront(){
 if(history.state?.shopSlug){history.back();return}
 const parentRoute=new URL("../../",location.href);
 history.replaceState(null,"",parentRoute.pathname);closeModal();document.title="Mbale Shopper — Compare. Choose. Shop.";
}
function showPublicStorefront(shop){
 publicShopBusiness=shop;
 document.title=`${shop} | Mbale Shopper`;
 el("modal").innerHTML=`<div class="workspaceScreen publicStorefront" role="dialog" aria-modal="true" aria-label="${escapeHTML(shop)} storefront"><header class="workspaceHeader"><div class="workspaceBrand"><small>MBALE SHOPPER · LOCAL STORE</small><h1>${escapeHTML(shop)}</h1></div><span class="workspaceStatus">Store preview</span><button class="workspaceClose" type="button" aria-label="Close storefront" onclick="closePublicStorefront()">×</button></header><main class="workspaceBody" id="publicShopBody"></main></div>`;
 el("modalWrap").classList.add("show");renderPublicStorefront();
}
function renderPublicStorefront(){
 const body=el("publicShopBody");if(!body||!publicShopBusiness)return;
 const items=products.filter(product=>product.shop===publicShopBusiness&&Number(product.price)>0&&currentPosStock(product.id)>0);
 const total=publicShopCart.reduce((sum,item)=>sum+Number(products.find(product=>product.id===item.productId)?.price||0)*item.quantity,0);
 const rows=publicShopCart.map((item,index)=>{const product=products.find(entry=>entry.id===item.productId);if(!product)return "";return `<div class="posCartRow"><strong>${escapeHTML(product.name)}</strong><span class="posCartRowTotal">${money(product.price*item.quantity)}</span><div class="posQuantity"><button type="button" onclick="changePublicShopQuantity(${index},-1)" aria-label="Remove one">−</button><span>${item.quantity}</span><button type="button" onclick="changePublicShopQuantity(${index},1)" aria-label="Add one">+</button></div></div>`}).join("");
 body.innerHTML=`<div class="workspaceNotice"><strong>Storefront prototype.</strong> This route is generated from this business's active demo products. Orders are saved locally and are not sent to the shop.</div><div class="posSaleLayout" style="margin-top:14px"><section class="posCatalogPanel"><div class="workspacePageHead"><div><h2>Available products</h2><p>Availability reflects this browser's demo stock.</p></div></div><div class="posProductGrid">${items.length?items.map(product=>`<button class="posProductCard" type="button" onclick="addPublicShopItem(${product.id})"><img src="${escapeHTML(product.image)}" alt="" loading="lazy"><span class="posProductCopy"><strong>${escapeHTML(product.name)}</strong><span>${money(product.price)}</span><small>${currentPosStock(product.id)} available</small></span></button>`).join(""):`<div class="posEmpty">No active items are available right now.</div>`}</div></section><aside class="posCheckoutPanel"><div class="posCheckoutHead"><h2>Your order</h2><span>${publicShopCart.reduce((sum,item)=>sum+item.quantity,0)} items</span></div><div class="posCartRows">${rows||`<div class="posEmpty">Your order is empty.</div>`}</div><div class="posTotalRow"><span>Total</span><strong>${money(total)}</strong></div><form class="workspaceForm" style="grid-template-columns:1fr;padding:0;border:0" onsubmit="submitOnlineStoreOrder(event)"><label class="full">Your name<input name="customerName" value="${escapeHTML(publicShopForm.customerName)}" oninput="publicShopForm.customerName=this.value" required autocomplete="name"></label><label class="full">Phone number<input name="phone" type="tel" value="${escapeHTML(publicShopForm.phone)}" oninput="publicShopForm.phone=this.value" required autocomplete="tel"></label><label class="full">Fulfilment<select name="fulfillment" onchange="publicShopForm.fulfillment=this.value;renderPublicStorefront()"><option${publicShopForm.fulfillment==="Pickup"?" selected":""}>Pickup</option><option${publicShopForm.fulfillment==="Delivery"?" selected":""}>Delivery</option></select></label>${publicShopForm.fulfillment==="Delivery"?`<label class="full">Delivery address<textarea name="address" required oninput="publicShopForm.address=this.value">${escapeHTML(publicShopForm.address)}</textarea></label>`:""}<div class="full"><button class="posCompleteButton" type="submit" ${!publicShopCart.length?"disabled":""}>Place demo order · ${money(total)}</button></div></form><p class="workspaceHint">Payment is arranged with the seller; no payment is taken here.</p></aside></div>`;
}
function addPublicShopItem(productId){
 const product=products.find(item=>item.id===Number(productId));if(!product||product.shop!==publicShopBusiness)return;
 const current=publicShopCart.find(item=>item.productId===product.id);
 if(currentPosStock(product.id)<(current?.quantity||0)+1){toast("This item has no more available stock");return}
 if(current)current.quantity++;else publicShopCart.push({productId:product.id,quantity:1});renderPublicStorefront();
}
function changePublicShopQuantity(index,delta){
 const item=publicShopCart[index];if(!item)return;
 if(delta>0&&currentPosStock(item.productId)<item.quantity+1){toast("This item has no more available stock");return}
 item.quantity+=delta;if(item.quantity<=0)publicShopCart.splice(index,1);renderPublicStorefront();
}
async function submitOnlineStoreOrder(event){
 event.preventDefault();
 if(!publicShopCart.length){toast("Add a product to your order first");return}
 const form=new FormData(event.currentTarget),customerName=String(form.get("customerName")||"").trim(),phone=String(form.get("phone")||"").trim(),address=String(form.get("address")||"").trim(),fulfillment=String(form.get("fulfillment")||"Pickup"),digits=phone.replace(/\D/g,"");
 if(!customerName||digits.length<9||digits.length>15){toast("Enter a name and a valid phone number");return}
 if(fulfillment==="Delivery"&&!address){toast("Enter a delivery address");return}
 const quantities=new Map();publicShopCart.forEach(item=>quantities.set(item.productId,(quantities.get(item.productId)||0)+item.quantity));
 for(const [productId,quantity] of quantities){if(currentPosStock(productId)<quantity){toast(`${products.find(product=>product.id===productId)?.name||"Item"} is no longer available`);return}}
 const lines=publicShopCart.map(item=>{const product=products.find(entry=>entry.id===item.productId);return {productId:product.id,name:product.name,quantity:item.quantity,unitPrice:Number(product.price),lineTotal:Number(product.price)*item.quantity}});
 const order={id:`WEB-${Date.now().toString(36).toUpperCase()}`,business:publicShopBusiness,source:"online",createdAt:Date.now(),lines,total:lines.reduce((sum,line)=>sum+line.lineTotal,0),customerName,phone,fulfillment,address,status:"New",paymentStatus:"Awaiting payment",syncStatus:"pending_backend"};
 try{
  await storePosRecord("onlineOrders",order);onlineStoreOrders=mergePosRecords(onlineStoreOrders,[order]);
  quantities.forEach((quantity,id)=>{const inventory=getProductInventory(id);sellerInventory[id]={stock:inventory.stock-quantity,sold:inventory.sold+quantity}});
  try{saveSellerData()}catch(error){console.error("Online order saved but stock could not be mirrored",error);toast("Order saved locally; stock mirror could not be updated")}
  persistPosMetadata();appendPosAudit("online_order_received",`${order.id} · ${money(order.total)}`,publicShopBusiness);updateWorkspaceConnection();
  publicShopCart=[];publicShopForm={customerName:"",phone:"",fulfillment:"Pickup",address:""};renderPublicStorefront();toast("Order saved locally; the shop has not been notified");
 }catch(error){console.error("Online order could not be saved",error);toast("Order was not saved; try again")}
}
function findShopRoute(){
 const pathMatch=location.pathname.match(/\/shop\/([^/]+)\/?$/),hashMatch=location.hash.match(/^#shop\/([^/]+)$/),slug=pathMatch?.[1]||hashMatch?.[1];
 if(!slug)return null;
 try{return shopForSlug(decodeURIComponent(slug))}catch(error){console.error("Invalid storefront route",error);return null}
}
window.addEventListener("popstate",()=>{
 const shop=findShopRoute();
 if(shop){showPublicStorefront(shop);return}
 if(el("modal")?.querySelector(".publicStorefront")){closeModal();document.title="Mbale Shopper — Compare. Choose. Shop."}
});
function renderPosCredit(){
 const debts=getBusinessSales().filter(sale=>Number(sale.due)>0&&sale.status!=="Voided");
 return `<div class="workspacePageHead"><div><h2>Credit ledger</h2><p>Outstanding balances from credit sales on this device.</p></div></div><div class="workspaceMetricGrid posMetricGrid"><article class="posMetric"><span>Customers owing</span><strong>${new Set(debts.map(sale=>sale.phone).filter(Boolean)).size}</strong><small>Local demo records</small></article><article class="posMetric"><span>Total outstanding</span><strong>${money(debts.reduce((sum,sale)=>sum+Number(sale.due),0))}</strong><small>Payment collection is not connected</small></article></div><div class="workspaceList">${debts.length?debts.map(sale=>`<article class="workspaceListItem"><div><strong>${escapeHTML(sale.customerName)} · ${money(sale.due)}</strong><p>${escapeHTML(sale.phone)} · Sale ${escapeHTML(sale.id)}<br>Due ${sale.dueAt?new Date(sale.dueAt).toLocaleDateString():"date not set"}</p><small>${sale.dueAt<Date.now()?"Overdue":"Outstanding"} · No reminder has been sent</small></div><button class="workspaceButton secondary" type="button" onclick="prepareDebtReminder('${escapeHTML(sale.id)}')">Prepare reminder</button></article>`).join(""):`<div class="posEmpty">No outstanding credit balances.</div>`}</div><p class="workspaceHint">WhatsApp/SMS delivery and payment links will be added with backend integrations.</p>`;
}
function renderPosInvoices(){
 const invoices=invoiceRecords.filter(invoice=>invoice.business===activePosShop);
 return `<div class="workspacePageHead"><div><h2>Upload supplier bill</h2><p>Capture a receipt or choose a photo/PDF for staff to review.</p></div></div><form class="workspaceForm" onsubmit="handleSupplierInvoice(event)"><label class="full">Supplier bill image or PDF<input name="invoice" type="file" accept="image/*,application/pdf" capture="environment" required></label><label>Supplier name<input name="supplier" maxlength="120" placeholder="Optional"></label><label>Invoice amount (UGX)<input name="amount" type="number" min="0" step="1" placeholder="Optional"></label><div class="full"><button class="workspaceButton primary" type="submit">Save bill offline</button></div></form><p class="workspaceHint">Files are stored in this browser's IndexedDB for the local demo. They are not uploaded or backed up. Maximum file size: 10 MB.</p><div class="workspaceSectionTitle"><h3>Submitted bills</h3></div><div class="workspaceList">${invoices.length?invoices.map(invoice=>`<article class="workspaceListItem"><div><strong>${escapeHTML(invoice.fileName)}</strong><p>${escapeHTML(invoice.supplier||"Supplier not entered")}${invoice.amount?` · ${money(invoice.amount)}`:""}<br>Captured ${new Date(invoice.createdAt).toLocaleString()}</p></div><span class="workspaceStatusPill${invoice.status==="Reviewed"?"":" warning"}">${escapeHTML(invoice.status)}</span></article>`).join(""):`<div class="posEmpty">No supplier bills uploaded.</div>`}</div>`;
}
async function handleSupplierInvoice(event){
 event.preventDefault();
 const form=event.currentTarget,file=form.elements.invoice.files[0],supplier=form.elements.supplier.value.trim(),amount=Number(form.elements.amount.value||0);
 if(!file){toast("Choose a supplier bill first");return}
 if(file.size>10*1024*1024){toast("Supplier bill must be 10 MB or smaller");return}
 if(!Number.isInteger(amount)||amount<0){toast("Invoice amount must be a whole non-negative number of UGX");return}
 if(!file.type.startsWith("image/")&&file.type!=="application/pdf"){toast("Choose an image or PDF file");return}
 const invoice={id:`INV-${Date.now().toString(36).toUpperCase()}`,business:activePosShop,fileName:file.name,fileType:file.type,fileSize:file.size,file, supplier,amount,createdAt:Date.now(),status:"Pending staff review"};
 try{
  await storePosRecord("invoices",invoice);
  invoiceRecords=mergePosRecords(invoiceRecords,[{...invoice,file:undefined}]);
  persistPosMetadata();appendPosAudit("invoice_uploaded",`${invoice.fileName} · ${activePosShop}`,activePosShop);
  renderOwnerPosSection();toast("Supplier bill saved on this device for staff review");
 }catch(error){console.error("Supplier bill could not be saved in IndexedDB",error);toast("Bill was not saved. Check browser storage and try again")}
}
function renderOwnerAdvice(){
 const tips=advisorSuggestions[activePosShop]||[],dismissed=dismissedAdvice[activePosShop]||[];
 const visible=tips.filter(tip=>!dismissed.includes(tip.id));
 return `<div class="workspacePageHead"><div><h2>Weekly advice</h2><p>Suggestions published by managed staff for your business.</p></div></div><div class="workspaceNotice">Advice is local demo content, not financial or tax guidance.</div><div class="workspaceList" style="margin-top:12px">${visible.length?visible.map(tip=>`<article class="workspaceListItem"><div><strong>${escapeHTML(tip.title)}</strong><p>${escapeHTML(tip.message)}</p><small>${new Date(tip.createdAt).toLocaleDateString()}</small></div><button class="workspaceButton secondary" type="button" onclick="dismissAdvice('${escapeHTML(tip.id)}')">Mark read</button></article>`).join(""):`<div class="posEmpty">No new suggestions for this business.</div>`}</div>`;
}
function showPosReceipt(saleId){
 const sale=posSales.find(item=>item.id===saleId);if(!sale)return;
 const unverified=sale.payments?.some(payment=>payment.status==="awaiting_verification");
 const paymentLines=sale.payments?.length?sale.payments.map(payment=>`<div class="posReceiptLine"><span>${escapeHTML(payment.method)}${payment.status==="awaiting_verification"?" · unverified":payment.status==="manually_checked_demo"?" · manually checked":payment.status==="counted_locally"?" · counted locally":payment.status==="manually_recorded_demo"?" · manually recorded":""}</span><span>${money(payment.amount)}</span></div>`).join(""):"";
 el("modal").innerHTML=`<div class="posReceiptPaper"><div class="posReceiptActions"><button class="workspaceButton secondary" type="button" onclick="closeModal()">Close</button><button class="workspaceButton primary" type="button" onclick="printPosReceipt()">Print receipt</button><button class="workspaceButton secondary" type="button" onclick="sharePosReceipt('${escapeHTML(sale.id)}')">Copy / share</button><label class="workspaceHint">Paper width <select onchange="document.querySelector('.posReceiptPaper').classList.toggle('wide',this.value==='80')"><option value="58">58 mm</option><option value="80">80 mm</option></select></label></div><h2>${escapeHTML(sale.business)}</h2><p>SALES RECEIPT · DEMO</p><hr><p>${escapeHTML(sale.id)}<br>${new Date(sale.createdAt).toLocaleString()}</p><hr>${sale.lines.map(line=>`<div class="posReceiptLine"><span>${escapeHTML(line.name)} × ${line.quantity}</span><strong>${money(line.lineTotal)}</strong></div>`).join("")}<hr><div class="posReceiptLine"><strong>Total</strong><strong>${money(sale.total)}</strong></div>${paymentLines}${sale.due?`<div class="posReceiptLine"><strong>Credit balance due</strong><strong>${money(sale.due)}</strong></div>`:""}${unverified?`<p class="posReceiptVerification">Transfer/card payment is recorded but not verified or processed.</p>`:""}<p>Customer: ${escapeHTML(sale.customerName)}${sale.phone?`<br>${escapeHTML(sale.phone)}`:""}</p><div class="posReceiptFooter">Thank you · Not a tax invoice<br>Stored on this device only</div></div>`;
 el("modalWrap").classList.add("show");
}
function printPosReceipt(){document.body.classList.add("printingPosReceipt");window.print();setTimeout(()=>document.body.classList.remove("printingPosReceipt"),500)}
async function sharePosReceipt(saleId){
 const sale=posSales.find(item=>item.id===saleId);if(!sale)return;
 const url=new URL(`./shop/${shopSlug(sale.business)}`,location.href).href;
 const text=`Receipt ${sale.id} from ${sale.business}\n${sale.lines.map(line=>`${line.name} × ${line.quantity}: ${money(line.lineTotal)}`).join("\n")}\nTotal: ${money(sale.total)}\nAmount recorded: ${money(sale.paid)}${sale.paymentStatus==="Awaiting verification"?" (transfer/card unverified)":""}${sale.due?`\nCredit balance due: ${money(sale.due)}`:""}`;
 try{
  if(navigator.share){await navigator.share({title:`Receipt ${sale.id}`,text,url});toast("Receipt shared using your device's share sheet")}
  else{await navigator.clipboard.writeText(`${text}\nShop: ${url}`);toast("Receipt text and shop link copied")}
 }catch(error){if(error.name!=="AbortError"){console.error("Receipt sharing failed",error);toast("Could not share receipt; use print or try copying it")}}
}
function prepareDebtReminder(saleId){
 const sale=posSales.find(item=>item.id===saleId);if(!sale)return;
 const message=`Hello ${sale.customerName}, this is a reminder from ${sale.business} about your outstanding balance of ${money(sale.due)} for sale ${sale.id}. Please contact the shop to arrange payment.`;
 el("modal").innerHTML=`<button class="close" type="button" onclick="closeModal()">×</button><div class="form"><h2>Prepare debt reminder</h2><p>Nothing will be sent until messaging integrations are connected.</p><label>Phone<input readonly value="${escapeHTML(sale.phone)}"></label><label>Message<textarea id="debtReminderMessage" readonly rows="5">${escapeHTML(message)}</textarea></label><button class="workspaceButton primary" type="button" onclick="copyDebtReminder()">Copy reminder text</button></div>`;
 el("modalWrap").classList.add("show");
}
async function copyDebtReminder(){
 const text=el("debtReminderMessage")?.value;if(!text)return;
 try{await navigator.clipboard.writeText(text);toast("Reminder text copied; it was not sent")}catch(error){console.error("Could not copy reminder text",error);toast("Copy failed; select the reminder text and copy it manually")}
}
function showManagedStaff(section="overview"){
 if(!getPosBusinessNames().includes(activeManagedShop))activeManagedShop=getPosBusinessNames()[0];
 managedStaffSection=section;
 el("modal").innerHTML=`<div class="workspaceScreen" role="dialog" aria-modal="true" aria-label="Managed staff operations">${workspaceHeader("Staff operations",activeManagedShop,"switchManagedBusiness",true)}<nav class="workspaceTabs" aria-label="Managed staff sections">${[["overview","Overview"],["catalog","Catalog & stock"],["online","Online orders"],["invoices","Supplier bills"],["debts","Debts"],["payments","Payment review"],["audit","Audit & alerts"],["reports","Reports"],["advice","Weekly advice"]].map(([key,label])=>`<button class="workspaceTab${managedStaffSection===key?" active":""}" type="button" onclick="showManagedStaff('${key}')">${label}${key==="online"&&getBusinessOnlineOrders(activeManagedShop).some(order=>order.status==="New")?` <span class="workspaceStatusPill warning">${getBusinessOnlineOrders(activeManagedShop).filter(order=>order.status==="New").length}</span>`:key==="payments"&&getBusinessSales(activeManagedShop).some(sale=>sale.payments?.some(payment=>payment.status==="awaiting_verification"))?` <span class="workspaceStatusPill warning">${getBusinessSales(activeManagedShop).filter(sale=>sale.payments?.some(payment=>payment.status==="awaiting_verification")).length}</span>`:""}</button>`).join("")}</nav><main class="workspaceBody" id="managedStaffBody"></main></div>`;
 el("modalWrap").classList.add("show");
 renderManagedStaffSection();
 hydratePosData().then(()=>{if(el("managedStaffBody"))renderManagedStaffSection()});
}
function switchManagedBusiness(shop){activeManagedShop=shop;localStorage.setItem("mbaleManagedShop",shop);showManagedStaff(managedStaffSection)}
function renderManagedStaffSection(){
 const body=el("managedStaffBody");if(!body)return;
 const renderers={overview:renderStaffOverview,catalog:renderStaffCatalog,online:renderStaffOnlineOrders,invoices:renderStaffInvoices,debts:renderStaffDebts,payments:renderStaffPaymentReview,audit:renderStaffAudit,reports:renderStaffReports,advice:renderStaffAdvice};
 body.innerHTML=(renderers[managedStaffSection]||renderStaffOverview)();
}
function getStaffAlerts(shop=activeManagedShop){
 const sales=getBusinessSales(shop),activeSales=sales.filter(sale=>sale.status!=="Voided"),items=products.filter(product=>product.shop===shop);
 const alerts=[];
 items.filter(product=>currentStockForShop(product.id)<=5).forEach(product=>alerts.push({type:"warning",title:`Low stock: ${product.name}`,detail:`${currentStockForShop(product.id)} units remain.`}));
 activeSales.forEach(sale=>sale.lines.forEach(line=>{if(line.costPrice>0&&line.unitPrice<line.costPrice)alerts.push({type:"danger",title:`Sold below cost: ${line.name}`,detail:`${sale.id} sold at ${money(line.unitPrice)}; recorded cost ${money(line.costPrice)}.`})}));
 activeSales.filter(sale=>sale.due>0&&sale.dueAt<Date.now()).forEach(sale=>alerts.push({type:"danger",title:`Overdue balance: ${sale.customerName}`,detail:`${sale.id} · ${money(sale.due)} overdue.`}));
 sales.filter(sale=>sale.status==="Voided").forEach(sale=>alerts.push({type:"warning",title:`Voided sale: ${sale.id}`,detail:"Review the local audit entry."}));
 const recentVoids=sales.filter(sale=>sale.status==="Voided"&&Number(sale.voidedAt||0)>Date.now()-24*60*60*1000);
 if(recentVoids.length>=3)alerts.push({type:"danger",title:"Frequent voided sales",detail:`${recentVoids.length} sales were voided in the last 24 hours.`});
 getBusinessOnlineOrders(shop).filter(order=>order.status==="New").forEach(order=>alerts.push({type:"warning",title:`New online order: ${order.id}`,detail:`${order.customerName} · ${money(order.total)} · needs fulfilment.`}));
 return alerts;
}
function currentStockForShop(productId){return Number(sellerInventory[productId]?.stock??getProductInventory(productId).stock??0)}
function renderStaffOverview(){
 const sales=getBusinessSales(activeManagedShop).filter(sale=>sale.status!=="Voided"),alerts=getStaffAlerts(),today=new Date().toDateString();
 const todaySales=sales.filter(sale=>new Date(sale.createdAt).toDateString()===today),revenue=todaySales.reduce((sum,sale)=>sum+sale.total,0),debts=sales.reduce((sum,sale)=>sum+Number(sale.due||0),0),pendingInvoices=invoiceRecords.filter(invoice=>invoice.business===activeManagedShop&&invoice.status!=="Reviewed").length;
 return `<div class="workspaceNotice"><strong>Prototype only.</strong> Staff access, business isolation, approval controls, immutable audit logs, and reports are not enforced or backed up by a server.</div><div class="workspacePageHead" style="margin-top:14px"><div><h2>Business overview</h2><p>Local operations snapshot for ${escapeHTML(activeManagedShop)}.</p></div></div><div class="posMetricGrid"><article class="posMetric"><span>Today's POS sales</span><strong>${money(revenue)}</strong><small>${todaySales.length} local transactions</small></article><article class="posMetric"><span>Products</span><strong>${products.filter(product=>product.shop===activeManagedShop).length}</strong><small>Active demo catalog</small></article><article class="posMetric"><span>Outstanding credit</span><strong>${money(debts)}</strong><small>Collection integration not connected</small></article><article class="posMetric"><span>Supplier bills to review</span><strong>${pendingInvoices}</strong><small>Stored on this browser</small></article></div><div class="workspaceSectionTitle"><h3>Industry setup</h3></div><form class="workspaceForm" onsubmit="saveBusinessIndustry(event)"><label>Business type<select name="industry">${industryTemplates.map(template=>`<option value="${template.id}"${(businessIndustries[activeManagedShop]||"Grocery")===template.id?" selected":""}>${template.label}</option>`).join("")}</select></label><div style="align-self:end"><button class="workspaceButton primary" type="submit">Save template</button></div></form><p class="workspaceHint">Templates filter the sample master catalog; they do not represent a complete or verified product database.</p><div class="workspaceSectionTitle"><h3>Attention needed</h3><button class="workspaceButton secondary" type="button" onclick="showManagedStaff('audit')">Open audit & alerts</button></div><div class="workspaceList">${alerts.length?alerts.slice(0,5).map(alert=>`<article class="workspaceListItem"><div><strong>${escapeHTML(alert.title)}</strong><p>${escapeHTML(alert.detail)}</p></div><span class="workspaceStatusPill ${alert.type}">${alert.type==="danger"?"Review":"Notice"}</span></article>`).join(""):`<div class="posEmpty">No current demo alerts.</div>`}</div>`;
}
function saveBusinessIndustry(event){
 event.preventDefault();businessIndustries[activeManagedShop]=event.currentTarget.elements.industry.value;
 if(!writePosLocal("mbaleBusinessIndustries",businessIndustries)){toast("Business template could not be saved");return}
 appendPosAudit("industry_template_updated",businessIndustries[activeManagedShop],activeManagedShop);renderManagedStaffSection();toast("Business template saved on this device");
}
function renderStaffCatalog(){
 const items=products.filter(product=>product.shop===activeManagedShop).slice().sort((a,b)=>a.name.localeCompare(b.name));
 const template=industryTemplates.find(item=>item.id===(businessIndustries[activeManagedShop]||"Grocery"))||industryTemplates[0];
 const masterItems=products.filter(product=>product.shop!==activeManagedShop&&template.categories.includes(product.cat)).slice(0,60);
 return `<div class="workspacePageHead"><div><h2>Catalog & stock</h2><p>Set sell price, internal buying cost, stock and barcode for ${escapeHTML(activeManagedShop)}.</p></div></div><div class="workspaceNotice">These edits affect this browser's demo catalog only. Master catalog entries are sample marketplace products; confirm all details before using real stock.</div><div class="workspaceSectionTitle"><h3>Business products (${items.length})</h3></div><div class="workspaceTableWrap"><table class="workspaceTable"><thead><tr><th>Product</th><th>Sell price</th><th>Buying cost</th><th>Stock</th><th>Barcode</th><th></th></tr></thead><tbody>${items.length?items.map(product=>{const stock=currentStockForShop(product.id),cost=getManagedCost(product.id,activeManagedShop),formId=`managedProduct-${product.id}`;return `<tr><td class="workspaceTableProduct"><form id="${formId}" onsubmit="saveManagedProduct(event,${product.id})"></form><strong>${escapeHTML(product.name)}</strong><small>${escapeHTML(product.cat)}</small></td><td><input form="${formId}" name="selling" type="number" min="0" step="1" value="${product.price||""}" aria-label="Selling price for ${escapeHTML(product.name)}"></td><td><input form="${formId}" name="cost" type="number" min="0" step="1" value="${cost||""}" aria-label="Buying price for ${escapeHTML(product.name)}"></td><td><input form="${formId}" name="stock" type="number" min="0" step="1" value="${stock}" aria-label="Stock quantity for ${escapeHTML(product.name)}"></td><td><input form="${formId}" name="barcode" maxlength="80" value="${escapeHTML(product.barcode||"")}" aria-label="Barcode for ${escapeHTML(product.name)}"></td><td><button form="${formId}" class="workspaceButton secondary" type="submit">Save</button></td></tr>`}).join(""):`<tr><td colspan="6">No products in this business catalog.</td></tr>`}</tbody></table></div><div class="workspaceSectionTitle"><h3>Activate from ${template.label} template</h3></div><div class="workspaceList">${masterItems.length?masterItems.map(product=>`<article class="workspaceListItem"><div><strong>${escapeHTML(product.name)}</strong><p>${escapeHTML(product.cat)} · Sample master product<br>Price is unset and stock starts at zero.</p></div><button class="workspaceButton primary" type="button" onclick="activateMasterProduct(${product.id})">Add to business</button></article>`).join(""):`<div class="posEmpty">No sample products available for this template.</div>`}</div>`;
}
function saveManagedProduct(event,productId){
 event.preventDefault();
 const product=products.find(item=>item.id===Number(productId));if(!product||product.shop!==activeManagedShop){toast("Product does not belong to the selected business");return}
 const form=new FormData(event.currentTarget),selling=Number(form.get("selling")||0),cost=Number(form.get("cost")||0),stock=Number(form.get("stock")),barcode=String(form.get("barcode")||"").trim();
 if(!Number.isInteger(selling)||selling<0||!Number.isInteger(cost)||cost<0||!Number.isInteger(stock)||stock<0){toast("Enter whole-number non-negative prices and stock quantities");return}
 const previousProduct={price:product.price,old:product.old,barcode:product.barcode},previousInventory=sellerInventory[product.id]?{...sellerInventory[product.id]}:undefined,previousOverride=sellerProductOverrides[product.id],previousCosts=managedCostOverrides;
 const nextCosts={...managedCostOverrides,[`${activeManagedShop}::${product.id}`]:cost};
 if(!writePosLocal("mbaleManagedCosts",nextCosts)){toast("Product edit was not saved");return}
 managedCostOverrides=nextCosts;
 product.price=selling;product.old=Math.max(Number(product.old)||0,selling);product.barcode=barcode;
 sellerProductOverrides[product.id]={name:product.name,cat:product.cat,price:product.price,old:product.old,desc:product.desc,image:product.image,barcode};
 sellerInventory[product.id]={stock,sold:getProductInventory(product.id).sold||0};
 try{saveSellerData()}catch(error){
  Object.assign(product,previousProduct);if(previousOverride)sellerProductOverrides[product.id]=previousOverride;else delete sellerProductOverrides[product.id];
  if(previousInventory)sellerInventory[product.id]=previousInventory;else delete sellerInventory[product.id];
  managedCostOverrides=previousCosts;writePosLocal("mbaleManagedCosts",managedCostOverrides);
  try{saveSellerData()}catch(restoreError){console.error("Could not restore local product data",restoreError)}
  console.error("Product edit could not be saved",error);toast("Product edit was not saved");return;
 }
 appendPosAudit("product_updated",`${product.name} · sell ${selling} · cost ${cost} · stock ${stock}`,activeManagedShop);
 renderCatalogFilters();initSellerFilter();renderCatalog();renderDeals();renderRecommendations();renderManagedStaffSection();toast("Product details saved on this device");
}
function activateMasterProduct(masterId){
 const master=products.find(item=>item.id===Number(masterId));if(!master)return;
 if(products.some(item=>item.shop===activeManagedShop&&item.name.toLowerCase()===master.name.toLowerCase())){toast("This product is already in the business catalog");return}
 const id=Math.max(0,...products.map(item=>Number(item.id)||0))+1;
 const listing={...master,id,shop:activeManagedShop,price:0,old:0,buyingPrice:0,barcode:"",rating:0,reviews:0,tag:"NEW"};
 products.push(listing);sellerListings.push(listing);sellerInventory[id]={stock:0,sold:0};productGalleryImages.set(id,[listing.image]);
 try{saveSellerData()}catch(error){products.splice(products.indexOf(listing),1);sellerListings=sellerListings.filter(item=>item.id!==id);delete sellerInventory[id];productGalleryImages.delete(id);console.error("Catalog activation could not be saved",error);toast("Product was not added");return}
 appendPosAudit("master_product_activated",listing.name,activeManagedShop);renderManagedStaffSection();toast("Product added; set its price and stock before selling");
}
function renderStaffInvoices(){
 const invoices=invoiceRecords.filter(invoice=>invoice.business===activeManagedShop).sort((a,b)=>b.createdAt-a.createdAt);
 return `<div class="workspacePageHead"><div><h2>Supplier bills</h2><p>Review files captured by the owner on this device.</p></div></div><div class="workspaceNotice">Invoice OCR, purchase entry, approval controls, and secure file storage require the backend phase. Marking reviewed here does not update stock or accounts.</div><div class="workspaceList" style="margin-top:12px">${invoices.length?invoices.map(invoice=>`<article class="workspaceListItem"><div><strong>${escapeHTML(invoice.fileName)}</strong><p>${escapeHTML(invoice.supplier||"Supplier not entered")}${invoice.amount?` · ${money(invoice.amount)}`:""}<br>${new Date(invoice.createdAt).toLocaleString()} · ${(invoice.fileSize/1024).toFixed(0)} KB</p><small>${escapeHTML(invoice.status)}</small></div><div style="display:grid;gap:7px"><button class="workspaceButton secondary" type="button" onclick="viewSupplierInvoice('${escapeHTML(invoice.id)}')">View file</button>${invoice.status!=="Reviewed"?`<button class="workspaceButton primary" type="button" onclick="markInvoiceReviewed('${escapeHTML(invoice.id)}')">Mark reviewed</button>`:""}</div></article>`).join(""):`<div class="posEmpty">No supplier bills for this business.</div>`}</div>`;
}
function renderStaffOnlineOrders(){
 const orders=getBusinessOnlineOrders(activeManagedShop).slice().sort((a,b)=>b.createdAt-a.createdAt);
 const states=["New","Confirmed","Preparing","Ready for pickup","Completed","Cancelled"];
 return `<div class="workspacePageHead"><div><h2>Online orders</h2><p>Review and update orders from the storefront prototype.</p></div></div><div class="workspaceNotice">Orders are local to this browser. Stock changes are reflected locally, but customers are not notified and payment status is not verified.</div><div class="workspaceTableWrap" style="margin-top:12px"><table class="workspaceTable"><thead><tr><th>Order</th><th>Items</th><th>Customer</th><th>Total</th><th>Fulfilment</th><th>Status</th></tr></thead><tbody>${orders.length?orders.map(order=>`<tr><td><strong>${escapeHTML(order.id)}</strong><small>${new Date(order.createdAt).toLocaleString()}</small></td><td>${order.lines.map(line=>`${escapeHTML(line.name)} × ${line.quantity}`).join("<br>")}</td><td>${escapeHTML(order.customerName)}<small>${escapeHTML(order.phone)}</small></td><td>${money(order.total)}</td><td>${escapeHTML(order.fulfillment)}<small>${escapeHTML(order.address||"")}</small></td><td><select aria-label="Status for ${escapeHTML(order.id)}" onchange="updateOnlineOrderStatus('${escapeHTML(order.id)}',this.value)">${states.map(status=>`<option${order.status===status?" selected":""}>${status}</option>`).join("")}</select></td></tr>`).join(""):`<tr><td colspan="6"><div class="posEmpty">No online orders for this business.</div></td></tr>`}</tbody></table></div>`;
}
async function updateOnlineOrderStatus(orderId,status){
 const order=onlineStoreOrders.find(item=>item.id===orderId&&item.business===activeManagedShop);
 if(!order||!["New","Confirmed","Preparing","Ready for pickup","Completed","Cancelled"].includes(status)){toast("Order status is invalid");return}
 const previousStatus=order.status,previousUpdatedAt=order.updatedAt;
 if(previousStatus==="Cancelled"&&status!=="Cancelled"){
  for(const line of order.lines){if(currentStockForShop(line.productId)<line.quantity){toast(`${line.name} no longer has enough stock to reopen this order`);return}}
 }
 order.status=status;order.updatedAt=Date.now();
 try{
  await storePosRecord("onlineOrders",order);
  if(previousStatus!=="Cancelled"&&status==="Cancelled")order.lines.forEach(line=>{const inventory=getProductInventory(line.productId);sellerInventory[line.productId]={stock:inventory.stock+line.quantity,sold:Math.max(0,inventory.sold-line.quantity)}});
  if(previousStatus==="Cancelled"&&status!=="Cancelled")order.lines.forEach(line=>{const inventory=getProductInventory(line.productId);sellerInventory[line.productId]={stock:inventory.stock-line.quantity,sold:inventory.sold+line.quantity}});
  if(previousStatus!==status){saveSellerData();appendPosAudit("online_order_status_updated",`${order.id}: ${previousStatus} → ${status}`,activeManagedShop)}
  persistPosMetadata();renderCatalog();renderManagedStaffSection();toast("Order status updated locally");
 }catch(error){order.status=previousStatus;order.updatedAt=previousUpdatedAt;console.error("Online order status could not be saved",error);toast("Order status was not saved")}
}
async function viewSupplierInvoice(invoiceId){
 try{
  const records=await posDbRequest("invoices","getAll"),invoice=records.find(item=>item.id===invoiceId);
  if(!invoice?.file){toast("Invoice file is not available in this browser's offline database");return}
  if(activeInvoiceObjectURL)URL.revokeObjectURL(activeInvoiceObjectURL);
  activeInvoiceObjectURL=URL.createObjectURL(invoice.file);
  const preview=invoice.fileType.startsWith("image/")?`<img class="posInvoicePreview" src="${activeInvoiceObjectURL}" alt="${escapeHTML(invoice.fileName)}">`:`<iframe title="${escapeHTML(invoice.fileName)}" src="${activeInvoiceObjectURL}" style="width:100%;height:65vh;border:0"></iframe>`;
  el("modal").innerHTML=`<div class="form"><h2>${escapeHTML(invoice.fileName)}</h2>${preview}<button class="workspaceButton secondary" type="button" onclick="closeInvoicePreview()">Close</button></div>`;
 }catch(error){console.error("Could not load supplier bill",error);toast("Could not open the supplier bill")}
}
function closeInvoicePreview(){if(activeInvoiceObjectURL)URL.revokeObjectURL(activeInvoiceObjectURL);activeInvoiceObjectURL=null;showManagedStaff("invoices")}
async function markInvoiceReviewed(invoiceId){
 const invoice=invoiceRecords.find(item=>item.id===invoiceId);if(!invoice)return;
 try{
  const records=await posDbRequest("invoices","getAll"),stored=records.find(item=>item.id===invoiceId);
  if(!stored){toast("Invoice file is not available in IndexedDB");return}
  stored.status="Reviewed";await posDbRequest("invoices","put",stored);invoice.status="Reviewed";
  persistPosMetadata();appendPosAudit("invoice_reviewed",invoice.fileName,activeManagedShop);renderManagedStaffSection();toast("Bill marked reviewed locally");
 }catch(error){console.error("Invoice status could not be saved",error);toast("Review status was not saved")}
}
function renderStaffDebts(){
 const debts=getBusinessSales(activeManagedShop).filter(sale=>sale.due>0&&sale.status!=="Voided");
 return `<div class="workspacePageHead"><div><h2>Debt collection</h2><p>Review outstanding customer balances.</p></div></div><div class="workspaceNotice">No reminders or payment links are sent. Payment callbacks and automatic debt clearing need backend and payment integrations.</div><div class="workspaceMetricGrid posMetricGrid"><article class="posMetric"><span>Open accounts</span><strong>${debts.length}</strong><small>Local POS credit sales</small></article><article class="posMetric"><span>Outstanding balance</span><strong>${money(debts.reduce((sum,sale)=>sum+sale.due,0))}</strong><small>Not reconciled</small></article></div><div class="workspaceList">${debts.length?debts.map(sale=>`<article class="workspaceListItem"><div><strong>${escapeHTML(sale.customerName)} · ${money(sale.due)}</strong><p>${escapeHTML(sale.phone)} · ${escapeHTML(sale.id)}<br>${sale.dueAt<Date.now()?"Overdue":"Due"} ${new Date(sale.dueAt).toLocaleDateString()}</p><small>${escapeHTML(sale.business)}</small></div><div style="display:grid;gap:7px"><button class="workspaceButton secondary" type="button" onclick="prepareDebtReminder('${escapeHTML(sale.id)}')">Prepare message</button><button class="workspaceButton primary" type="button" onclick="markDebtPaid('${escapeHTML(sale.id)}')">Mark paid (demo)</button></div></article>`).join(""):`<div class="posEmpty">No outstanding debts.</div>`}</div>`;
}
function renderStaffPaymentReview(){
 const sales=getBusinessSales(activeManagedShop).filter(sale=>sale.status!=="Voided"&&sale.payments?.some(payment=>payment.status==="awaiting_verification")).sort((a,b)=>b.createdAt-a.createdAt);
 return `<div class="workspacePageHead"><div><h2>Payment review</h2><p>Transfer/card entries recorded by the owner POS.</p></div></div><div class="workspaceNotice"><strong>Manual review only.</strong> The app cannot verify transactions with a bank or payment provider. Only mark an entry after independently checking the payment record; the action is saved on this browser and does not guarantee settlement.</div><div class="workspaceList" style="margin-top:12px">${sales.length?sales.map(sale=>`<article class="workspaceListItem"><div><strong>${escapeHTML(sale.id)} · ${escapeHTML(sale.customerName)}</strong><p>${escapeHTML(sale.phone||"No phone")} · ${money(sale.total)}<br>${sale.payments.filter(payment=>payment.status==="awaiting_verification").map(payment=>`${escapeHTML(payment.method)}: ${money(payment.amount)}`).join(", ")}<br>${new Date(sale.createdAt).toLocaleString()}</p></div><button class="workspaceButton secondary" type="button" onclick="verifyDemoSalePayment('${escapeHTML(sale.id)}')">Mark checked (demo)</button></article>`).join(""):`<div class="posEmpty">No transfer/card entries awaiting review.</div>`}</div>`;
}
async function verifyDemoSalePayment(saleId){
 const sale=posSales.find(item=>item.id===saleId&&item.business===activeManagedShop);
 if(!sale||!sale.payments?.some(payment=>payment.status==="awaiting_verification"))return;
 if(!confirm("Have you independently checked that this transfer/card payment was received? This records your demo confirmation only; no provider is contacted."))return;
 const previousPayments=sale.payments.map(payment=>({...payment})),previousStatus=sale.paymentStatus;
 sale.payments=sale.payments.map(payment=>payment.status==="awaiting_verification"?{...payment,status:"manually_checked_demo",verifiedAt:Date.now()}:payment);
 sale.paymentStatus="Recorded locally · staff checked";
 try{
  await storePosRecord("sales",sale);persistPosMetadata();appendPosAudit("payment_manually_checked",`${sale.id} · staff demo confirmation`,activeManagedShop);renderManagedStaffSection();toast("Demo confirmation saved locally; no payment provider was checked");
 }catch(error){sale.payments=previousPayments;sale.paymentStatus=previousStatus;console.error("Payment review could not be saved",error);toast("Payment review was not saved")}
}
async function markDebtPaid(saleId){
 const sale=posSales.find(item=>item.id===saleId&&item.business===activeManagedShop);if(!sale||!sale.due)return;
 if(!confirm(`Mark ${money(sale.due)} as paid in this local demo?`))return;
 const previous={paid:sale.paid,due:sale.due,dueAt:sale.dueAt,paymentStatus:sale.paymentStatus,payments:sale.payments};
 const amountCollected=Number(sale.due);sale.paid=Number(sale.paid||0)+amountCollected;sale.due=0;sale.payments=[...(sale.payments||[]),{method:"Manual staff settlement · demo",amount:amountCollected,status:"manually_recorded_demo"}];sale.dueAt=null;sale.paymentStatus="Credit settled locally · unverified";
 try{await storePosRecord("sales",sale);persistPosMetadata();appendPosAudit("debt_marked_paid",`${sale.id} · manual demo action`,activeManagedShop);renderManagedStaffSection();toast("Debt marked paid locally; no payment was verified")}
 catch(error){Object.assign(sale,previous);console.error("Debt change could not be saved",error);toast("Debt was not updated")}
}
function renderStaffAudit(){
 const alerts=getStaffAlerts(),events=posAuditEntries.filter(entry=>entry.business===activeManagedShop).slice().sort((a,b)=>b.createdAt-a.createdAt),sales=getBusinessSales(activeManagedShop).slice().sort((a,b)=>b.createdAt-a.createdAt);
 return `<div class="workspacePageHead"><div><h2>Audit & anomaly alerts</h2><p>Heuristic checks over local demo records.</p></div></div><div class="workspaceNotice">This browser log is editable and is not an immutable audit trail. Production audit events must be server-generated and append-only. A demo void restores stock but does not refund or reverse an actual payment.</div><div class="workspaceSectionTitle"><h3>Alerts (${alerts.length})</h3></div><div class="workspaceList">${alerts.length?alerts.map(alert=>`<article class="workspaceListItem"><div><strong>${escapeHTML(alert.title)}</strong><p>${escapeHTML(alert.detail)}</p></div><span class="workspaceStatusPill ${alert.type}">${alert.type==="danger"?"Review":"Notice"}</span></article>`).join(""):`<div class="posEmpty">No current anomalies detected.</div>`}</div><div class="workspaceSectionTitle"><h3>Sales requiring review</h3></div><div class="workspaceTableWrap"><table class="workspaceTable"><thead><tr><th>Receipt</th><th>Customer</th><th>Total</th><th>Status</th><th>Action</th></tr></thead><tbody>${sales.length?sales.slice(0,40).map(sale=>`<tr><td>${escapeHTML(sale.id)}<small>${new Date(sale.createdAt).toLocaleString()}</small></td><td>${escapeHTML(sale.customerName)}</td><td>${money(sale.total)}</td><td>${escapeHTML(sale.status)}</td><td>${sale.status==="Voided"?"—":`<button class="workspaceButton secondary" type="button" onclick="voidPosSale('${escapeHTML(sale.id)}')">Void demo sale</button>`}</td></tr>`).join(""):`<tr><td colspan="5">No local POS sales.</td></tr>`}</tbody></table></div><div class="workspaceSectionTitle"><h3>Recent local activity</h3></div><div class="workspaceList">${events.length?events.map(entry=>`<article class="workspaceListItem"><div><strong>${escapeHTML(entry.action)}</strong><p>${escapeHTML(entry.detail)}</p><small>${new Date(entry.createdAt).toLocaleString()} · ${escapeHTML(entry.actor)}</small></div></article>`).join(""):`<div class="posEmpty">No local audit events yet.</div>`}</div>`;
}
async function voidPosSale(saleId){
 const sale=posSales.find(item=>item.id===saleId&&item.business===activeManagedShop&&item.status!=="Voided");
 if(!sale)return;
 const reason=prompt(`Reason for voiding ${sale.id}?`);if(!reason?.trim())return;
 if(!confirm(`Void ${sale.id}? This demo restores stock but does not refund any real payment.`))return;
 const previousStatus=sale.status,previousDue=sale.due,previousDueAt=sale.dueAt;
 sale.status="Voided";sale.due=0;sale.dueAt=null;sale.voidedAt=Date.now();sale.voidReason=reason.trim();
 try{
  await storePosRecord("sales",sale);
  sale.lines.forEach(line=>{const inventory=getProductInventory(line.productId);sellerInventory[line.productId]={stock:inventory.stock+line.quantity,sold:Math.max(0,inventory.sold-line.quantity)}});
  saveSellerData();persistPosMetadata();appendPosAudit("sale_voided",`${sale.id} · ${reason.trim()}`,activeManagedShop);
  renderCatalog();renderManagedStaffSection();toast("Demo sale voided; stock restored locally");
 }catch(error){sale.status=previousStatus;sale.due=previousDue;sale.dueAt=previousDueAt;console.error("Sale could not be voided",error);toast("Sale was not voided")}
}
function renderStaffReports(){
 const sales=getBusinessSales(activeManagedShop).filter(sale=>sale.status!=="Voided"),today=new Date().toDateString(),todaySales=sales.filter(sale=>new Date(sale.createdAt).toDateString()===today);
 const revenue=sales.reduce((sum,sale)=>sum+Number(sale.total||0),0),recorded=sales.reduce((sum,sale)=>sum+Number(sale.paid||0),0),unverified=sales.reduce((sum,sale)=>sum+(sale.payments||[]).filter(payment=>payment.status==="awaiting_verification").reduce((amount,payment)=>amount+Number(payment.amount||0),0),0),cost=sales.reduce((sum,sale)=>sum+sale.lines.reduce((lineSum,line)=>lineSum+Number(line.costPrice||0)*line.quantity,0),0),hasCost=sales.some(sale=>sale.lines.some(line=>line.costPrice>0));
 return `<div class="workspacePageHead"><div><h2>Reports</h2><p>Basic local POS summaries; not audited financial statements or tax reports.</p></div></div><div class="workspaceNotice">Profit is only an estimate where buying costs have been entered. Transfer/card entries are not verified; tax rules, expenses, refunds, inventory valuation, and reconciliation are excluded.</div><div class="posMetricGrid"><article class="posMetric"><span>Sales today (recorded)</span><strong>${money(todaySales.reduce((sum,sale)=>sum+sale.total,0))}</strong><small>${todaySales.length} transactions</small></article><article class="posMetric"><span>Total recorded sales</span><strong>${money(revenue)}</strong><small>${sales.length} transactions</small></article><article class="posMetric"><span>Amount entered at checkout</span><strong>${money(recorded)}</strong><small>${money(unverified)} transfer/card unverified</small></article><article class="posMetric"><span>Estimated gross margin</span><strong>${money(revenue-cost)}</strong><small>${hasCost?"Based on entered product costs":"Buying costs not entered"}</small></article></div><div class="workspaceSectionTitle"><h3>Recent transaction totals</h3></div><div class="workspaceTableWrap"><table class="workspaceTable"><thead><tr><th>Date</th><th>Receipt</th><th>Sale</th><th>Amount entered</th><th>Payment status</th></tr></thead><tbody>${sales.slice().sort((a,b)=>b.createdAt-a.createdAt).slice(0,30).map(sale=>`<tr><td>${new Date(sale.createdAt).toLocaleDateString()}</td><td>${escapeHTML(sale.id)}</td><td>${money(sale.total)}</td><td>${money(sale.paid)}</td><td>${escapeHTML(sale.paymentStatus||"Recorded locally")}</td></tr>`).join("")||`<tr><td colspan="5">No local sales yet.</td></tr>`}</tbody></table></div>`;
}
function renderStaffAdvice(){
 const tips=advisorSuggestions[activeManagedShop]||[];
 return `<div class="workspacePageHead"><div><h2>Weekly advisor</h2><p>Publish a practical note to the owner's POS dashboard.</p></div></div><form class="workspaceForm" onsubmit="publishAdvisorTip(event)"><label class="full">Suggestion title<input name="title" maxlength="100" required placeholder="Example: Restock popular items"></label><label class="full">Actionable tip<textarea name="message" maxlength="500" required placeholder="What should the owner do next?"></textarea></label><div class="full"><button class="workspaceButton primary" type="submit">Publish suggestion</button></div></form><div class="workspaceSectionTitle"><h3>Published suggestions</h3></div><div class="workspaceList">${tips.length?tips.slice().reverse().map(tip=>`<article class="workspaceListItem"><div><strong>${escapeHTML(tip.title)}</strong><p>${escapeHTML(tip.message)}</p><small>${new Date(tip.createdAt).toLocaleDateString()}</small></div></article>`).join(""):`<div class="posEmpty">No suggestions published for this business.</div>`}</div>`;
}
function publishAdvisorTip(event){
 event.preventDefault();const form=event.currentTarget,title=form.elements.title.value.trim(),message=form.elements.message.value.trim();
 if(!title||!message)return;
 const tips=advisorSuggestions[activeManagedShop]||[];tips.push({id:`TIP-${Date.now().toString(36).toUpperCase()}`,title,message,createdAt:Date.now()});advisorSuggestions[activeManagedShop]=tips;
 if(!writePosLocal("mbaleAdvisorSuggestions",advisorSuggestions)){tips.pop();toast("Suggestion was not saved");return}
 appendPosAudit("advisor_tip_published",title,activeManagedShop);renderManagedStaffSection();toast("Suggestion published locally to the owner dashboard");
}
function dismissAdvice(tipId){
 dismissedAdvice[activePosShop]=[...new Set([...(dismissedAdvice[activePosShop]||[]),tipId])];
 if(!writePosLocal("mbaleDismissedAdvice",dismissedAdvice)){toast("Could not save this read status");return}
 renderOwnerPosSection();
}
function appendPosAudit(action,detail,business){
 const entry={id:`AUD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,6)}`,business,action,detail,actor:"Demo staff",createdAt:Date.now()};
 posAuditEntries=[...posAuditEntries,entry].slice(-500);
 if(!writePosLocal("mbalePosAudit",posAuditEntries))console.error("Local audit entry could not be persisted",entry);
}
async function scanPosBarcode(){
 if(!("BarcodeDetector" in window)||!navigator.mediaDevices?.getUserMedia){toast("Camera barcode scanning is not supported here; use product search or a connected scanner");return}
 try{
  const supported=typeof BarcodeDetector.getSupportedFormats==="function"?await BarcodeDetector.getSupportedFormats():["ean_13","ean_8","upc_a","upc_e","code_128"],formats=["ean_13","ean_8","upc_a","upc_e","code_128"].filter(format=>supported.includes(format));
  if(!formats.length){toast("This camera does not support a product barcode format");return}
  const detector=new BarcodeDetector({formats}),video=el("posScannerVideo");
  posScanStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"}},audio:false});
  video.srcObject=posScanStream;el("posScanner").hidden=false;await video.play();
  posScanTimer=setInterval(async()=>{
   try{
    const codes=await detector.detect(video);if(!codes.length)return;
    const code=codes[0].rawValue,product=posBusinessProducts().find(item=>String(item.barcode||"")===code);
    stopPosScanner();if(product)addPosItem(product.id);else toast(`No product matches barcode ${code}`);
   }catch(error){console.error("Barcode scan failed",error);stopPosScanner();toast("Barcode scan failed; use product search")}
  },450);
 }catch(error){console.error("Camera access failed",error);stopPosScanner();toast("Camera could not be opened; check browser permission or use search")}
}
function stopPosScanner(){
 if(posScanTimer){clearInterval(posScanTimer);posScanTimer=null}
 if(posScanStream){posScanStream.getTracks().forEach(track=>track.stop());posScanStream=null}
 const video=el("posScannerVideo");if(video)video.srcObject=null;
 const scanner=el("posScanner");if(scanner)scanner.hidden=true;
}
function updateWorkspaceConnection(){
 const status=el("workspaceConnectionStatus");if(!status)return;
 status.textContent=currentPosStatus();status.classList.toggle("offline",!navigator.onLine);
}
window.addEventListener("beforeinstallprompt",event=>{event.preventDefault();deferredInstallPrompt=event});
async function installMbaleApp(){
 if(!deferredInstallPrompt){toast("Use your browser menu to install this app");return}
 const promptEvent=deferredInstallPrompt;
 try{promptEvent.prompt();await promptEvent.userChoice}catch(error){console.error("App installation prompt failed",error);toast("Could not start installation")}
 deferredInstallPrompt=null;
 if(el("modal")?.querySelector(".workspaceScreen")){const isStaff=el("modal").querySelector(".workspaceBrand small")?.textContent==="MANAGED OPERATIONS";if(isStaff)showManagedStaff(managedStaffSection);else showOwnerPOS(ownerPosSection)}
}
window.addEventListener("appinstalled",()=>{deferredInstallPrompt=null;toast("Mbale Shopper was installed")});
window.addEventListener("online",updateWorkspaceConnection);
window.addEventListener("offline",updateWorkspaceConnection);
if("serviceWorker" in navigator){
 window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(error=>{console.error("PWA service worker registration failed",error);toast("Offline app shell could not be installed")}));
}
function goHome(){if(!el("productPage").hidden){closeProductPage();return}window.scrollTo({top:0,behavior:"smooth"})}
initCategories();initSearchPromptTrack();initCategoryMegaMenu();renderHeroPromos();renderCategories();renderDeals();renderRecommendations();renderSpotlight("eventSpotlight","UPCOMING EVENTS",eventSpotlightItems,"event");renderSpotlight("influencerSpotlight","TOP CITY INFLUENCERS",influencerSpotlightItems,"influencer");renderServiceCategories();renderServiceFilters();renderServices();renderPartners();initSellerFilter();renderCatalog();updateCartBadge();updateMessageNotification();resumeSearchPromptRotation();
const routedShop=findShopRoute();
if(routedShop)showPublicStorefront(routedShop);else{const initialProductId=Number(location.hash.match(/^#product-(\d+)$/)?.[1]);if(initialProductId)openProduct(initialProductId,true)}
