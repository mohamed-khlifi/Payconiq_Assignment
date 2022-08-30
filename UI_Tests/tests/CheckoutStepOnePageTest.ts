import $ from '../selectors';
import { login } from '../Support/functions';
fixture('Checkout Step One Page Test')
    .page($.baseURL)
    .beforeEach(async t => {
        await login();
    });

test('Check if Step One Page is shown', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
});

test('Check if Firstname is required', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.lastNameInput, 'Khlifi')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.firstnameRequiredError.with({ visibilityCheck: true }).exists).ok('Firstname required error message was not visible after not filling the input and clicking on continue button', { timeout: 10000 })
});

test('Check if Lastname is required', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.checkoutInfoForm.with({ visibilityCheck: true }).exists).ok('Step One Page is not visible after clicking on checkout button', { timeout: 10000 })
        .typeText($.firstNameInput, 'Mohamed')
        .typeText($.zipCodeInput, '2086')
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.lastnameequiredError.with({ visibilityCheck: true }).exists).ok('Lastname required error message was not visible after not filling the input and clicking on continue button', { timeout: 10000 })
});

test('Check if Zip/Postal Code is required', async t => {
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
        .expect($.continueButton.with({ visibilityCheck: true }).exists).ok('Continue button is not visible', { timeout: 10000 })
        .click($.continueButton)
        .expect($.zipRequiredError.with({ visibilityCheck: true }).exists).ok('Zip/Postal Code required error message was not visible after not filling the input and clicking on continue button', { timeout: 10000 })
});

test('Check if user can cancel the order and gets back to cart page', async t => {
    await t
        .expect($.inventoryItemName.with({ visibilityCheck: true }).exists).ok({ timeout: 10000 })
        .click($.inventoryItem.nth(0).find('button').withAttribute('id', /add/))
        .click($.inventoryItem.nth(1).find('button').withAttribute('id', /add/))
        .click($.shoppingCartIcon)
        .expect($.checkoutButton.with({ visibilityCheck: true }).exists).ok('Checkout button is not visible', { timeout: 10000 })
        .click($.checkoutButton)
        .expect($.cancelButton.with({ visibilityCheck: true }).exists).ok('Cancel button is not visible', { timeout: 10000 })
        .click($.cancelButton)
        .expect($.cartList.with({ visibilityCheck: true }).exists).ok('Cart list is not visible after clicking on cancel button', { timeout: 10000 })

});