import * as htmlTagInterfaces from "./index";

describe("html-tag-interfaces", () => {
  it("exports matches expectations", () => {
    expect(htmlTagInterfaces).toMatchSnapshot();
  });
});
