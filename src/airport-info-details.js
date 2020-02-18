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
  let priceIcon;
    if(price == "undefined") {
      priceIcon = ""
    } else if (price){
      if(price == 1){
        priceIcon = "Price level: $"
      }else if(price == 2){
        priceIcon = "Price level: $$"
      }else if(price == 3){
        priceIcon = `Price level: $$$`
      }else if(price == 4){
        priceIcon = `Price level: $$$$`
      }
    }

  let restaurantDetails = 
  `<div class="card" style="width:18rem;">
    <div class="card-header" style="height:4rem;">
      <h5 class="mb-0">
      ${restaurant.name}
      </h5>
    </div>
      <div class="card-body">
      <img src='${restaurant.image}'<br>
      Open now: ${openNow}<br>
      ${priceIcon}
      </div>
  </div>
</div>`;
    
  return restaurantDetails;
}


