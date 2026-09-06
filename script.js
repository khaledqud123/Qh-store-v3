/* =========================================================
   QH GAMING STORE — V3
   CORE FRONTEND SYSTEM
========================================================= */

"use strict";


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    {
        id: 1,
        name: "PlayStation 5 Slim",
        nameAr: "بلايستيشن 5 سليم",
        category: "PlayStation",
        categoryAr: "بلايستيشن",
        price: 499,
        oldPrice: 549,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=85",
        description: "The latest PlayStation console designed for next-generation gaming.",
        descriptionAr: "أحدث أجهزة بلايستيشن المصممة لتجربة ألعاب الجيل الجديد."
    },

    {
        id: 2,
        name: "Xbox Series X",
        nameAr: "إكس بوكس سيريس X",
        category: "Xbox",
        categoryAr: "إكس بوكس",
        price: 459,
        oldPrice: 499,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=85",
        description: "Powerful next-generation Xbox gaming with incredible performance.",
        descriptionAr: "أداء قوي من الجيل الجديد لتجربة ألعاب إكس بوكس مميزة."
    },

    {
        id: 3,
        name: "Nintendo Switch OLED",
        nameAr: "نينتندو سويتش OLED",
        category: "Nintendo",
        categoryAr: "نينتندو",
        price: 329,
        oldPrice: 359,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1000&q=85",
        description: "Portable gaming with a vibrant OLED display.",
        descriptionAr: "تجربة ألعاب محمولة مع شاشة OLED مذهلة."
    },

    {
        id: 4,
        name: "Gaming PC RTX",
        nameAr: "كمبيوتر ألعاب RTX",
        category: "Computers",
        categoryAr: "كمبيوتر",
        price: 899,
        oldPrice: 999,
        badge: "LIMITED",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85",
        description: "A high-performance gaming machine built for serious players.",
        descriptionAr: "جهاز ألعاب عالي الأداء مصمم للاعبين الجادين."
    },

    {
        id: 5,
        name: "DualSense Wireless Controller",
        nameAr: "يد تحكم DualSense",
        category: "Accessories",
        categoryAr: "إكسسوارات",
        price: 69,
        oldPrice: 79,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1000&q=85",
        description: "Immersive PlayStation controller with advanced haptic feedback.",
        descriptionAr: "يد تحكم بلايستيشن مع تقنيات الاهتزاز المتقدمة."
    },

    {
        id: 6,
        name: "Wireless Gaming Headset",
        nameAr: "سماعة ألعاب لاسلكية",
        category: "Headsets",
        categoryAr: "سماعات",
        price: 89,
        oldPrice: 109,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1000&q=85",
        description: "Wireless gaming audio with immersive sound and comfortable fit.",
        descriptionAr: "صوت ألعاب لاسلكي غامر مع راحة عالية أثناء اللعب."
    },

    {
        id: 7,
        name: "Gaming Mechanical Keyboard",
        nameAr: "كيبورد ألعاب ميكانيكي",
        category: "Accessories",
        categoryAr: "إكسسوارات",
        price: 49,
        oldPrice: 59,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
        description: "Mechanical gaming keyboard with responsive switches.",
        descriptionAr: "كيبورد ميكانيكي للألعاب مع استجابة سريعة."
    },

    {
        id: 8,
        name: "Gaming Mouse Pro",
        nameAr: "ماوس ألعاب احترافي",
        category: "Accessories",
        categoryAr: "إكسسوارات",
        price: 39,
        oldPrice: 49,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1000&q=85",
        description: "Lightweight precision gaming mouse.",
        descriptionAr: "ماوس ألعاب خفيف بدقة عالية."
    },

    {
        id: 9,
        name: "PlayStation Game Collection",
        nameAr: "مجموعة ألعاب بلايستيشن",
        category: "CD Games",
        categoryAr: "ألعاب CD",
        price: 59,
        oldPrice: 69,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1592840496694-26c035b52b48?auto=format&fit=crop&w=1000&q=85",
        description: "Discover your next favorite game.",
        descriptionAr: "اكتشف لعبتك القادمة المفضلة."
    },

    {
        id: 10,
        name: "Gaming Gift Card",
        nameAr: "بطاقة ألعاب",
        category: "Gaming Cards",
        categoryAr: "بطاقات ألعاب",
        price: 25,
        oldPrice: 25,
        badge: "DIGITAL",
        image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?auto=format&fit=crop&w=1000&q=85",
        description: "Digital gaming credit for your favorite platform.",
        descriptionAr: "رصيد رقمي لمنصة الألعاب المفضلة لديك."
    },

    {
        id: 11,
        name: "Used PlayStation Console",
        nameAr: "بلايستيشن مستعمل",
        category: "Used",
        categoryAr: "مستعمل",
        price: 279,
        oldPrice: 319,
        badge: "USED",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=85",
        description: "Quality checked used gaming hardware.",
        descriptionAr: "أجهزة ألعاب مستعملة تم فحص جودتها."
    },

    {
        id: 12,
        name: "Console Maintenance Kit",
        nameAr: "عدة صيانة أجهزة الألعاب",
        category: "Maintenance",
        categoryAr: "صيانة",
        price: 29,
        oldPrice: 35,
        badge: "TOOLS",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=85",
        description: "Useful equipment for gaming hardware maintenance.",
        descriptionAr: "معدات مفيدة لصيانة أجهزة الألعاب."
    },

    {
        id: 13,
        name: "Gaming Figure",
        nameAr: "مجسم ألعاب",
        category: "Toys",
        categoryAr: "ألعاب",
        price: 35,
        oldPrice: 39,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=85",
        description: "Collectible gaming figure for your setup.",
        descriptionAr: "مجسم ألعاب مميز لإضافة لمسة إلى إعدادك."
    },

    {
        id: 14,
        name: "4K Gaming Monitor",
        nameAr: "شاشة ألعاب 4K",
        category: "Computers",
        categoryAr: "كمبيوتر",
        price: 349,
        oldPrice: 399,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85",
        description: "High-resolution gaming display for immersive gameplay.",
        descriptionAr: "شاشة ألعاب عالية الدقة لتجربة لعب غامرة."
    },

    {
        id: 15,
        name: "RGB Gaming Desk Setup",
        nameAr: "مكتب ألعاب RGB",
        category: "Accessories",
        categoryAr: "إكسسوارات",
        price: 179,
        oldPrice: 219,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1000&q=85",
        description: "Premium gaming desk setup with modern RGB styling.",
        descriptionAr: "مكتب ألعاب عصري بتصميم RGB فاخر."
    },

    {
        id: 16,
        name: "Xbox Wireless Controller",
        nameAr: "يد تحكم إكس بوكس لاسلكية",
        category: "Accessories",
        categoryAr: "إكسسوارات",
        price: 65,
        oldPrice: 75,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1000&q=85",
        description: "Responsive wireless controller built for Xbox gaming.",
        descriptionAr: "يد تحكم لاسلكية سريعة الاستجابة لألعاب إكس بوكس."
    }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

    {
        name: "PlayStation",
        nameAr: "بلايستيشن",
        description: "Consoles, games & accessories",
        descriptionAr: "أجهزة وألعاب وإكسسوارات",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=85",
        large: true
    },

    {
        name: "Xbox",
        nameAr: "إكس بوكس",
        description: "Power your next game",
        descriptionAr: "ابدأ لعبتك القادمة",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Nintendo",
        nameAr: "نينتندو",
        description: "Play anywhere",
        descriptionAr: "العب في أي مكان",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Computers",
        nameAr: "كمبيوتر",
        description: "Built for performance",
        descriptionAr: "مصمم للأداء",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85",
        large: true
    },

    {
        name: "Headsets",
        nameAr: "سماعات",
        description: "Hear every moment",
        descriptionAr: "اسمع كل لحظة",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Gaming Accessories",
        nameAr: "إكسسوارات الألعاب",
        description: "Complete your setup",
        descriptionAr: "أكمل إعدادك",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "CD Games",
        nameAr: "ألعاب CD",
        description: "Your next adventure",
        descriptionAr: "مغامرتك القادمة",
        image: "https://images.unsplash.com/photo-1592840496694-26c035b52b48?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Gaming Cards",
        nameAr: "بطاقات ألعاب",
        description: "Instant gaming credit",
        descriptionAr: "رصيد ألعاب فوري",
        image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Used",
        nameAr: "مستعمل",
        description: "Checked & ready to play",
        descriptionAr: "مفحوص وجاهز للعب",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Maintenance",
        nameAr: "صيانة",
        description: "Keep your gear running",
        descriptionAr: "حافظ على أجهزتك",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=85"
    },

    {
        name: "Toys",
        nameAr: "ألعاب",
        description: "Fun beyond the screen",
        descriptionAr: "متعة خارج الشاشة",
        image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=85"
    }

];


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        announcement: "NEW ARRIVALS ARE HERE • LEVEL UP YOUR SETUP",
        delivery: "FAST DELIVERY ACROSS JORDAN",

        navHome: "Home",
        navCategories: "Categories",
        navNew: "New Arrivals",
        navShop: "Shop",
        navAbout: "About",

        heroEyebrow: "JORDAN'S GAMING DESTINATION",
        heroTitleOne: "PLAY.",
        heroTitleTwo: "UNLIMITED.",
        heroTitleThree: "YOUR WAY.",

        heroDescription:
            "Discover consoles, games, PCs, accessories and everything you need to build your ultimate setup.",

        shopNow: "Shop Now",
        exploreCategories: "Explore Categories",

        statCategories: "Categories",
        statGaming: "Gaming",
        statJordan: "Local Store",

        featured: "FEATURED",
        nextLevel: "THE NEXT LEVEL",
        availableNow: "AVAILABLE NOW",

        discover: "DISCOVER",
        categoryTitle: "Everything Gaming.",
        categoryDescription:
            "From consoles to components, discover the products that make your setup yours.",

        fresh: "FRESH IN",
        newArrivals: "New Arrivals.",

        collection: "THE COLLECTION",
        shopTitle: "Find Your Gear.",
        viewAll: "View All",
        filters: "Filters",

        yourSetup: "YOUR SETUP",
        setupTitle: "Build something yours.",
        setupDescription:
            "Your setup should match the way you play. Find the console, display, audio and accessories that complete your experience.",
        buildSetup: "Build Your Setup",

        benefitOneTitle: "Authentic Gear",
        benefitOneText:
            "Shop gaming products selected for quality and reliability.",

        benefitTwoTitle: "Local Delivery",
        benefitTwoText:
            "Convenient delivery options across Jordan.",

        benefitThreeTitle: "Secure Shopping",
        benefitThreeText:
            "A shopping experience designed around your security.",

        benefitFourTitle: "Gaming Support",
        benefitFourText:
            "Real people who understand gaming and technology.",

        aboutKicker: "ABOUT QH",
        aboutTitle: "More than a store.",
        aboutText:
            "QH Gaming Store is built around one simple idea: gaming should be easier to enjoy. Whether you're upgrading your setup, looking for your next game or searching for the perfect accessory, QH brings it together in one place.",
        discoverQH: "Discover QH",

        socialTitle: "Stay in the game.",
        socialText:
            "Follow QH for new arrivals, gaming drops, deals and what's happening next.",

        finalTitle: "READY TO LEVEL UP?",
        startShopping: "Start Shopping",

        footerDescription: "Gaming. Technology. Entertainment.",
        footerShop: "Shop",
        footerExplore: "Explore",
        footerHelp: "Help",
        footerContact: "Contact",
        footerDelivery: "Delivery",
        footerTerms: "Terms",
        footerMade: "Built for gamers.",

        search: "SEARCH",
        searchPlaceholder: "Search products...",

        yourCart: "YOUR CART",
        shoppingCart: "Shopping Cart",
        subtotal: "Subtotal",
        checkout: "Checkout",
        checkoutNotice:
            "Checkout and online payments will be connected in the next commerce phase.",

        noProducts: "No products found.",
        tryDifferent: "Try another category or search term.",

        addToCart: "Add to Cart",
        viewProduct: "View Product",
        remove: "Remove",
        emptyCart: "Your cart is empty.",
        added: "Added to cart",
        removed: "Removed from cart",
        checkoutSoon: "Checkout will be connected in the commerce phase."

    },


    ar: {

        announcement: "وصلت المنتجات الجديدة • طوّر إعدادك",
        delivery: "توصيل سريع في جميع أنحاء الأردن",

        navHome: "الرئيسية",
        navCategories: "التصنيفات",
        navNew: "وصل حديثاً",
        navShop: "المتجر",
        navAbout: "من نحن",

        heroEyebrow: "وجهتك للألعاب في الأردن",
        heroTitleOne: "العب.",
        heroTitleTwo: "بلا حدود.",
        heroTitleThree: "بطريقتك.",

        heroDescription:
            "اكتشف أجهزة الألعاب والألعاب والكمبيوتر والإكسسوارات وكل ما تحتاجه لبناء إعدادك المثالي.",

        shopNow: "تسوق الآن",
        exploreCategories: "استكشف التصنيفات",

        statCategories: "تصنيف",
        statGaming: "ألعاب",
        statJordan: "متجر محلي",

        featured: "مميز",
        nextLevel: "المستوى القادم",
        availableNow: "متوفر الآن",

        discover: "اكتشف",
        categoryTitle: "كل ما يخص الألعاب.",
        categoryDescription:
            "من الأجهزة إلى المكونات، اكتشف المنتجات التي تجعل إعدادك مميزاً.",

        fresh: "وصل حديثاً",
        newArrivals: "أحدث المنتجات.",

        collection: "المجموعة",
        shopTitle: "اعثر على معداتك.",
        viewAll: "عرض الكل",
        filters: "تصفية",

        yourSetup: "إعدادك",
        setupTitle: "ابنِ شيئاً خاصاً بك.",
        setupDescription:
            "إعدادك يجب أن يناسب طريقة لعبك. اختر الجهاز والشاشة والصوت والإكسسوارات التي تكمل تجربتك.",
        buildSetup: "ابنِ إعدادك",

        benefitOneTitle: "منتجات موثوقة",
        benefitOneText:
            "منتجات ألعاب مختارة بعناية من حيث الجودة والاعتمادية.",

        benefitTwoTitle: "توصيل محلي",
        benefitTwoText:
            "خيارات توصيل مريحة في جميع أنحاء الأردن.",

        benefitThreeTitle: "تسوق آمن",
        benefitThreeText:
            "تجربة تسوق مصممة لتكون آمنة ومريحة.",

        benefitFourTitle: "دعم للألعاب",
        benefitFourText:
            "فريق يفهم الألعاب والتقنية.",

        aboutKicker: "عن QH",
        aboutTitle: "أكثر من مجرد متجر.",
        aboutText:
            "تم بناء QH Gaming Store حول فكرة بسيطة: يجب أن تكون تجربة الألعاب أسهل وأكثر متعة. سواء كنت تطور إعدادك أو تبحث عن لعبتك القادمة أو تحتاج إلى الإكسسوار المثالي، ستجد كل ذلك في مكان واحد.",
        discoverQH: "اكتشف QH",

        socialTitle: "ابقَ في اللعبة.",
        socialText:
            "تابع QH لمعرفة المنتجات الجديدة والعروض وكل ما هو قادم.",

        finalTitle: "جاهز للمستوى القادم؟",
        startShopping: "ابدأ التسوق",

        footerDescription: "ألعاب. تقنية. ترفيه.",
        footerShop: "المتجر",
        footerExplore: "استكشف",
        footerHelp: "المساعدة",
        footerContact: "تواصل معنا",
        footerDelivery: "التوصيل",
        footerTerms: "الشروط",
        footerMade: "صُمم للاعبين.",

        search: "بحث",
        searchPlaceholder: "ابحث عن المنتجات...",

        yourCart: "سلتك",
        shoppingCart: "سلة التسوق",
        subtotal: "المجموع",
        checkout: "إتمام الطلب",
        checkoutNotice:
            "سيتم ربط الدفع وإتمام الطلب في المرحلة القادمة من المتجر.",

        noProducts: "لم يتم العثور على منتجات.",
        tryDifferent: "جرّب تصنيفاً أو كلمة بحث مختلفة.",

        addToCart: "أضف إلى السلة",
        viewProduct: "عرض المنتج",
        remove: "حذف",
        emptyCart: "سلتك فارغة.",
        added: "تمت الإضافة إلى السلة",
        removed: "تم حذف المنتج",
        checkoutSoon: "سيتم ربط إتمام الطلب في المرحلة التجارية القادمة."

    }

};


