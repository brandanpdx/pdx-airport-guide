export function restaurantInfo (results, details, imageId) {
  let restaurant = {
    name:`${results.name}`,
    image:`${results.icon}`
  };
  
  let openNow =`${results.opening_hours.open_now}`;
  if( openNow !== "true"){
    openNow = "close";
  } else {
    openNow = "open";
  }

  let price = `${results.price_level}`;
  let priceIcon;
  if(price == "undefined") {
    priceIcon = "";
  } else if (price){
    if(price == 1){
      priceIcon = "<strong>Price level:</strong> $";
    }else if(price == 2){
      priceIcon = "<strong>Price level:</strong> $$";
    }else if(price == 3){
      priceIcon = `<strong>Price level:</strong> $$$`;
    }else if(price == 4){
      priceIcon = `<strong>Price level:</strong> $$$$`;
    }
  }

  // let link = `${results.photos[0].html_attributions}`
  let address = `${results.formatted_address}`;
  let restaurantDetails = 
  `<div class="card" style="width:18rem;">
    <div class="card-header" style="height:4rem; background-color:rgb(162, 174, 192);">
      <h5 style="color:#34495e;" class="mb-0" >
      <strong>${restaurant.name}</strong>
      </h5>
    </div>
    <div class="card-body">
    <img src='${restaurant.image}'><br>
    <strong>Open now:</strong> ${openNow}<br>
    ${priceIcon}<br>
      <strong>Adress:</strong> ${address}
    </div>
  </div>`;
    
  return restaurantDetails;
  // let details = restaurantDetails;
  // let imageId = `${results.photos[0].photo_reference}`;
}

export function storeInfo (results) {
  let store = {
    name:`${results.name}`,
    image:`${results.icon}`
  };

  let openNow =`${results.opening_hours.open_now}`;
  if( openNow !== "true"){
    openNow = "close";
  } else {
    openNow = "open";
  }

  let price = `${results.price_level}`;
  let priceIcon;
  if(price == "undefined") {
    priceIcon = "";
  } else if (price){
    if(price == 1){
      priceIcon = "<strong>Price level:</strong> $";
    }else if(price == 2){
      priceIcon = "<strong>Price level:</strong> $$";
    }else if(price == 3){
      priceIcon = `<strong>Price level:</strong> $$$`;
    }else if(price == 4){
      priceIcon = `<strong>Price level:</strong> $$$$`;
    }
  }
  let address = `${results.formatted_address}`;

  let storeDetails = 
  `<div class="card" style="width:18rem;">
  <div class="card-header" style="height:4rem; background-color:rgb(177, 183, 192);">
    <h5 style="color:#34495e;" class="mb-0" >
      <strong>${store.name}</strong>
      </h5>
    </div>
    <div class="card-body">
      <img src='${store.image}'><br>
      <strong>Open now:</strong> ${openNow}<br>
      ${priceIcon}<br>
      <strong>Adress:</strong> ${address}
    </div>
  </div>`;

  return storeDetails;
}


// export function restaurantImages (results) {
//   let photoRef = `${results.photos[0].photo_reference}`
  
//     return photoRef
//   };