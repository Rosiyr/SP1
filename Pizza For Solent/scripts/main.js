function main(){
	var today = new Date();
	var curr_hour = today.getHours();
	var curr_minute = today.getMinutes();
	var curr_second = today.getSeconds();
    
	var L = (new Date()).toString().split(' ' ).splice(1,3).join(' ' );
    
	curr_hour = checkTime(curr_hour)
	curr_minute = checkTime(curr_minute)
	curr_second = checkTime(curr_second)
	var curr_time = convertTime(curr_hour) + ":" + curr_minute + ":" + curr_second + " "
	
	
	
	console.log(curr_time);
	document.getElementById("clock").innerHTML = L + " " + curr_time + isMorningAfternoon(curr_hour);
	
	t = setTimeout(function() {
		main()
}, 500);
var timer;
	clearInterval(timer);
}


function checkTime(i){
	if (i < 10) {i = "0" + i};
	return i;
}

function isMorningAfternoon(hours){
	if(hours >= 12){
		return "PM";
	}else if(hours < 12){
		return "AM";
	}else{
		console.log("wrong");
	}
}

function convertTime(h24){
	var h = h24 % 12;
	if(h === 0) h = 12;
	if(h < 10) {h = "0" + h};
	return h;
}