/* =========================================================
   STATE
========================================================= */

let currentLanguage =
    localStorage.getItem("qh-language") || "en";

let currentCategory = "All";

let cart =
    JSON.parse(localStorage.getItem("qh-neon-cart") || "[]");

let wishlist =
    JSON.parse(localStorage.getItem("qh-neon-wishlist") || "[]");

let currentArrival = 0;

let arrivalTimer = null;

const arrivals =
    products.filter(product =>
        ["NEW", "HOT", "LIMITED"].includes(product.badge)
    ).slice(0,4);


/* =========================================================
   DOM
========================================================= */

const body = document.body;

const siteHeader =
    document.getElementById("siteHeader");

const cartCount =
    document.getElementById("cartCount");

const categoryGrid =
    document.getElementById("categoryGrid");

const categoryFilters =
    document.getElementById("categoryFilters");

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const cartDrawer =
    document.getElementById("cartDrawer");

const drawerBackdrop =
    document.getElementById("drawerBackdrop");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const searchOverlay =
    document.getElementById("searchOverlay");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");

const productModal =
    document.getElementById("productModal");

const productModalContent =
    document.getElementById("productModalContent");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =========================================================
   HELPERS
========================================================= */

function t(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


function getProductName(product) {

    return currentLanguage === "ar"
        ? product.nameAr
        : product.name;

}


function getCategoryName(category) {

    return currentLanguage === "ar"
        ? category.categoryAr
        : category.category;

}


function saveState() {

    localStorage.setItem(
        "qh-neon-cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "qh-neon-wishlist",
        JSON.stringify(wishlist)
    );

}


function formatPrice(value) {

    return `${value} JOD`;

}


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer =
        setTimeout(() => {
            toast.classList.remove("show");
        }, 2400);

}


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

function setLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    localStorage.setItem(
        "qh-language",
        language
    );

    body.classList.toggle(
        "rtl",
        language === "ar"
    );

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (translations[language][key]) {

                element.textContent =
                    translations[language][key];

            }

        });


    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.i18nPlaceholder;

            element.placeholder =
                translations[language][key] || "";

        });


    document
        .querySelectorAll(".language-option")
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );

        });


    document
        .querySelectorAll(".mobile-language-option")
        .forEach(option => {

            option.classList.toggle(
                "active",
                option.dataset.mobileLanguage === language
            );

        });


    renderCategories();
    renderFilters();
    renderProducts();
    renderArrival();
    renderCart();

}


document
    .querySelectorAll(".language-option")
    .forEach(option => {

        option.addEventListener("click", () => {

            setLanguage(
                option.dataset.language
            );

        });

    });


document
    .querySelectorAll(".mobile-language-option")
    .forEach(option => {

        option.addEventListener("click", () => {

            setLanguage(
                option.dataset.mobileLanguage
            );

            closeMobileMenu();

        });

    });


/* =========================================================
   CATEGORY RENDER
========================================================= */

function renderCategories() {

    categoryGrid.innerHTML =
        categories.map((category,index) => {

            const name =
                currentLanguage === "ar"
                    ? category.nameAr
                    : category.name;

            const description =
                currentLanguage === "ar"
                    ? category.descriptionAr
                    : category.description;

            return `

                <article
                    class="category-card ${category.large ? "large" : ""} reveal"
                    data-category="${category.name}"
                >

                    <img
                        class="category-image"
                        src="${category.image}"
                        alt="${name}"
                        loading="lazy"
                    >

                    <div class="category-image-overlay"></div>

                    <div class="category-corner"></div>

                    <div class="category-info">

                        <span class="category-number">
                            ${String(index + 1).padStart(2,"0")}
                        </span>

                        <h3>
                            ${name}
                        </h3>

                        <p>
                            ${description}
                        </p>

                    </div>

                </article>

            `;

        }).join("");


    document
        .querySelectorAll(".category-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    currentCategory =
                        card.dataset.category;

                    renderFilters();
                    renderProducts();

                    document
                        .getElementById("shop")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                }
            );

        });


    observeReveals();

}


