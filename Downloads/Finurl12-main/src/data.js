export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1100 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1100, min: 850 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 850, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    name: "KreditBee",
    loans:"4Lakhs",
    price: "15%",
    description: "24M",
    path: "/Registration",
    imageurl: require("./images/bee.png")
  },
  {
    id: 2,
    // imageurl:
    //   "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cashe.co.in%2F&psig=AOvVaw3QrOMKr5NmtIAsjKZ1zEuY&ust=1687711142130000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJDZ44ys3P8CFQAAAAAdAAAAABAD",
    name: "CASHe",
    loans:"3Lakhs",
    price: "15%",
    description: "24M",
    path: "/Registration",
    imageurl: require("./images/cash.png")
  },
  {
    id: 3,
    // imageurl:
    //   "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "NIRA",
    loans:"1Lakh",
    price: "14%",
    description: "18M",
    path: "/Registration",
    imageurl: require("./images/nira2.png")
  },
  {
    id: 4,
    // imageurl:
    //   "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Prefr",
    loans:"3Lakhs",
    price: "14%",
    description: "48M",
    path: "/Registration",
    imageurl: require("./images/prefr.png")
  },
  {
    id: 5,
    // imageurl:
    //   "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "TATA Capital",
    loans:"2Lakhs",
    price: "12%",
    description: "24M",
    path: "/Registration",
    imageurl: require("./images/tata.png")
  },
  {
    id: 6,
    // imageurl:
    //   "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Privo",
    loans:"10Lakhs",
    price: "15%",
    description: "60M",
    path: "/Registration",
    imageurl: require("./images/privo.png")
  },
  {
    id: 7,
    // imageurl:
    //   "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "L&T service",
    loans:"7Lakhs",
    price: "17%",
    description: "48M",
    path: "/Registration",
    imageurl: require("./images/lt.png")
  },
];

export const productData1 = [
  {
    id: 1,
    name: "IIFL BL",
    loans:"30Lakhs",
    price: "12%",
    description: "72M",
    path: "/Registration",
    imageurl: require("./images/iifl.png")
  },
  {
    id: 2,
    imageurl: require("./images/faircent.jpg"),
    name: "Faircent",
    loans:"10Lakhs",
    price: "15%",
    description: "60M",
    path: "/Registration"
  },
  {
    id: 3,
    imageurl: require("./images/moneywide.jfif"),
    name: "MoneyWide",
    loans:"3Lakhs",
    price: "14%",
    description: "36M",
    path: "/Registration"
  },
];

export const productData2 = [
  {
    id: 1,
    imageurl: require("./images/iifl.png"),
    name: "IIFL BL",
    loans:"30Lakhs",
    price: "12%",
    description: "72M",
    path: "/Registration"
  },
  {
    id: 2,
    imageurl: require("./images/faircent.jpg"),
    name: "Faircent",
    loans:"10Lakhs",
    price: "15%",
    description: "60M",
    path: "/Registration"
  },
  {
    id: 3,
    imageurl: require("./images/lending.png"),
    name: " Lendingkart",
    loans:"50Lakhs",
    price: "14%",
    description: "36M",
    path: "/Registration"
  },
];
export const productData3 = [
  {
    id: 1,
    imageurl: require("./images/iifl.png"),
    // name: "Coming Soon",
    loans:"30Lakhs",
    price: "12%",
    description: "Coming Soon",
    path: "/Registration"
  },
  // {
  //   id: 2,
  //   imageurl: require("./images/iifl.png"),
  //   name: "Faircent",
  //   loans:"10Lakhs",
  //   price: "15%",
  //   description: "60M",
  //   path: "/Registration"
  // },
  // {
  //   id: 3,
  //   imageurl: require("./images/iifl.png"),
  //   name: " Lendingkart",
  //   loans:"50Lakhs",
  //   price: "14%",
  //   description: "36M",
  //   path: "/Registration"
  // },
];

export const testimonialData = [
  {
    id: 1,
    name: "Pratik Verma",
    // price: "$19.99",
    description: '" I had a business registered for 2 years but was unable to get a loan from anywhere.     Thanks to Finurl, because of whose timely service I was able to get a loan."',
  },
  {
    id: 2,
    imageurl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Satosh Joshi",
    // price: "$21.99",
    description: '"Because of Finurl and their tie-ups with multiple banks and NBCs, I was able to get a loan within 48 hours"',
  },
  {
    id: 3,
    imageurl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Vijay Kumar",
    // price: "$99.99",
    description:'"Finurls online platform is so easy to use. I was able to get multiple offers for a loan online from their platform and got the best interest rates"',
  },
  
];

export const logos = [
  {
    id: 1,
    imageurl: require("./images/iifl.png"),
    path: "/Registration"
  },
  {
    id: 2,
    imageurl: require("./images/faircent.jpg"),
    
  },
  {
    id: 3,
    imageurl: require("./images/lending.png"),
   
  },
];