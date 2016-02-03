/// <reference path="expect.d.ts" />
import * as expect from "./expect"

class Test {}

let test = new Test();

//Object
expect(test).toBe({})
		  .toNotBe({})
		  .toEqual({})
		  .toNotEqual({})
		  .toExist()
		  .toNotExist()
		  .toBeA("object")
		  .toNotBeA("object")
		  .toBeA(Test)
		  .toNotBeA(Test);

//Numbers
expect(1)
		  //Standard stuff
		  .toBe(1)
		  .toNotBe(1)
		  .toEqual(1)
		  .toNotEqual(1)
		  .toExist()
		  .toNotExist()
		  //Non standard stuff
		  .toBeGreaterThan(0)
		  .toBeLessThan(2);

//Strings
expect("")
	//Standard stuff
		  .toBe("")
		  .toNotBe("")
		  .toEqual("")
		  .toNotEqual("")
		  .toExist()
		  .toNotExist()
	//Non standard stuff
	.toContain("")
	.toNotContain("")
	.toExclude("")
	.toInclude("")
	.toMatch(/ /);

//Function
expect(() => { })
		  //Standard stuff
		  .toBe(() => { })
		  .toEqual(() => { })
		  .toExist()
		  .toNotExist()
		  .toNotEqual(() => { })
		  //Non standard stuff
		  .toThrow()
		  .toNotThrow()
		  .withArgs()
		  .withContext(this);

//Spy
let spy = expect.createSpy<(a: number) => number>()
expect.isSpy(spy);
let otherSpy: expect.ISpy = expect.spyOn({}, "asdf");
expect.restoreSpies();

spy.andCall(() => { })
	.andCallThrough()
	.andReturn(1)
	.andThrow(new Error("test"))
	.restore();

//Should still be a function	
spy(1);
//Calls
spy.calls[0].arguments;
spy.calls[0].context;

expect(spy)
	//Standard stuff
	.toBe(spy)
	.toEqual(spy)
	.toExist()
	.toNotExist()
	.toNotEqual(spy)
	//Non standard stuff
	.toHaveBeenCalled()
	.toNotHaveBeenCalled()
	.toHaveBeenCalledWith();		  