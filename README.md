# Payconiq_Assignment
Automated testing for Saucedemo application (UI)

# Why to choose TestCafé
**Works on all popular environments:** TestCafe runs on Windows, MacOS, and Linux. It supports desktop, mobile, remote and cloud browsers (UI or headless).

# TestCafé installation
Run `npm install` in the project folder to install all dependencies.

In the command line, type cd UI_Tests/tests to move to the tests folder
I recommend to run all tests together with concurrency set as 2 to same time and I also recommend to run the tests in the headless mode.
To do so, type `npx testcafe -c 2 chrome:headless *.ts`

Another way to run tests is to use a runner to start tests, just go to project folder and type `node runner.js`

###### I have tested with Chrome and Firefox

### Test Results with standard_user
$ npx testcafe -c 2 chrome:headless *.ts
 Running tests in:
 - Chrome 104.0.5112.102 / Windows 11
 - Chrome 104.0.5112.102 / Windows 11

 App Performance Test
 ✅ Inventory Page Performance Test
 ✅ Sorting Products Performance Test

 Checkout Step One Page Test
 ✅ Check if Step One Page is shown
 ✅ Check if Firstname is required
 ✅ Check if Lastname is required
 ✅ Check if Zip/Postal Code is required
 ✅ Check if user can cancel the order and gets back to cart page

 Checkout Step Two Page Test
 ✅ Check if Step Two Page is shown
 ✅ Check if user can cancel and gets back to products page
 ✅ Check if total price is correct
 ✅ Check that we can move to complete page

 Details Page Test
 ✅ Check if details page is shown when clicking on an Item
 ✅ Check if product details match in inventory page and details page
 ✅ Check and ensure that the user can go back from the details page to the inventory page
 ✅ Check and ensure that the user can make an order from the details page
 ✅ Check and ensure that the user can remove an order from the details page

 Login/Logout Test
 ✅ Check that the login page loads successfully
 ✅ Check that we login with a standard user
 ✅ Check that we can not login with a locked out user
 ✅ Check that we can not login when username field is empty
 ✅ Check that we can not login when username or password are not correct
 ✅ Check that ce can logout successfully and get back to login page

 Product Page Test
 ✅ Check that we can sort products in ascending order of prices
 ✅ Check that we can sort products in descending order of prices
 ✅ Check that we can sort products in alphabetically ascending order of names
 ✅ Check that we can sort products in alphabetically descending order of names
 ✅ Check if all product are added to the shopping cart

 27 passed (1m 56s)
