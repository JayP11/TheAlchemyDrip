import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   text: "shop",
  //   url: "/products",
  // },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/contactus",
  },
];
export const linkss = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  // {
  //   id: 2,
  //   text: "shop",
  //   url: "/products",
  // },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  {
    id: 4,
    text: "Contact Us",
    url: "/contactus",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];
export const ACCEPT_HEADER = "application/x.uniform.v1+json";

const BaseUrl = "https://getmynfc.com/uniform/api/v1/";
// export const products_url = BaseUrl + "new-product/";
// export const products_url = BaseUrl + "get-product-data";
// export const products_url = BaseUrl + "new-product-detail/";

export const products_url = BaseUrl + "new-product/";

export const home_url = BaseUrl + "get-home/ogb8lqhucul09jtdkoh6";

export const single_product_url = BaseUrl + "product-detail";

export const login_url = BaseUrl + "login";

export const signup_url = BaseUrl + "register";
export const add_wishlist_url = BaseUrl + "wishlist";
// export const place_order_url = BaseUrl + "new-place-order";
export const place_order_url = BaseUrl + "new-place-order";
// export const add_address_url = BaseUrl + "add-address";
export const add_address_url = BaseUrl + "add-address";
export const get_countries = BaseUrl + "countries";
export const get_state = BaseUrl + "state";
export const get_address = BaseUrl + "view-address";
export const delete_address = BaseUrl + "delete-address";
export const edit_address_url = BaseUrl + "edit-address";
export const guest_ordet_url = BaseUrl + "new-place-order-guest";
export const get_ordet_url = BaseUrl + "get-order-list";
export const get_customer_details_url = BaseUrl + "customers-detail";
export const update_customer_details_url = BaseUrl + "update-profile";
export const get_order_details_url = BaseUrl + "get-order-detail/";
export const return_order_url = BaseUrl + "return";
export const download_invoice_url = BaseUrl + "download-invoice";
export const create_store_ticket = BaseUrl + "store-ticket";
export const store_ticket_view_url = BaseUrl + "store-ticket-view";
export const contact_us = BaseUrl + "contact-us";
export const get_payment_id = BaseUrl + "get_payment_id";
export const notification = BaseUrl + "notification";
export const remove_wishlist = BaseUrl + "removewishlist/";
export const wishlist_details = BaseUrl + "wishlists-details";
export const getcampus = BaseUrl + "getcampus";

export const category_verify = BaseUrl + "category-verify";
export const get_category = BaseUrl + "get-category";
export const product = BaseUrl + "product";
export const get_exchangeproduct = BaseUrl + "getexchangeproduct";
export const ex_pro_submit = BaseUrl + "ex_pro_submit";
export const getexchangeproductsize = BaseUrl + "getexchangeproductsize";
// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

// screen type
export const HOME_SCREEN = 101;
export const PROFILE_SCREEN = 102;
export const CHECKOUT_SCREEN = 103;
export const USER_SCREEN = 104;

// profile tab

export const USER_PROFILE_TAB = 201;
export const ADDRESS_TAB = 202;
export const MY_ORDER_TAB = 203;
export const RAISE_TICKET_TAB = 204;
export const NOTIFICAION_TAB = 205;

// google client id
export const WEB_CLIENT_ID =
  "643629890291-27gl333mpl92eekq7bp663qaslscglgl.apps.googleusercontent.com";