/* =========================================================
   FILTERS
========================================================= */

function renderFilters() {

    const filterCategories = [
        "All",
        ...categories.map(category => category.name)
    ];

    categoryFilters.innerHTML =
        filterCategories.map(category => {

            let label = category;

            if (category === "All") {

                label =
                    currentLanguage === "ar"
                        ? "الكل"
                        : "All";

            } else {

                const found =
                    categories.find(
                        item => item.name === category
                    );

                if (found) {

                    label =
                        currentLanguage === "ar"
                            ? found.nameAr
                            : found.name;

                }

            }

            return `

                <button
                    class="filter-chip ${currentCategory === category ? "active" : ""}"
                    data-filter="${category}"
                    type="button"
                >
                    ${label}
                </button>

            `;

        }).join("");


    document
        .querySelectorAll(".filter-chip")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentCategory =
                        button.dataset.filter;

                    renderFilters();
                    renderProducts();

                }
            );

        });

}


/* =========================================================
   PRODUCT RENDER
========================================================= */

function renderProducts() {

    const visibleProducts =
        currentCategory === "All"
            ? products
            : products.filter(
                product =>
                    product.category === currentCategory
            );


    if (!visibleProducts.length) {

        productsGrid.innerHTML = "";

        emptyProducts.classList.add("show");

        return;

    }


    emptyProducts.classList.remove("show");


    productsGrid.innerHTML =
        visibleProducts.map(product => {

            const name =
                getProductName(product);

            const category =
                currentLanguage === "ar"
                    ? product.categoryAr
                    : product.category;

            const isWishlisted =
                wishlist.includes(product.id);


            return `

                <article
                    class="product-card reveal"
                    data-product-id="${product.id}"
                >

                    <div class="product-image-wrap">

                        <img
                            src="${product.image}"
                            alt="${name}"
                            loading="lazy"
                        >

                        <span class="product-badge-small">
                            ${product.badge}
                        </span>

                        <button
                            class="wishlist-button ${isWishlisted ? "active" : ""}"
                            data-wishlist="${product.id}"
                            type="button"
                            aria-label="Wishlist"
                        >
                            ${isWishlisted ? "♥" : "♡"}
                        </button>

                    </div>


                    <div class="product-info">

                        <span class="product-category">
                            ${category}
                        </span>

                        <h3>
                            ${name}
                        </h3>


                        <div class="product-bottom">

                            <strong class="product-price">
                                ${formatPrice(product.price)}
                            </strong>

                            <button
                                class="product-add"
                                data-add="${product.id}"
                                type="button"
                                aria-label="${t("addToCart")}"
                            >
                                <span>+</span>
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");


    attachProductEvents();

    observeReveals();

}


/* =========================================================
   PRODUCT EVENTS
========================================================= */

function attachProductEvents() {

    document
        .querySelectorAll("[data-add]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    addToCart(
                        Number(button.dataset.add)
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-wishlist]")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleWishlist(
                        Number(button.dataset.wishlist)
                    );

                }
            );

        });


    document
        .querySelectorAll(".product-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    openProductModal(
                        Number(card.dataset.productId)
                    );

                }
            );

        });

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                productId => productId !== id
            );

        showToast(t("removed"));

    } else {

        wishlist.push(id);

        showToast(
            currentLanguage === "ar"
                ? "تمت الإضافة إلى المفضلة"
                : "Added to wishlist"
        );

    }

    saveState();

    renderProducts();

}


/* =========================================================
   CART
========================================================= */

function addToCart(id) {

    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id,
            quantity: 1
        });

    }


    saveState();

    renderCart();

    showToast(t("added"));

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveState();

    renderCart();

    showToast(t("removed"));

}


function changeQuantity(id, change) {

    const item =
        cart.find(
            cartItem => cartItem.id === id
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveState();

    renderCart();

}


function renderCart() {

    const itemCount =
        cart.reduce(
            (total,item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        itemCount;


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="cart-empty">
                ${t("emptyCart")}
            </div>

        `;

        cartTotal.textContent =
            formatPrice(0);

        return;

    }


    let total = 0;


    cartItems.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );

            if (!product) return "";


            const subtotal =
                product.price *
                item.quantity;

            total += subtotal;


            return `

                <div class="cart-item">

                    <img
                        class="cart-item-image"
                        src="${product.image}"
                        alt="${getProductName(product)}"
                    >

                    <div class="cart-item-info">

                        <strong>
                            ${getProductName(product)}
                        </strong>

                        <small>
                            ${formatPrice(product.price)}
                        </small>

                        <div class="cart-quantity">

                            <button
                                data-minus="${product.id}"
                                type="button"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                data-plus="${product.id}"
                                type="button"
                            >
                                +
                            </button>

                        </div>

                        <button
                            class="cart-remove"
                            data-remove="${product.id}"
                            type="button"
                        >
                            ${t("remove")}
                        </button>

                    </div>


                    <strong class="cart-item-price">
                        ${formatPrice(subtotal)}
                    </strong>

                </div>

            `;

        }).join("");


    cartTotal.textContent =
        formatPrice(total);


    attachCartEvents();

}


