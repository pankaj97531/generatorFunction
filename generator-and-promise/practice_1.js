//https://www.youtube.com/watch?v=fzRmUEmOu_0
const fetchUser = () => new Promise(
	resolve=>{
		setTimeout(()=>resolve({
			username : "Pankaj",
			password : 12345
		}),2000)
	}
)
function* apiCalls(username,password){
	var user = yield fetchUser(username)
	return user
}

var it = apiCalls()

var promise = it.next().value
console.log('promise ',promise)

promise.then((result)=>{
	console.log('result ',result)
	var response = it.next(result)
	console.log(' response ',response)
})