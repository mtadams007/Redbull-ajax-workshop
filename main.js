$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(data) {
    createFigure(data.products);
  }
})

let getTitle = (arr) => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i].title);
    i++;
  }
}
let showTitle = (arr) => {
  let i = 0;
  while (i < arr.length) {
    $('body').append(`<p> ${(arr[i].title)} </p>`);
    i++;
  }
}

let showImage = (arr) => {
  let i = 0;
  while(i < arr.length) {
    console.log(arr[i].images[0].src);
    i++;
  }
}

let displayImage = (arr) => {
  let i = 0;
  while(i < arr.length) {
    $('body').append(`<img src=${arr[i].images[0].src}>`);
    i++;
  }
}



let createFigure = (arr) => {
  let i = 0;
  while (i < arr.length) {
    $('#redBullStuff').append(`<figure><h3>${(arr[i].title)}</h3><img src=${arr[i].images[0].src}> <figcaption>${(arr[i].body_html)}</figcaption>`);
    i++;
  }
}
