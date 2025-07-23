import { execSync } from 'child_process';
import chalk from 'chalk';

const safeExec = (command) => {
  try {
    return execSync(command, { encoding: 'utf8' }).trim();
  } catch {
    return null; 
  }
};

const checkProxyStatus = () => {
  try {
    console.log(chalk.bgYellow(' Checking proxy status...'));

    const npmProxy = safeExec('npm config get proxy');
    const npmHttpsProxy = safeExec('npm config get https-proxy');

    if (npmProxy && npmProxy !== 'null') {
      console.log(chalk.bgBlueBright(` npm proxy is set: ${npmProxy}`));
    } else if (npmHttpsProxy && npmHttpsProxy !== 'null') {
      console.log(chalk.bgBlueBright(` npm proxy is set via https-proxy: ${npmHttpsProxy}`));
    } else {
      console.log(chalk.bgRed(' npm proxy is not set.'));
    }

    const gitHttpProxy = safeExec('git config --global --get http.proxy');
    const gitHttpsProxy = safeExec('git config --global --get https.proxy');

    if ((gitHttpProxy && gitHttpProxy !== 'null') || (gitHttpsProxy && gitHttpsProxy !== 'null')) {
      console.log(chalk.bgBlueBright(` git proxy is set: ${gitHttpProxy || gitHttpsProxy}`));
    } else {
      console.log(chalk.bgRed(' git proxy is not set.'));
    }

    const envProxy =
      process.env.HTTP_PROXY ||
      process.env.HTTPS_PROXY ||
      process.env.http_proxy ||
      process.env.https_proxy;

    if (envProxy) {
      console.log(chalk.bgBlueBright(` Environment proxy is set: ${envProxy}`));
    } else {
      console.log(chalk.bgRed(' Environment proxy is not set.'));
    }

  } catch (error) {
    console.error(chalk.bgRed(' Unexpected error checking proxy status:'), error.message);
  }
};

export default checkProxyStatus;
