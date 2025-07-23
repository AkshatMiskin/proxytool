import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { execSync } from 'child_process';

function unsetProxy() {
  try {
    console.log(chalk.bgYellow('Unsetting proxy...'));

    const proxyEnvFile = path.join(process.env.USERPROFILE, '.proxyenv.ps1');
    if (fs.existsSync(proxyEnvFile)) {
      fs.unlinkSync(proxyEnvFile);
      console.log(chalk.bgBlueBright(' Proxy environment file removed.'));
    } else {
      console.log(chalk.bgYellow(' Proxy environment file does not exist.'));
    }

    try {
      execSync('npm config delete proxy');
      execSync('npm config delete https-proxy');
      console.log(chalk.bgBlueBright(' npm proxy unset.'));
    } catch (npmError) {
      console.log(chalk.bgYellow(` Error unsetting npm proxy settings: ${npmError.message}`));
    }

    try {
      execSync('git config --global --unset http.proxy');
      execSync('git config --global --unset https.proxy');
      console.log(chalk.bgBlueBright(' git proxy unset.'));
    } catch (gitError) {
      console.log(chalk.bgYellow(` Error unsetting git proxy settings: ${gitError.message}`));
    }

    console.log(chalk.grey('ℹ. Restart your terminal to apply the changes.'));
  } catch (error) {
    console.error(chalk.bgRed(' Error unsetting proxy:'), error.message);
  }
}

export default unsetProxy;
