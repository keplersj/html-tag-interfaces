/**
 * @jest-environment jsdom
 */

import { interfaces } from "./index";

expect.addSnapshotSerializer({
  test(value) {
    return typeof value === "function";
  },
  serialize(value) {
    return value.name;
  },
});

describe("Element Tag to Class Interface Store", () => {
  it("contents match expectations", () => {
    expect(interfaces).toMatchSnapshot({});
  });
});
