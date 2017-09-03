const fb=require('../app/fb.js')

function main(n) {
	for (let i=1; i<n; ++i) {
		console.log(`${i}: ${fb(i)}`);
	}
}

main(20);
