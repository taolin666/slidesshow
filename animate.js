function animate(element,target){
		if (element.timer){
      clearInterval(element.timer);
    }
		element.timer = setInterval(function () {
			var leader = element.offsetLeft;
			var step =10;
			if(leader>target){
				leader -=step
			}
			 if (Math.abs(leader - target)>Math.abs(step)){
				leader += step;
				element.style.left = leader + "px";
			}else{
				clearInterval(element.timer)
				element.style.left = target + "px";
			}
		},16)
	}