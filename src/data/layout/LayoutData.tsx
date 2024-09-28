// Header Data
export const headerData = {
  categories: [
    {
      id: "Products",
      name: "Products",
      featured: [
        {
          name: "New Arrivals",
          href: "/collections",
          imageSrc:
            "https://res.cloudinary.com/dchh1a7k8/image/upload/v1676699141/items/whiteTote_lwcm2h.webp",
          imageAlt: "Tote bag",
        },
        {
          name: "Basic Tees",
          href: "/collections/Tops",

          imageSrc:
            "https://res.cloudinary.com/dchh1a7k8/image/upload/v1676699141/items/blackT_front_ro4ws2.webp",
          imageAlt: "black tees",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          href: "/collections/Clothing",

          items: [{ name: "Tops", href: "/collections/Tops" }],
        },
        {
          id: "accessories",
          name: "Accessories",
          href: "/collections/Accessories",

          items: [{ name: "Bags", href: "/collections/Bags" }],
        },
      ],
    },
  ],
  pages: [
    { name: "NFTs", href: "/nfts" },
    { name: "Shop All", href: "/collections" },
  ],
};

// Footer Data
export const footerTerms = [
  {
    name: "Terms",
    link: "/",
  },
  {
    name: " Privacy Policy",
    link: "/",
  },
];

export const footerMarketPlace = [
  {
    name: "All NFTs",
    link: "/nfts",
  },
  {
    name: "Products",
    link: "/collections",
  },
];

export const footerResource = [
  {
    name: "Documentation",
    link: "https://github.com/Regulus55/GU-shop",
  },
  {
    name: "Help Center",
    link: "https://github.com/Regulus55/GU-shop",
  },
  {
    name: "Blog",
    link: "https://github.com/Regulus55/GU-shop",
  },
  {
    name: "Support Center",
    link: "https://github.com/Regulus55/GU-shop",
  },
];

export const footerCompany = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "https://github.com/Regulus55/GU-shop",
  },
  {
    name: "Privacy Policy",
    link: "https://github.com/Regulus55/GU-shop",
  },
];

export const footerSocial = [
  {
    path: "M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z",
    link: "https://github.com/Regulus55/GU-shop",
    name: "Naver",
  },
  {
    path: "M22.125 0H1.875C.8394 0 0 .8394 0 1.875v20.25C0 23.1606.8394 24 1.875 24h20.25C23.1606 24 24 23.1606 24 22.125V1.875C24 .8394 23.1606 0 22.125 0zM12 18.75c-.591 0-1.1697-.0413-1.7317-.1209-.5626.3965-3.813 2.6797-4.1198 2.7225 0 0-.1258.0489-.2328-.0141s-.0876-.2282-.0876-.2282c.0322-.2198.8426-3.0183.992-3.5333-2.7452-1.36-4.5701-3.7686-4.5701-6.5135C2.25 6.8168 6.6152 3.375 12 3.375s9.75 3.4418 9.75 7.6875c0 4.2457-4.3652 7.6875-9.75 7.6875zM8.0496 9.8672h-.8777v3.3417c0 .2963-.2523.5372-.5625.5372s-.5625-.2409-.5625-.5372V9.8672h-.8777c-.3044 0-.552-.2471-.552-.5508s.2477-.5508.552-.5508h2.8804c.3044 0 .552.2471.552.5508s-.2477.5508-.552.5508zm10.9879 2.9566a.558.558 0 0 1 .108.4167.5588.5588 0 0 1-.2183.371.5572.5572 0 0 1-.3383.1135.558.558 0 0 1-.4493-.2236l-1.3192-1.7479-.1952.1952v1.2273a.5635.5635 0 0 1-.5627.5628.563.563 0 0 1-.5625-.5625V9.3281c0-.3102.2523-.5625.5625-.5625s.5625.2523.5625.5625v1.209l1.5694-1.5694c.0807-.0807.1916-.1252.312-.1252.1404 0 .2814.0606.3871.1661.0985.0984.1573.2251.1654.3566.0082.1327-.036.2542-.1241.3425l-1.2818 1.2817 1.3845 1.8344zm-8.3502-3.5023c-.095-.2699-.3829-.5475-.7503-.5557-.3663.0083-.6542.2858-.749.5551l-1.3455 3.5415c-.1708.5305-.0217.7272.1333.7988a.8568.8568 0 0 0 .3576.0776c.2346 0 .4139-.0952.4678-.2481l.2787-.7297 1.7152.0001.2785.7292c.0541.1532.2335.2484.4681.2484a.8601.8601 0 0 0 .3576-.0775c.1551-.0713.3041-.2681.1329-.7999l-1.3449-3.5398zm-1.3116 2.4433l.5618-1.5961.5618 1.5961H9.3757zm5.9056 1.3836c0 .2843-.2418.5156-.5391.5156h-1.8047c-.2973 0-.5391-.2314-.5391-.5156V9.3281c0-.3102.2576-.5625.5742-.5625s.5742.2523.5742.5625v3.3047h1.1953c.2974 0 .5392.2314.5392.5156z",
    link: "https://github.com/Regulus55/GU-shop",
    name: "Kakao",
  },
  {
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
    link: "https://github.com/Regulus55/GU-shop",
    name: "Google",
  },
];

export const productData = [
  {
    id: 1,
    title: "galaxy-fold5",
    price: 400,
    img: "/images/fold5.jpg",
  },
  {
    id: 2,
    title: "galaxy-fold6",
    price: 400,
    img: "/images/fold6.jpg",
  },
  {
    id: 3,
    title: "galaxy-flip4",
    price: 400,
    img: "/images/flip4.jpg",
  },
  {
    id: 4,
    title: "galaxy-flip6",
    price: 400,
    img: "/images/flip6.jpg",
  },
  {
    id: 5,
    title: "galaxy-s23",
    price: 400,
    img: "/images/s23.jpg",
  },
  {
    id: 6,
    title: "galaxy-ultra",
    price: 400,
    img: "/images/ultra.jpg",
  },
];
