function* sum(){
	var x=0;
	x +=(yield "1st "  + x);
	x +=(yield "2nd "  + x);
	x +=(yield "3rd "  + x);
	x +=(yield "4th "  + x);
}
var it = sum();
console.log(it.next('unused'))
console.log(it.next(1))
console.log(it.next(20))
console.log(it.next(300))
console.log(it.next(30))

function* infiniteLoop(){
	var x = 0;
	while(true){
		x+= yield x;
	}
}
console.log(performance.now())
var callInfinite = infiniteLoop();
for(var i=0;i<50;i++){
console.log(callInfinite.next(1))	
}
console.log(performance.now())