function attachCartEvents() {

    document
        .querySelectorAll("[data-minus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        Number(button.dataset.minus),
                        -1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-plus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        Number(button.dataset.plus),
                        1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-remove]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(button.dataset.remove)
                    );

                }
            );

        });

}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart() {

    cartDrawer.classList.add("open");

    drawerBackdrop.classList.add("open");

    body.classList.add("modal-open");

}


function closeCart() {

    cartDrawer.classList.remove("open");

    drawerBackdrop.classList.remove("open");

    body.classList.remove("modal-open");

}


document
    .getElementById("cartButton")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


drawerBackdrop.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    const description =
        currentLanguage === "ar"
            ? product.descriptionAr
            : product.description;


    const category =
        currentLanguage === "ar"
            ? product.categoryAr
            : product.category;


    productModalContent.innerHTML = `

        <div class="modal-product">

            <div class="modal-product-image">

                <img
                    src="${product.image}"
                    alt="${getProductName(product)}"
                >

            </div>


            <div class="modal-product-info">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <span
                    class="product-category"
                    style="margin-top:18px;"
                >
                    ${category}
                </span>

                <h2>
                    ${getProductName(product)}
                </h2>

                <p class="modal-product-description">
                    ${description}
                </p>

                <strong class="modal-price">
                    ${formatPrice(product.price)}
                </strong>

                <div class="modal-actions">

                    <button
                        class="primary-button"
                        id="modalAddToCart"
                        type="button"
                    >
                        ${t("addToCart")}
                        <span>+</span>
                    </button>

                </div>

            </div>

        </div>

    `;


    document
        .getElementById("modalAddToCart")
        .addEventListener(
            "click",
            () => {

                addToCart(product.id);

                closeProductModal();

            }
        );


    productModal.classList.add("open");

    body.classList.add("modal-open");

}


