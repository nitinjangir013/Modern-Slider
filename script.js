let selectedProductName = document.getElementById('product_name');
let selectedProductPrice = document.getElementById('product_price');
let selectedSliderMainContainer = document.getElementsByClassName('slider')[0];
let productImageList = ["https://i.postimg.cc/XJ69fQVD/saras-ghee.png","https://i.postimg.cc/FHmt6QT9/amul-ghee.png","https://i.postimg.cc/rwhh96bZ/dahi.png","https://i.postimg.cc/hPsMSWS4/lassi.png","https://i.postimg.cc/1XPcQM2N/panir.png","https://i.postimg.cc/hPDbZyVk/sars-milk.png"];
let productNamnList = ["Saras Ghee","Amul Cow Ghee","Saras Dhahi","Saras Lassi","Saras Panir","Saras Milk"];
let productPriceList = ["₹ 750/-","₹ 800/-","₹ 50/-","₹ 30/-","₹ 250/-","₹ 24/-"];
var counter = 0;
var idValue = 0;
var blurIndexValue = 0;
var nameIndex = 1;
let createDiv;
for (var i = 0; i < productImageList.length; i++) 
{
	createDiv = document.createElement("div");
	createDiv.classList.add("product_img");
	createDiv.setAttribute("id",'ballon_img-'+idValue);
	createDiv.innerHTML = '<img src="'+productImageList[counter]+'"><div class="shadow_div"></div>';
	selectedSliderMainContainer.appendChild(createDiv);
	counter++;
	idValue++;
}

let selectedProductImg = document.getElementsByClassName('product_img');
let selectedProductImages = document.querySelectorAll('img');
var firstMarginValue = 0;


// function removeDiv(idName)
// {
// 	console.log(idName);
// 	let selectedId = document.getElementById(idName);
// 	firstMarginValue = firstMarginValue+265;
// 	console.log(selectedId);
// 	selectedId.remove();
// }

blurDiv();
function blurDiv()
{
	selectedProductImg[blurIndexValue].style.filter = 'blur(5px)';
	selectedProductImg[blurIndexValue+2].style.filter = 'blur(5px)';
	selectedProductImg[blurIndexValue].style.marginTop = '50px';
	selectedProductImg[blurIndexValue+1].style.marginTop = '200px';
	selectedProductImg[blurIndexValue+2].style.marginTop = '50px';

	selectedProductName.innerText = productNamnList[nameIndex];
	selectedProductPrice.innerText = productPriceList[nameIndex];
}

function nextBtn()
{
	nameIndex++;
	if(nameIndex==productNamnList.length) 
	{
		nameIndex=0;
	}


	firstMarginValue = firstMarginValue-265;
	setTimeout(function(){
		selectedProductImg[0].style.marginLeft = firstMarginValue+'px';
		for (var i = 0; i < selectedProductImg.length; i++) {
			selectedProductImg[i].style.filter = 'blur(0px)';
		}
		blurIndexValue++;
		blurDiv();
	},100);
	if (counter==productImageList.length) 
	{
		counter=0;
	}
	selectedSliderMainContainer.innerHTML += '<div id="ballon_img-'+idValue+'" class="product_img"><img src="'+productImageList[counter]+'"><div class="shadow_div"></div></div>'
	// setTimeout(function(){
	// 	removeDiv('ballon_img-'+(idValue-productImageList.length-1))
	// },1000);
	counter++;
	idValue++;
}

function preBtn()
{
	if (firstMarginValue!=0) 
	{
		firstMarginValue = firstMarginValue+265;
		selectedProductImg[0].style.marginLeft = firstMarginValue+'px';
		for (var i = 0; i < selectedProductImg.length; i++) {
			selectedProductImg[i].style.filter = 'blur(0px)';
		}
		blurIndexValue--;
		if (nameIndex==0) 
		{
			nameIndex=productNamnList.length;
		}
		nameIndex--;
		setTimeout(function(){
			blurDiv();
		},100);
	}
}