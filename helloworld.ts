// npm install -g typescript // install

// tsc helloworld.ts // compile

let x: number = 0x0df;

let y: string = '1345';

let z = '2';

console.log(x, y, z);

interface NumberDictionary {
	[index: string]: number;
	length: number;    // ok, length is a number
	//name: string;      // error, the type of 'name' is not a subtype of the indexer
}

let k: NumberDictionary;
k = {'Jo':1, 'Ko':2, length: 11};
console.log(k);

