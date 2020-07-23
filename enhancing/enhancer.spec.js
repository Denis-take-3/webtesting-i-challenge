const enhancer = require('./enhancer.js');
const { item } = require('./enhancer');

describe('video game enhancing system', function () {
  it('repair an iterm', function () {
    expect(enhancer.repair(item)).toStrictEqual({ ...item, durability: 100 });
  });
  it('succedes in enhancing an item', function () {
    if (item.enhancement === 20) {
      expect(enhancer.success(item)).toStrictEqual({ ...item });
    } else {
      expect(enhancer.success(item)).toStrictEqual({
        ...item,
        enhancement: item.enhancement - 1,
      });
    }
  });
  it('fails in enhancing an item', function () {
    if (item.enhancement < 15) {
      expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: item.durability - 5 });
    } else if (item.enhancement >= 15) {
      expect(enhancer.fail(item)).toStrictEqual({ ...item, durability: item.durability - 10 });
    } else if (item.enhancement > 16) {
      expect(enhancer.fail(item)).toStrictEqual({ ...item, enhancement: item.durability - 1 });
    }
  });
  it('shows enhancement level', function () {
    if (item.enhancement === 0) {
      expect(enhancer.get(item)).toStrictEqual({ ...item });
    }
    if (item.enhancement > 0) {
      expect(enhancer.get(item)).toStrictEqual({ ...item, name: `[+${item.enhancement}]item.name` });
    }
  });
});
// test away!, yes!
