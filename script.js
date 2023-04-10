function fibonacci(num) {
	var a = 0;
	var b = 1;
	if(num == 1) return a;
	if(num == 2) return b;
	var count = 2;
	while(count < num){
		var temp = a;
		a = b;
		b = a + temp;
		count++;
	}
	return b;
}

module.exports = fibonacci;
