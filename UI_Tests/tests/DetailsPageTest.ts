import $ from '../selectors';
import { login } from '../Support/functions';
fixture('Details Page Test')
    .page($.baseURL)
    .beforeEach(async t => {
        await login();
    });

test('Check if details page is shown when clicking on an Item', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItemName.nth(0))
        .expect($.inventoryDetailsContainer.with({ visibilityCheck: true }).exists).ok('Inventory Details page was not shown after clicking on a product', { timeout: 10000 })
});

test('Check if product details match in inventory page and details page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
    const invName = await $.inventoryItem.nth(0).find('.inventory_item_name').innerText
    const invDescription = await $.inventoryItem.nth(0).find('.inventory_item_desc').innerText
    const invPrice = await $.inventoryItem.nth(0).find('.inventory_item_price').innerText
    await t
        .click($.inventoryItemName.nth(0))
        .expect($.inventoryDetailsImage.with({ visibilityCheck: true }).exists).ok('Inventory details image is not shown on the details page', { timeout: 10000 })
        .expect($.inventoryDetailsName.innerText).eql(invName, 'Name in inventory page and details page do not match', { timeout: 2000 })
        .expect($.inventoryDetailsDesc.innerText).eql(invDescription, 'Description in inventory page and details page do not match', { timeout: 2000 })
        .expect($.inventoryDetailsPrice.innerText).eql(invPrice, 'Price in inventory page and details page do not match', { timeout: 2000 })
});

test('Check and ensure that the user can go back from the details page to the inventory page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItemName.nth(0))
        .expect($.backToProductsButton.with({ visibilityCheck: true }).exists).ok('Back to products button is not visible', { timeout: 10000 })
        .click($.backToProductsButton)
        .expect($.inventoryList.with({ visibilityCheck: true }).exists).ok('Inventory list page was not loaded after clicking on back to products button', { timeout: 10000 })

});

test('Check and ensure that the user can make an order from the details page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItemName.nth(0))
        .expect($.addToCartButton.with({ visibilityCheck: true }).exists).ok('Add to cart button is not visible in the details page', { timeout: 10000 })
        .click($.addToCartButton)
        .expect($.shoppingCartBadge.innerText).eql('1', 'The cart is still empty after clicking on the add to cart button', { timeout: 2000 })

});

test('Check and ensure that the user can remove an order from the details page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(0).find('.inventory_item_name'))
        .expect($.removeFromCartButton.with({ visibilityCheck: true }).exists).ok('Remove button is not visible in the details page', { timeout: 10000 })
        .click($.removeFromCartButton)
        .expect($.shoppingCartBadge.with({ visibilityCheck: true }).exists).notOk('Product was not removed from cart after clicking on the remove button', { timeout: 2000 })
});