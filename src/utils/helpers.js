/* eslint-disable no-useless-escape */
export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(number);
};

// export const formatPrice = (number) => {
//   return new Intl.NumberFormat("es-AR", {
//     style: "currency",
//     currency: "ARS",
//   }).format(number);
// };

// export const formatPrice = (number) => {
//   const formattedPrice = new Intl.NumberFormat("es-AR", {
//     style: "currency",
//     currency: "ARS",
//   }).format(number);

//   // Replace the dollar sign with the AR symbol
//   return formattedPrice.replace(/\$/, "AR");
// };


export const mobileValidate = (number) => {
  const regexpMobile = /^[0-9\b]+$/;
  if (number === '' || regexpMobile.test(number)) {
    return true;
  }
  return false
};
export const emailValidate = (emailid) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (re.test(emailid)) {
    return true;
  }
  return false
};
export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
export const getUniqueValuesHome = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return [...new Set(unique)];
};

export const isValidHttpUrl=(string) =>{
  let url;

  try {
      url = new URL(string);
  } catch (_) {
      return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
