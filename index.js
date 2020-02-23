function* testGenertator(){
	yield 2;
	yield 3;
	yield 2;
}
var instanceTest = testGenertator();
console.log(instanceTest.next());
console.log(instanceTest.next());
console.log(instanceTest.next());
console.log(instanceTest.next());
console.log(instanceTest.next());

function* idMaker(){
	var index = 0;
	while(true){
		yield index++;
	}
}
var gen1 = idMaker();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

function* generatorFunction(){
	console.log("This will be executed first.");
	yield "first";
	console.log("I will be printed after the pause");
	yield "second";
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
//https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 'This', done: false};
        } else if (step === 2) {
          return { value: 'is', done: false};
        } else if (step === 3) {
          return { value: 'iterable.', done: false};
        }
        return { value: '', done: true };
      }
    }
  },
}
for (const val of iterableObj) {
  console.log(val);
}

function * iterableObj1() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}
for (const val of iterableObj1()) {
  console.log(val);
}

//--------------------------------------//
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}
var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
console.log(gen.next().value); // undefined

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}
var gen2 = logGenerator();
gen2.next();             // 0
gen2.next('pretzel');    // 1 pretzel
gen2.next('california'); // 2 california
gen2.next('mayonnaise'); // 3 mayonnaise

function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen3 = yieldAndReturn()
console.log(gen3.next()); // { value: "Y", done: false }
console.log(gen3.next()); // { value: "R", done: true }
console.log(gen3.next()); // { value: undefined, done: true }