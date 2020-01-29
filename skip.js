setInterval(function click_ad_to_remove(){
	var ad_button=document.getElementsByClassName('ytp-ad-skip-button ytp-button');	//access the 'skip ad' button's parent class
	if (ad_button.length>0){	//click button if class is not empty
		document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();
	}
}, 3000);
