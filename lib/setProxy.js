import fs from 'fs-extra';
import path from 'path';
import { exec } from 'child_process';
import chalk from 'chalk';
import os from 'os';

const defaultProxy = 'http://172.31.2.4:8080';

const setProxy = async (options) => {
  const homeDir = os.homedir();
  const proxy = options.http || defaultProxy; 
  const proxyFilePath = path.join(homeDir, '.proxyenv.ps1');

  console.log(chalk.whiteBright(' Setting proxy...'));

  const proxyContent = `
$env:HTTP_PROXY="${proxy}"
$env:HTTPS_PROXY="${proxy}"
$env:http_proxy="${proxy}"
$env:https_proxy="${proxy}"
`;
  await fs.writeFile(proxyFilePath, proxyContent.trim());
  console.log(chalk.bgCyan(` Proxy settings written to ${proxyFilePath}`));


  exec(`npm config set proxy ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.bgRed(' Error setting npm proxy:'), stderr);
    } else {
      console.log(chalk.bgBlueBright(' npm proxy set successfully.'));
    }
  });

  exec(`npm config set https-proxy ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.bgRed(' Error setting npm https-proxy:'), stderr);
    } else {
      console.log(chalk.bgBlueBright(' npm https-proxy set successfully.'));
    }
  });

  exec(`git config --global http.proxy ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.bgRed(' Error setting git http proxy:'), stderr);
    } else {
      console.log(chalk.bgBlueBright(' git http proxy set successfully.'));
    }
  });

  exec(`git config --global https.proxy ${proxy}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.bgRed(' Error setting git https proxy:'), stderr);
    } else {
      console.log(chalk.bgBlueBright(' git https proxy set successfully.'));
    }
  });

  console.log(chalk.bgYellowBright(`(ℹ) Run '. $env:USERPROFILE\\proxyenv.ps1' to apply proxy settings to your terminal.`));
};

export default setProxy;
