var btc = document.getElementById("bitcoin");
var btc24 = document.getElementById("btc24h");
var eth = document.getElementById("etherium");
var eth24 = document.getElementById("eth24h");
var xrp = document.getElementById("ripple");
var xrp24 = document.getElementById("rip24h");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple&vs_currencies=usd&include_24hr_change=true",
    
    "method": "GET",
    "headers": {}
}




$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    btc24.innerHTML = (response.bitcoin.usd_24h_change).toFixed(2);
    eth.innerHTML = response.ethereum.usd;
    eth24.innerHTML = (response.ethereum.usd_24h_change).toFixed(2);
    xrp.innerHTML = response.ripple.usd;
    xrp24.innerHTML = (response.ripple.usd_24h_change).toFixed(2);
});



/* red gree test (response.bitcoin.usd_24h_change).toFixed(2) > 0 ? btc24.style.color = "green" : btc24.style.color = "red"; */



