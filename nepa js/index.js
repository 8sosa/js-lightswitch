const text = document.querySelector('.title');
const changeStatus = document.querySelector('.changeStatus');

changeStatus.addEventListener("click", function(){
    if(document.getElementById('myImage').src == "img/off.png"){
        document.getElementById('myImage').src = "img/on.png"
    }else {
        document.getElementById('myImage').src = "img/off.png"
    }
    
})




	// function before(){
	// 	document.getElementById('myImage')
    //     .src="img/off.png";
	// }
	
	// function afterr(){
	// 	document.getElementById('myImage')
	// 	.src="img/on.png";
	// }
