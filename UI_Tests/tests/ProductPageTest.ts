import $ from '../selectors';
import { login } from '../Support/functions';
fixture('Product Page Test')
    .page($.baseURL)
    .beforeEach(async t => {
        await login();
    });

test('Check that we can sort products in ascending order of prices', async t => {
    await t
        .expect($.productSortSelect.with({ visibilityCheck: true }).exists).ok('Product sorting select element is not visible', { timeout: 10000 })
        .click($.productSortSelect)
    const option = $.productSortSelect.find('option')
    await t
        .click(option.withText('Price (low to high)'))
    var itemsCount = await $.inventoryItem.count;
    for (let i = 0; i < itemsCount - 1; i++) {
        let itemText = Number((await $.inventoryItem.nth(i).find('.inventory_item_price').innerText).replace(/[^0-9.-]+/g, ""));
        let compareCellText = Number(await (await $.inventoryItem.nth(i + 1).find('.inventory_item_price').innerText).replace(/[^0-9.-]+/g, ""));
        await t
            .expect(itemText <= compareCellText).ok({ timeout: 1000 });
    }
})
test('Check that we can sort products in descending order of prices', async t => {
    await t
        .expect($.productSortSelect.with({ visibilityCheck: true }).exists).ok('Product sorting select element is not visible', { timeout: 10000 })
    const option = $.productSortSelect.find('option')
    var itemsCount = await $.inventoryItem.count;
    await t
        .click($.productSortSelect)
        .click(option.withText('Price (high to low)'))
    for (let i = 0; i < itemsCount - 1; i++) {
        let itemText = Number((await $.inventoryItem.nth(i).find('.inventory_item_price').innerText).replace(/[^0-9.-]+/g, ""));
        let compareCellText = Number(await (await $.inventoryItem.nth(i + 1).find('.inventory_item_price').innerText).replace(/[^0-9.-]+/g, ""));
        await t
            .expect(itemText >= compareCellText).ok({ timeout: 1000 })
    }
})
test('Check that we can sort products in alphabetically ascending order of names', async t => {
    await t
        .expect($.productSortSelect.with({ visibilityCheck: true }).exists).ok('Product sorting select element is not visible', { timeout: 10000 })
    const option = $.productSortSelect.find('option')
    var itemsCount = await $.inventoryItem.count;
    await t
        .click($.productSortSelect)
        .click(option.withText('Name (Z to A)'))
        .click($.productSortSelect)
        .click(option.withText('Name (A to Z)'))
    for (let i = 0; i < itemsCount - 1; i++) {
        let itemText = await $.inventoryItem.nth(i).find('.inventory_item_name').innerText;
        let compareCellText = await $.inventoryItem.nth(i + 1).find('.inventory_item_name').innerText;
        await t
            .expect(itemText <= compareCellText).ok({ timeout: 1000 });
    }
})
test('Check that we can sort products in alphabetically descending order of names', async t => {
    await t
        .expect($.productSortSelect.with({ visibilityCheck: true }).exists).ok('Product sorting select element is not visible', { timeout: 10000 })
    const option = $.productSortSelect.find('option')
    var itemsCount = await $.inventoryItem.count;
    await t
        .click($.productSortSelect)
        .click(option.withText('Name (Z to A)'))
    for (let i = 0; i < itemsCount - 1; i++) {
        let itemText = await $.inventoryItem.nth(i).find('.inventory_item_name').innerText;
        let compareCellText = await $.inventoryItem.nth(i + 1).find('.inventory_item_name').innerText;
        await t
            .expect(itemText >= compareCellText).ok({ timeout: 1000 });
    }
});

test('Check if all product are added to the shopping cart', async t => {
    await t
        .expect($.inventoryItem.with({ visibilityCheck: true }).exists).ok('Add to cart button is not visible', { timeout: 10000 })
    const count = await $.inventoryItem.count
    for (let i = 0; i < count; i++) {
        await t.click($.inventoryItem.nth(i).find('button').withAttribute('id', /add/))
    }
    await t.expect($.shoppingCartBadge.innerText).eql(String(count), 'Number of orders should be the same as the number of products, seems like it is not', { timeout: 2000 })


});