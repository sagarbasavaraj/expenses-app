export const getExpenseId = target => {
  let node = target;

  while (node.type !== "button") {
    node = node.parentNode;
  }

  if (node) {
    const id = node.getAttribute("data-id");
    return id;
  }

  return null;
};
