# ProxyTool

**ProxyTool** is a simple command-line utility for setting and managing proxy settings for npm, Git, and system environment variables on Windows and VSCode using PowerShell. This tool helps you configure and unset proxies with ease, allowing you to manage your network settings directly from your terminal.

---

## Features

- **Set Proxy**: Configure HTTP and HTTPS proxy for npm, Git, and environment variables with a single command.
- **Unset Proxy**: Remove proxy settings from npm, Git, and environment variables.
- **Check Proxy Status**: View the current proxy settings for npm, Git, and system environment variables.

---

## Installation

You can install **ProxyTool** globally from npm to use it on your system.

```bash
npm install -g @harshitnpm033/proxytool
```

---

## Usage

### 1. Set Proxy

To set a proxy for npm, Git, and environment variables, simply run:

```bash
proxytool set --http http://<your-proxy>:<port>
```

This will:
- Write the proxy settings to a PowerShell script (`.proxyenv.ps1`).
- Set npm and Git proxy settings.
- Provide instructions to run the script to apply the environment variables to your terminal session.

#### For **IIIT Allahabad** Students:
If you're a student of **IIIT Allahabad**, the default proxy (http://172.31.2.4:8080) is already hardcoded. To set the proxy, just run:

```bash
proxytool set
```

This command will automatically set the proxy for npm, Git, and environment variables without needing to specify the proxy URL. But you will still need to login with your credentials in the browser once.

### 2. Unset Proxy

To remove the proxy settings for npm, Git, and environment variables, run:

```bash
proxytool unset
```

This will:
- Remove the proxy settings from npm and Git.
- Delete the `.proxyenv.ps1` file, if it exists.

### 3. Check Proxy Status

To view the current proxy settings, run:

```bash
proxytool status
```

This will display:
- npm proxy status
- git proxy status
- Environment proxy status

---

## Prerequisites

To use **ProxyTool** effectively, you may need to change your PowerShell execution policy to allow script execution. The default policy on Windows may block the running of scripts.

### Setting Execution Policy

1. **Check current execution policy**:

   Open PowerShell and run:

   ```powershell
   Get-ExecutionPolicy
   ```

   If the result is **Restricted**, you'll need to change it.

2. **Set Execution Policy**:

   To allow local scripts to run, set the execution policy to **RemoteSigned** by running the following command in **Administrator** mode:

   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

   This will allow locally created scripts to run and require downloaded scripts to be signed by a trusted publisher.

3. **Run the Script**:

   After setting the execution policy, apply the proxy settings to your current PowerShell session by running:

   ```powershell
   . $env:USERPROFILE\proxyenv.ps1
   ```

---

## Troubleshooting

### **Proxy settings not showing in npm config**:

If you notice that **npm config get proxy** returns `null` or `undefined`, it's possible that npm was not correctly configured. Ensure that the proxy URL is set by checking the `.npmrc` file, and manually updating it if necessary:

```bash
npm config set proxy http://<your-proxy>:<port>
npm config set https-proxy http://<your-proxy>:<port>
```

---

## Contributing

If you'd like to contribute to **ProxyTool**, feel free to submit issues or pull requests. Here's how you can contribute:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch (`git checkout -b feature-branch`).
4. Make your changes.
5. Commit your changes (`git commit -am 'Add feature'`).
6. Push to the branch (`git push origin feature-branch`).
7. Open a pull request.

---

## License

This project is licensed under the ISC License.

---

Let me know if you'd like any further changes!