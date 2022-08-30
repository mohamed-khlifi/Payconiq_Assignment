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