function closeProductModal() {

    productModal.classList.remove("open");

    body.classList.remove("modal-open");

}


document
    .getElementById("closeProductModal")
    .addEventListener(
        "click",
        closeProductModal
    );


document
    .getElementById("productModalBackdrop")
    .addEventListener(
        "click",
        closeProductModal
    );


/* =========================================================
   NEW ARRIVALS
========================================================= */

function renderArrival() {

    const product =
        arrivals[currentArrival];

    if (!product) return;


    const description =
        currentLanguage === "ar"
            ? product.descriptionAr
            : product.description;


    const oldPrice =
        product.oldPrice > product.price
            ? `
                <span>
                    ${formatPrice(product.oldPrice)}
                </span>
              `
            : "";


    document.getElementById(
        "arrivalShowcase"
    ).innerHTML = `

        <article class="arrival-slide">

            <div class="arrival-image">

                <img
                    src="${product.image}"
                    alt="${getProductName(product)}"
                >

            </div>


            <div class="arrival-content">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <h3>
                    ${getProductName(product)}
                </h3>

                <p>
                    ${description}
                </p>

                <strong class="arrival-price">
                    ${formatPrice(product.price)}
                    ${oldPrice}
                </strong>

                <div class="arrival-actions">

                    <button
                        class="primary-button"
                        data-arrival-add="${product.id}"
                        type="button"
                    >
                        ${t("addToCart")}
                        <span>+</span>
                    </button>

                </div>

            </div>

        </article>

    `;


    const progress =
        document.getElementById(
            "arrivalProgressBar"
        );

    progress.style.transition = "none";

    progress.style.width =
        `${((currentArrival + 1) / arrivals.length) * 100}%`;


    requestAnimationFrame(() => {

        progress.style.transition =
            "width 5s linear";

        progress.style.width = "100%";

    });


    document
        .querySelector("[data-arrival-add]")
        ?.addEventListener(
            "click",
            event => {

                addToCart(
                    Number(
                        event.currentTarget.dataset.arrivalAdd
                    )
                );

            }
        );

}


