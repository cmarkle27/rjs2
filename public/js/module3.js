// -------------------------------------------------------------------
// other things you can do
// -------------------------------------------------------------------

/* Object literal module (t-shirt.js) */
define(["cart", "inventory"], function(cart, inventory) {

  // t-shirt object
  return {
    color: "blue",
    size: "large",
    addToCart: function() {
      inventory.decrement(this);
      cart.add(this);
    }
  }
  
});

// usage
require(['t-shirt'], function(tshirt) {
  tshirt.size = "small";
  tshirt.addToCart();
});

// -------------------------------------------------------------------

/* Simple name/value pair module (proxybrowse.js) */
define({
  schemeHostPort: "http://mam1.turner.com",
  partOf: "Production",
  repository: "ms2Atlanta"
});

// usage
require(['proxybrowse'], function(proxybrowse) {
  var assetProxyUri = proxybrowse.schemeHostPort + '/proxybrowse/rest/cnn.proxies';
  // do something with assetProxyUri
});

// -------------------------------------------------------------------

/* JSONP service as a module! */
require(["http://example.com/api/data.json?callback=define"],
    function (data) {
        // the data object will be the API response for the JSONP data call.
        console.log(data);
    }
);



