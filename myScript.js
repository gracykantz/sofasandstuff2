// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var productObject = {
	name: "Small Plate Sand",
	price: 35000,
	currency: "SEK",
	image: "http://sumitomocorp-scao.com/wp-content/uploads/2016/09/ceo-pg.png",
};
var productObject2 = {
	name: "thing",
	price: 34543,
	currency: "SEK",
	image:"https://www.sitebuilderreport.com/assets/facebook-stock-up-446fff24fb11820517c520c4a5a4c032.jpg",
}
var productObject3 = {
	name: "cool thing",
	price: 234223,
	currency: "SEK",
	image:"http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg",
}


var productArray = [productObject, productObject2, productObject3];



function printProducts(productArray) {
	for (var i = 0; i < productArray.length; i++) {
	$(".red").attr("src", productArray[1].image);
	}
}
printProducts(productArray);

$(function(){

$(".red").on("click", function(){
	alert("Thanks for your interest but this product is sold out! :(");
});

});
