import $ from '../selectors';
import { login } from '../Support/functions';
fixture('Checkout Step Two Page Test')
    .page($.baseURL)
    .beforeEach(async t => {
        await login();
    });

test('Check if Step Two Page is shown', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.firstNameInput, 'Mohamed')
        .typeText($.lastNameInput, 'Khlifi')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.summaryInfo.with({ visibilityCheck: true }).exists).ok('Step Two Page is not visible', { timeout: 10000 })
});

test('Check if user can cancel and gets back to products page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.firstNameInput, 'Mohamed')
        .typeText($.lastNameInput, 'Khlifi')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.summaryInfo.with({ visibilityCheck: true }).exists).ok('Step Two Page is not visible', { timeout: 10000 })
        .expect($.cancelButton.with({ visibilityCheck: true }).exists).ok('Cancel button is not visible', { timeout: 10000 })
        .click($.cancelButton)
        .expect($.inventoryList.with({ visibilityCheck: true }).exists).ok('Products page is not visible after clicking on cancel button', { timeout: 10000 })
});

test('Check if total price is correct', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.firstNameInput, 'Mohamed')
        .typeText($.lastNameInput, 'Khlifi')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.summaryInfo.with({ visibilityCheck: true }).exists).ok('Step Two Page is not visible', { timeout: 10000 })
    var expectedItemTotal = 0
    for (let i = 0; i < await $.stepTwoItem.count; i++) {
        expectedItemTotal = expectedItemTotal + Number((await $.stepTwoItem.nth(i).find('.inventory_item_price').innerText).replace(/[^0-9.-]+/g, ""))
    }
    var expectedTotal = expectedItemTotal + Number((await $.taxLabel.innerText).replace(/[^0-9.-]+/g, ""))
    await t.expect(Number((await $.totalLabel.innerText).replace(/[^0-9.-]+/g, ""))).eql(expectedTotal, 'Total price is not correct', { timeout: 2000 })
});

test('Check that we can move to complete page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.firstNameInput, 'Mohamed')
        .typeText($.lastNameInput, 'Khlifi')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.finishButton.with({ visibilityCheck: true }).exists).ok('Finish button is not visible', { timeout: 10000 })
        .click($.finishButton)
        .expect($.checkoutCompleteContainer.with({ visibilityCheck: true }).exists).ok('CHeckout complete page is not visible after clicking on the finish button', { timeout: 10000 })
});