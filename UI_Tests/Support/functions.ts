import { t } from 'testcafe';
import $ from '../selectors';


export async function login() {
    await t
        .maximizeWindow()
        .expect($.userNameInput.with({ visibilityCheck: true }).exists).ok('Username input not visible', { timeout: 10000 })
        .typeText($.userNameInput, $.standardUser)
        .expect($.pwdInput.with({ visibilityCheck: true }).exists).ok('Password input is not visible', { timeout: 10000 })
        .typeText($.pwdInput, $.pwd)
        .expect($.loginButton.with({ visibilityCheck: true }).exists).ok('Login button is not visible', { timeout: 10000 })
        .click($.loginButton)
}