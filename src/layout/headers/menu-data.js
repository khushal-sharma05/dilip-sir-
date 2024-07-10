const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",//service show only service page 
    link: "/service",
    active: "active",
    sub_menus: [
      { link: "/service", title: "Services" },
      { link: "/service-details", title: "Service Details" },
      // { link: "/", title: "Data analytics" },
      // { link: "/home-2", title: "Payment Gateway" },
      // { link: "/home-3", title: "CRM Software" },
      // { link: "/home-4", title: "Security Software" },
      // { link: "/home-5", title: "Saas" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Business Solutioins",  //business solution 
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" },
      // { link: "/service-details", title: "Service Details" },
      // { link: "/team", title: "Team" },
      // { link: "/team-details", title: "Team Details" },
      // { link: "/career", title: "Career" },
      // { link: "/career-details", title: "Career Details" },
      // { link: "/integrations", title: "Integrations" },
      // { link: "/price", title: "Price" },
      // { link: "/register", title: "Register" },
      // { link: "/sign-in", title: "Signin" },
      // { link: "/404", title: "404" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Company", //company  show about us page partener with us
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About Us" },
      { link: "/career", title: "Partner with Us" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Portfolio", //portfolio
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" },
      // { link: "/blog", title: "Blog" },
      // { link: "/blog-list", title: "Blog List" },
      // { link: "/blog-details", title: "Blog Details" },
      // { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Resources",  //Resources : Blog, Videos, case studies, Tools, Caree
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Videos" },
      { link: "/blog-details", title: "Case Studies" },
      { link: "/blog-details-2", title: "Tools" },
      { link: "/career", title: "Career" },
      { link: "/team", title: "Team" },

    ],
  },


];
export default menu_data;