function nextArrival() {

    currentArrival =
        (currentArrival + 1) %
        arrivals.length;

    renderArrival();

}


function previousArrival() {

    currentArrival =
        (currentArrival - 1 + arrivals.length) %
        arrivals.length;

    renderArrival();

}


function startArrivalTimer() {

    clearInterval(arrivalTimer);

    arrivalTimer =
        setInterval(
            nextArrival,
            5000
        );

}


document
    .getElementById("arrivalNext")
    .addEventListener(
        "click",
        () => {

            nextArrival();
            startArrivalTimer();

        }
    );


document
    .getElementById("arrivalPrevious")
    .addEventListener(
        "click",
        () => {

            previousArrival();
            startArrivalTimer();

        }
    );


/* =========================================================
   SEARCH
========================================================= */

function openSearch() {

    searchOverlay.classList.add("open");

    body.classList.add("modal-open");

    setTimeout(
        () => searchInput.focus(),
        200
    );

}


function closeSearch() {

    searchOverlay.classList.remove("open");

    body.classList.remove("modal-open");

    searchInput.value = "";

    renderSearchResults("");

}


document
    .getElementById("searchButton")
    .addEventListener(
        "click",
        openSearch
    );


document
    .getElementById("closeSearch")
    .addEventListener(
        "click",
        closeSearch
    );


