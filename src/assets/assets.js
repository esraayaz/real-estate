import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.svg";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import header_img from "./header_img.jpg";
import brand_img from "./brand_img.jpg";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import project_img_7 from "./project_img_7.jpg";
import profile_img_1 from "./profile_img_1.jpg";
import profile_img_2 from "./profile_img_2.jpg";
import profile_img_3 from "./profile_img_3.jpg";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Santee",
    price: "$3 million",
    location: "San Diego, US",
    image: project_img_1,
  },
  {
    title: "Santa Barbara",
    price: "$9.5 million",
    location: "California, US",
    image: project_img_2,
  },
  {
    title: "Pacific Heights",
    price: "$15 million",
    location: "San Francisco, US",
    image: project_img_3,
  },
  {
    title: "Quartiere Venezia",
    price: "$1.5 million",
    location: "Livorno, Italy",
    image: project_img_4,
  },
  {
    title: "Foz do Douro",
    price: "$3 million",
    location: "Porto, Portugal",
    image: project_img_5,
  },
  {
    title: "Pedralbes",
    price: "$1.2 million",
    location: "Barcelona, Spain",
    image: project_img_6,
  },
  {
    title: "Richmond",
    price: "$9.5 million",
    location: "London, UK",
    image: project_img_7,
  },
];

export const testimonialsData = [
  {
    name: "Charlotte Ashford",
    title: "CEO",
    image: profile_img_1,
    alt: "Portrait of Charlotte Ashford",
    rating: 5,
    text: "Working with E-Estate was an absolute pleasure! Their team not only found me a home that matched every item on my wishlist but also negotiated terms that exceeded my expectations. Their local expertise and personalized approach made the entire process seamless.",
  },
  {
    name: "Richard Prescott",
    title: "Investor",
    image: profile_img_2,
    alt: "Portrait of Richard Prescott",
    rating: 4,
    text: "I have worked with many realtors over the years, but E-Estate stands out. They listened intently to my needs, provided insightful market analysis, and secured my dream property at a fantastic value. Their dedication and responsiveness set a new standard for excellence in real estate.",
  },
  {
    name: "Eleanor Wilson",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of Eleanor Wilson",
    rating: 5,
    text: "From start to finish, E-Estate went above and beyond. As a first-time buyer, I had countless questions, and they patiently guided me through each step with clarity and professionalism. They turned what could have been a stressful experience into an exciting journey. Truly exceptional service!",
  },
];
