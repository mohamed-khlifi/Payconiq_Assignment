const createTestCafe = require('testcafe');
let testcafe = null;
let runner = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
    })
    .then(() => {
        runner = testcafe.createRunner('SAUCEDEMO TESTS');
        return runner
            .src(['UI_Tests/tests/*.ts'])
            .browsers('chrome:headless')
            .concurrency(2)
            .reporter('junit', 'reports/report.xml')
            .screenshots({takeOnFails: true})
            .run({
                pageRequestTimeout: 10000,
                quarantineMode: { successThreshold: 1, attemptLimit: 3 }
            });
    })
    .then(failed => {
        console.log('Tests failed: ' + failed);
        testcafe.close()
    })
    .catch(error => { console.log(error) });