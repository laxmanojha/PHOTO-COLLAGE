let arr=[];
function getData(category) {
  fetch("https://api.api-ninjas.com/v1/randomimage?category=" + category, {
    method: "GET",
    headers: {
      "X-Api-Key": "vXZ6o4ze/FxRWzFMDZH/1g==W3KWv1qPvqvqjwUg",
      Accept: "image/jpg",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    console.log(response)
    })
};
for(let i=0;i<4;i++) {
    // getData("nature");
}
console.log(arr);