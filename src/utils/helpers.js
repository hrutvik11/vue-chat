export const setUserLoggedIn = (bool, id) => {
  localStorage.setItem("vueIsLoggedIn", bool);
  localStorage.setItem("userID", id);
};

export const getUserID = () => {
  return localStorage.getItem("userID");
};

export const isUserLoggedIn = () => {
  const bool = localStorage.getItem("vueIsLoggedIn");
  const userid = localStorage.getItem("userID");

  if (bool && bool === "true" && userid && userid !== "") {
    return true;
  } else {
    return false;
  }
};
export const userMetaData = [
  {
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
    },
    phone: "210.067.6132",
    website: "elvis.io",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];
