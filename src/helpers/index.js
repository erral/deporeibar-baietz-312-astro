export const sortByAttribute = (items, fun) => {
  items.sort((a, b) => {
    let a_attribute = fun(a);
    let b_attribute = fun(b);
    if (a_attribute < b_attribute) {
      return -1;
    } else if (a_attribute > b_attribute) {
      return 1;
    }
    return 0;
  });
  return items;
};
