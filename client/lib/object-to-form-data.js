const { default: axios } = require("axios");

const objectToFormData = (object)=> {
  const formData = new FormData();

  for(const key in object) {
    formData.append(key, object[key]);
  }

  return formData;
}

module.exports = objectToFormData;