function animate(element,target){
		if (element.timer){
      clearInterval(element.timer);
    }
		var step =10;
		element.timer = setInterval(function () {
			var leader = element.offsetLeft;
			if(leader>target){
				step = -Math.abs(step)
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