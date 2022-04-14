const visitor = {
  name: "Chris",
  countries: [
    {
      name: "Thailand",
      year: 2014
    },
    {
      name: "Germany",
      year: 2009
    },
    {
      name: "Ukraine",
      year: 2016
    }
  ]
};

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(visitor)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });