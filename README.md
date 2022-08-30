# Payconiq_Assignment
Automated testing for Saucedemo application (UI)

# Why to choose TestCafé
**Works on all popular environments:** TestCafe runs on Windows, MacOS, and Linux. It supports desktop, mobile, remote and cloud browsers (UI or headless).

# TestCafé installation
Run `npm install` in the project folder to install all dependencies.

In the command line, type cd UI_Tests/tests to move to the tests folder.<br>
I recommend to run all tests together with concurrency set as 2 to same time and I also recommend to run the tests in the headless mode.<br>
To do so, type `npx testcafe -c 2 chrome:headless *.ts`

Another way to run tests is to use a runner to start tests, just go to project folder and type `node runner.js`

###### Tested with Chrome and Firefox

### Test Results with standard_user
npx testcafe -c 2 chrome:headless *.ts
 Running tests in:
 - Chrome 104.0.5112.102 / Windows 11
 - Chrome 104.0.5112.102 / Windows 11

 ##### App Performance Test
 ✅ Inventory Page Performance Test<br>
 ✅ Sorting Products Performance Test<br>

 ##### Checkout Step One Page Test<br>
 ✅ Check if Step One Page is shown<br>
 ✅ Check if Firstname is required<br>
 ✅ Check if Lastname is required<br>
 ✅ Check if Zip/Postal Code is required<br>
 ✅ Check if user can cancel the order and gets back to cart page<br>

 ##### Checkout Step Two Page Test<br>
 ✅ Check if Step Two Page is shown<br>
 ✅ Check if user can cancel and gets back to products page<br>
 ✅ Check if total price is correct<br>
 ✅ Check that we can move to complete page<br>

 ##### Details Page Test<br>
 ✅ Check if details page is shown when clicking on an Item<br>
 ✅ Check if product details match in inventory page and details page<br>
 ✅ Check and ensure that the user can go back from the details page to the inventory page<br>
 ✅ Check and ensure that the user can make an order from the details page<br>
 ✅ Check and ensure that the user can remove an order from the details page<br>

 ##### Login/Logout Test<br>
 ✅ Check that the login page loads successfully<br>
 ✅ Check that we login with a standard user<br>
 ✅ Check that we can not login with a locked out user<br>
 ✅ Check that we can not login when username field is empty<br>
 ✅ Check that we can not login when username or password are not correct<br>
 ✅ Check that ce can logout successfully and get back to login page<br>

 ##### Product Page Test<br>
 ✅ Check that we can sort products in ascending order of prices<br>
 ✅ Check that we can sort products in descending order of prices<br>
 ✅ Check that we can sort products in alphabetically ascending order of names<br>
 ✅ Check that we can sort products in alphabetically descending order of names<br>
 ✅ Check if all product are added to the shopping cart<br>

 27 passed (1m 56s)
