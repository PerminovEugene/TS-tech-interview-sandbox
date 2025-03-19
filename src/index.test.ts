import { main } from "./index";

describe("main function test cases", () => {
  it("should test empty input", () => {
    expect(main([])).toStrictEqual([]);
  });
});
