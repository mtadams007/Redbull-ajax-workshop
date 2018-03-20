$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(data) {
    getTitle(data.products);
  }
})

let getTitle = (arr) => {
  let i=0;
  while (i<arr.length) {
    console.log(arr[i].title);
    i++;
  }
}
