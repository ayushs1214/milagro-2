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
            id: "personalloans",
            title: "Personal Loan",
            path: '/personalloans',
            
          },
          {
            id:"businessloans",
                title: "Business Loan",
                path:"/businessloans"
          },
          {
              id:"homeloans",
              title: "Home Loan",
              path:"/homeloans"
          },
          {
              id:"professionalloans",
              title: "Professional Loan",
              path:"/professionalloans"
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
