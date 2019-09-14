setInterval(function click_ad_to_remove(){
	var ad_button=document.getElementsByClassName('ytp-ad-skip-button ytp-button');
	if (ad_button.length>0){
		document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click();
	}
}, 3000);
