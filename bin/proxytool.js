#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';

import setProxy from '../lib/setProxy.js';
import unsetProxy from '../lib/unsetProxy.js';
import statusProxy from '../lib/statusProxy.js';

const program = new Command();

program
  .name('proxytool')
  .description('CLI tool to manage proxy settings easily.')
  .version('0.1.0');


program
  .command('set')
  .description('Set proxy settings')
  .option('--http <proxy>', 'HTTP Proxy URL')
  .option('--https <proxy>', 'HTTPS Proxy URL')
  .option('--username <username>', 'Username for proxy authentication')
  .option('--password <password>', 'Password for proxy authentication')
  .action(setProxy);


program
  .command('unset')
  .description('Remove proxy settings')
  .action(unsetProxy);

program
  .command('status')
  .description('Show current proxy settings')
  .action(statusProxy);

program.parse(process.argv);
