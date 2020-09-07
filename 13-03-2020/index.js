function* firstGenerator(){
	let str;
	yield "Hello";
	yield str;
	yield false;
	yield true;
	yield null;
	yield "Hi3";
	return "Hi";
	yield "Hi2";
}
let callGenerator = firstGenerator();
console.log(firstGenerator().next());
console.log(firstGenerator().next());
console.log(firstGenerator().next());
console.log(firstGenerator().next());
console.log(firstGenerator().next());

console.log("******************");
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log(callGenerator.next());
console.log("******************");
for(let iterator of callGenerator){
	console.log(iterator);
}
console.log("No execution");
console.log("******************");
let callGeneratorOf = firstGenerator();
console.log("******************");
for(let iterator of callGeneratorOf){
	console.log(iterator);
}
console.log("******************");
function* secondGenerator(){
	yield "first value";
	let final_value = yield "value given";
	return final_value;
}
let callSecondGenerator = secondGenerator();
console.log(callSecondGenerator.next());
console.log(callSecondGenerator.next());
console.log(callSecondGenerator.next("output given"));
console.log(callSecondGenerator.next("output given2"));
console.log(callSecondGenerator.next());
/**********************Very Very Important concept*************/
function* testGenerator(){
    yield "first";
    const result = yield "Second";
    yield "third";
    yield "fourth";
    return result
}
const callTest = testGenerator();
console.log(callTest.next("xxxx1"));
console.log(callTest.next("xxxx2"));
console.log(callTest.next("xxxx3"));
console.log(callTest.next("xxxx4"));
console.log(callTest.next("xxxx5"));
console.log(callTest.next("xxxx6"));
console.log(callTest.next("xxxx7"));