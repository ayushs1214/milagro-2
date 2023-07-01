export const menuItems = [
  {
    id: "Home",
    title: "Home",
    path: '/Home',
  },
  {
    id: "Products",
    title: "Products",
    submenu: [
      {
        title: "Loans ",
        submenu: [
          {
            id: "psloans",
            title: "Personal Loan",
            path: '/psloans',
            
          },
          {
            id:"Bsloans",
                title: "Business Loan",
                path:"/Bsloans"
          },
          {
              id:"Hmloans",
              title: "Home Loan",
              path:"/Hmloans"
          },
          {
              id:"Profloans",
              title: "Professional Loan",
              path:"/Profloans"
              },
        ],
      },
      {
        id:"Soon",
        title: "Investment",
        path:"/Soon"
        // submenu: [
        //   {
        //     title: "Frontend",
        //   },
        //   {
        //     title: "Backend",
        //     submenu: [
        //       {
        //         title: "NodeJS",
        //       },
        //       {
        //         title: "PHP",
        //       },
        //     ],
        //   },
        // ],
      },
      {
        id:"Soon",
        title: "Cards",
        path:"/Soon"
      },
      // {
      //   title: "Insurance",
      // },
    ],
  },
  {
    id: "Resources",
    title:"Resources",
    // path: '/Resources',
     submenu: [
      {
        id: "calculator",
        title: "Calculator",
        path:"/calculator",
      },
      {
        id: "Finance",
        title: "Financial Literacy",
        path: '/Finance',
      },
      {
        id: "Credit",
        title: "Credit Management",
        path: '/Credit',
      },
     
     
    ],

  },
  {
    id: "About",
    title: "About",
    path: '/About',
  
  },
  // {
  //   id: "Log In",
  //   title: "Login",
  //   // path: '/About',
  
  // },
];
