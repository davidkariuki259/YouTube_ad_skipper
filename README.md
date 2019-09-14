# YouTube_ad_skipper
automatically skip YouTube video ads

Ever needed to play videos on YouTube while you perform other tasks/chores but ads keep interfering?
In such a case, the code in [skip.js](skip.js) offers a simple solution. 
All that is required is simply copy the code into the browser web console of the YouTube tab, and the script will skip any "skippable" ad in a maximum of 3 seconds.

# How it Works
The script accesses the parent class of the skip ad button every three seconds (which ensures that neither the processing power is  overused nor does the advert run for too long). If the class is not empty, the button is clicked via JavaScript, thereby skipping the ad!
