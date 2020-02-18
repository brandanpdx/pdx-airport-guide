export function restaurantInfo (results) {
  let restaurant = {
    name:`${results.name}`,
    image:`${results.icon}`
  };
  
  let openNow =`${results.opening_hours.open_now}`;
    if( openNow !== "true"){
      openNow = "close"
    } else {
      openNow = "open"
    }

  let price = `${results.price_level}`;
    if(price == null) {
      price = "x"
    } else {
      price;
    }
 
  let restaurantDetails = 
  `<div class="col-sm-4">${restaurant.name}<br>
   <img src='${restaurant.image}'<br>
   Open now: ${openNow}<br>
   Price level: ${price}</div>`;
  return restaurantDetails;
}