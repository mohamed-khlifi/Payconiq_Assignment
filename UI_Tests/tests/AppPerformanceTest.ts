import $ from '../selectors';
import { login } from '../Support/functions';
fixture('App Performance Test')
    .page($.baseURL)

test('Inventory Page Performance Test', async t => {
    await t
        .maximizeWindow()
        .expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
        .typeText($.userNameInput, $.standardUser)
        .expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
        .typeText($.pwdInput, $.pwd)
        .expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
    let firstPageStart = +new Date()
    await t
        .click($.loginButton)
        .expect($.inventoryList.with({ visibilityCheck: true }).exists).ok('Inventory list was not loaded after logging in', { timeout: 10000 })
    let firstPageelap = +new Date() - firstPageStart;
    var firstPageElapVal = (firstPageelap / 1000).toFixed(1)
    await t
        .expect(Number(firstPageElapVal) <= 5).ok("Took long time to display the inventory list after logging in")
})

test('Sorting Products Performance Test', async t => {
    await login()
    await t
        .expect($.productSortSelect.with({ visibilityCheck: true }).exists).ok('Product sorting select element is not visible', { timeout: 10000 })
        .click($.productSortSelect)
    const option = $.productSortSelect.find('option')
    let azStart = +new Date()
    await t
        .click(option.withText('Name (Z to A)'))
    var itemsCount = await $.inventoryItemName.count;
    for (let i = 0; i < itemsCount - 1; i++) {
        let itemText = await $.inventoryItemName.nth(i).innerText;
        let compareCellText = await $.inventoryItemName.nth(i + 1).innerText;
        await t
            .expect(itemText >= compareCellText).ok({ timeout: 1000 });
    }
    let azElap = +new Date() - azStart;
    var azElapVal = (azElap / 1000).toFixed(1)
    await t
        .expect(Number(azElapVal) <= 2).ok("Took long time to sort products by Name (Z to A)")
})