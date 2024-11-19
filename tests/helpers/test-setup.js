require('dotenv').config({ path: './.env' });
const { exec } = require('child_process');

const testFile = process.env.TEST_RUN || ''; // Will run all tests if empty
const showReport = process.env.SHOW_REPORT === 'true' && process.env.CI !== 'true';
const headed = process.env.HEADED === 'true' ? '--headed' : '';

if (!testFile) {
    console.log('TEST_RUN not specified. Running all tests...');
}

exec(`npx playwright test ${testFile} ${headed}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error running test: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Test Error: ${stderr}`);
        return;
    }
    console.log(stdout); // results

    // Will generate report if SHOW_REPORT=true
    if (showReport) {
        console.log('Generating Playwright report...');
        exec('npx playwright show-report', (reportError, reportStdout, reportStderr) => {
            if (reportError) {
                console.error(`Error showing report: ${reportError.message}`);
                return;
            }
            if (reportStderr) {
                console.error(`Report Error: ${reportStderr}`);
                return;
            }
            console.log(reportStdout); //Output Report
        });
    } else {
        console.log('SHOW_REPORT is set to false. Skipping report generation.');
    }
});
