const item = {
  name: 'Magic shield of Grandor',
  durability: 20,
  enhancement: 5,
};

function success(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    return { ...item, enhancement: item.enhancement++ };
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    console.log('before', item);
    return { ...item, durability: item.durability - 5 };
  } else if (item.durability >= 15) {
    return { ...item, durability: item.durability - 10 };
  } else if (item.enhancement > 16) {
    return { ...item, enhancement: item.enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else if (item.enhancement > 0) {
    return { ...item, name: `[+${item.enhancement}]item.name` };
  }
}

module.exports = {
  success,
  fail,
  repair,
  get,
  item,
};
