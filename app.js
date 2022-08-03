 //bai 1
{
	const a = +(prompt('Nhập vào một số:'));
	const b = +(prompt('Nhập vào số thứ hai:'));
	for (let i = a; i <= b; i++) {
		let c = 0;
		for (let j = 2; j < i; j++) {
			if(i%j == 0) {
				c = 1;
				break;
			}
		}
		if(i> 1 && c == 0) {
			console.log(i);
		}
	}
}
 
 
 
 
 //bai2
	
{	
	const numberOneTriangle = (N) => {
	for(var i=1;i<N;i++) {
		var x = '';
		for(j=1;j<=i;j++) {
			x+= (' * ');
		}
        console.log(x);	
    }
}
numberOneTriangle(6);
}