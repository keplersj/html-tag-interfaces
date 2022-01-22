import { interfaces, InterfaceMap } from "./interfaces.js";

export function getInterface(elementName: string): typeof HTMLElement {
  if (elementName.includes("-")) {
    const registered = customElements.get(elementName);

    if (registered) {
      return registered;
    }
  }

  if ((interfaces as InterfaceMap)[elementName]) {
    return (interfaces as InterfaceMap)[elementName];
  }

  return HTMLUnknownElement;
}
