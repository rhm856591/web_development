var bit = document.getElementById("bitcoin");
var etm = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method" : "GET",
    "headers" : {}
}
$.ajax(settings).done(function (response){
    bit.innerHTML= response.bitcoin.inr;
    etm.innerHTML= response.ethereum.inr;
    doge.innerHTML= response.dogecoin.inr;
});