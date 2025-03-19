import { main } from "./index";

describe("main function test cases", () => {
  it(" some3 number5 ", () => {
    expect(main(" some3 number5 ")).toStrictEqual(["Fizz", "Buzz"]);
  });

  it("21 fizz dska 15 4", () => {
    expect(main("21 fizz dska 15 4")).toStrictEqual(["Fizz", "FizzBuzz", "4"]);
  });

  it("empty", () => {
    expect(main(" some number")).toStrictEqual([]);
  });

  it("4", () => {
    expect(main(" 4")).toStrictEqual(["4"]);
  });
});