searchInput.addEventListener(
    "input",
    () => {

        renderSearchResults(
            searchInput.value
        );

    }
);


function renderSearchResults(query) {

    const cleanQuery =
        query.trim().toLowerCase();


    if (!cleanQuery) {

        searchResults.innerHTML = "";

        return;

    }


    const matches =
        products.filter(product => {

            const name =
                `${product.name} ${product.nameAr}`.toLowerCase();

            const category =
                `${product.category} ${product.categoryAr}`.toLowerCase();

            return (
                name.includes(cleanQuery) ||
                category.includes(cleanQuery)
            );

        });


    if (!matches.length) {

        searchResults.innerHTML = `

            <div class="cart-empty">
                ${t("noProducts")}
            </div>

        `;

        return;

    }


    searchResults.innerHTML =
        matches.map(product => `

            <button
                class="search-result"
                data-search-product="${product.id}"
                type="button"
            >

                <img
                    src="${product.image}"
                    alt="${getProductName(product)}"
                >

                <span class="search-result-info">

                    <strong>
                        ${getProductName(product)}
                    </strong>

                    <small>
                        ${formatPrice(product.price)}
                    </small>

                </span>

            </button>

        `).join("");


    document
        .querySelectorAll("[data-search-product]")
        .forEach(result => {

            result.addEventListener(
                "click",
                () => {

                    closeSearch();

                    openProductModal(
                        Number(
                            result.dataset.searchProduct
                        )
                    );

                }
            );

        });

}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileNavigation =
    document.getElementById(
        "mobileNavigation"
    );


function openMobileMenu() {

    mobileNavigation.classList.add("open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "true"
    );

}


function closeMobileMenu() {

    mobileNavigation.classList.remove("open");

    mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
    );

}


mobileMenuButton.addEventListener(
    "click",
    () => {

        if (
            mobileNavigation.classList.contains("open")
        ) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }
);


document
    .querySelectorAll(".mobile-nav-inner > a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   CHECKOUT PLACEHOLDER
========================================================= */

document
    .getElementById("checkoutButton")
    .addEventListener(
        "click",
        () => {

            showToast(
                t("checkoutSoon")
            );

        }
    );


/* =========================================================
   VIEW ALL
========================================================= */

document
    .getElementById("viewAllProducts")
    .addEventListener(
        "click",
        () => {

            currentCategory = "All";

            renderFilters();
            renderProducts();

            document
                .getElementById("shop")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* =========================================================
   HEADER SCROLL
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );

    },
    { passive: true }
);


/* =========================================================
   SCROLL REVEALS
========================================================= */

let revealObserver;


function observeReveals() {

    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: .08
                }
            );

    }


    document
        .querySelectorAll(".reveal:not(.visible)")
        .forEach(element => {

            revealObserver.observe(element);

        });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const navObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;


                navLinks.forEach(link => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") ===
                        `#${entry.target.id}`
                    );

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );


sections.forEach(section => {

    navObserver.observe(section);

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") return;

        closeSearch();
        closeCart();
        closeProductModal();
        closeMobileMenu();

    }
);


/* =========================================================
   YEAR
========================================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================================
   INITIALIZE
========================================================= */

function initializeQH() {

    setLanguage(
        currentLanguage
    );

    renderCategories();

    renderFilters();

    renderProducts();

    renderCart();

    renderArrival();

    startArrivalTimer();

    observeReveals();

}


initializeQH();
