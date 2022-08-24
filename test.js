const {stringLength, reverseString, calculator, capitalize} = require("./stringLength.js")
	//Task 1
	//arrange and act
	test('Length of "abcde" is 5', () => {
		//assert
		expect(stringLength('abcde')).toBe(5);
	});
	test('stringLength("abcdefghijkl") should throw error', () => {
		expect(() => stringLength('abcdefghijkl')).toThrow('string length should be between 1 and 10');
	})
	//Task 2
	test('reverse of "abcde" is "edcba"', () => {
		expect(()=>reverseString('abcde').toBe('edcba'));
	});

	//Task 3
	describe('Calculator tests', ()=>{
		test('sum(3, 4) should return 7', ()=> {
			expect(()=>calculator.sum(3, 4).toBe(7));
		});
		test('diff(3, 4) should return 7', ()=> {
			expect(()=>calculator.diff(3, 4).toBe(-1));
		});
		test('prod(3, 4) should return 12', ()=> {
			expect(()=>calculator.prod(3, 4).toBe(12));
		});
		test('quot(3, 4) should return 0.75', ()=> {
			expect(()=>calculator.quot(3, 4).toBe(0.75));
		});
	});

	//Task 4
	describe('Capitalizing test', ()=>{
		test('should throw if parameter type is not a string', () => {
			[true, {}, 9].forEach(str => {
					expect(() => {
							capitalize(str);
					}).toThrow('Please insert a string.');
			})
	});
		test('receives a string and capitalizes it', ()=> {
			
			expect(()=>capitalize('abcd').toBe('Abcd'));			
		});		
	});
	
	