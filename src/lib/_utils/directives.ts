export function space(node: HTMLElement, spaceClasses: string) {
  const wrap = () => {
    node.childNodes.forEach((element) => {
      if (!element) {
        return;
      }
      if (element.nodeType === 3 && (!element.nodeValue || /^\s+$/.test(element.nodeValue))) {
        return;
      }
      if (element.parentNode) {
        const wrapItem = document.createElement('div');
        wrapItem.className = spaceClasses;
        element.parentNode.insertBefore(wrapItem, element);
        wrapItem.appendChild(element);
      }
    });
  }
  wrap();
  return {
    destroy: wrap
  };
}
