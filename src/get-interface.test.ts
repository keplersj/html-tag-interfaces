import { getInterface } from "./get-interface";

describe("#getInterface", () => {
  it("returns HTMLUnknownElement when unable to match a tag to an interface", () => {
    const element = getInterface("unknown");

    expect(element.name).toBe("HTMLUnknownElement");
  });

  it("returns the mapped interface, given a valid tag name", () => {
    const element = getInterface("div");

    expect(element.name).toBe("HTMLDivElement");
  });

  it("returns the interface for a registered custom element", () => {
    class CustomElement extends HTMLElement {
      constructor() {
        super();
      }
    }

    customElements.define("test-custom-element", CustomElement);

    const element = getInterface("test-custom-element");

    expect(element.name).toBe("CustomElement");
  });

  it("return HTMLUnknownElement for an unregistered custom element", () => {
    const element = getInterface("unknown-custom-element");

    expect(element.name).toBe("HTMLUnknownElement");
  });
});
