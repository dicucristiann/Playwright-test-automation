require('dotenv').config({ path: './.env' });

const { exec } = require('child_process');

const testFile = process.env.TEST_RUN || '';
const showReport = process.env.SHOW_REPORT === 'true';

if (!testFile) {
    console.error('Error: TEST_RUN is not defined in the .env file.');
    process.exit(1);
}

// Playwright test command
exec(`npx playwright test ${testFile} --headed`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error running test: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Test Error: ${stderr}`);
        return;
    }
    console.log(stdout); // test results

    // Options show the report
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
            console.log(reportStdout); // report output
        });
    } else {
        console.log('SHOW_REPORT is set to false. Skipping report generation.');
    }
});
