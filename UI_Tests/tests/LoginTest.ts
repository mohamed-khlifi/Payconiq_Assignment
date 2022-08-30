import $ from '../selectors';
fixture('Login/Logout Test')
	.page($.baseURL)

test('Check that the login page loads successfully', async t => {
	await t
		.maximizeWindow()
		.expect($.loginLogo.with({ visibilityCheck: true }).exists).ok('Login logo is not visible', { timeout: 10000 })
		.expect($.loginBox.with({ visibilityCheck: true }).exists).ok('Login box is not visible', { timeout: 10000 })
});

test('Check that we login with a standard user', async t => {
	await t
		.maximizeWindow()
		.expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
		.typeText($.userNameInput, $.problemUser)
		.expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
		.typeText($.pwdInput, $.pwd)
		.expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
		.click($.loginButton)
		.expect($.inventoryList.with({ visibilityCheck: true }).exists).ok('Inventory list is not loaded after clicking on login button', { timeout: 10000 })
});

test('Check that we can not login with a locked out user', async t => {
	await t
		.maximizeWindow()
		.expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
		.typeText($.userNameInput, $.lockedOutUser)
		.expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
		.typeText($.pwdInput, $.pwd)
		.expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
		.click($.loginButton)
		.expect($.lockedOutError.with({ visibilityCheck: true }).exists).ok('Error message should be shown when trying to login with locked out user', { timeout: 10000 })
});

test('Check that we can not login when username field is empty', async t => {
	await t
		.maximizeWindow()
		.expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
		.typeText($.pwdInput, $.pwd)
		.expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
		.click($.loginButton)
		.expect($.usernameRequiredError.with({ visibilityCheck: true }).exists).ok('Error message should be shown when trying to login with empty username input', { timeout: 10000 })
});

test('Check that we can not login when username or password are not correct', async t => {
	await t
		.maximizeWindow()
		.expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
		.typeText($.userNameInput, 'admin')
		.expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
		.typeText($.pwdInput, 'password')
		.expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
		.click($.loginButton)
		.expect($.noMatchError.with({ visibilityCheck: true }).exists).ok('Error message should be shown when trying to login with wrong username or password', { timeout: 10000 })
});

test('Check that ce can logout successfully and get back to login page', async t => {
	await t
		.maximizeWindow()
		.expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
		.typeText($.userNameInput, $.standardUser)
		.expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
		.typeText($.pwdInput, $.pwd)
		.expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
		.click($.loginButton)
		.expect($.menuButton.with({ visibilityCheck: true }).exists).ok('Menu button is not visible', { timeout: 10000 })
		.click($.menuButton)
		.expect($.navMenu.with({ visibilityCheck: true }).exists).ok('Navside menu is not visible', { timeout: 10000 })
		.expect($.logoutButton.with({ visibilityCheck: true }).exists).ok('logout button is not visible', { timeout: 10000 })
		.click($.logoutButton)
		.expect($.loginLogo.with({ visibilityCheck: true }).exists).ok('Login logo is not visible after clicking on logout button', { timeout: 10000 })

});
