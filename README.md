ProxyTool
ProxyTool is a simple CLI tool for managing proxy settings (npm, Git, system environment variables) on Windows using PowerShell. Designed for environments like campus networks, it helps set/unset proxies easily and efficiently, especially in setups like VSCode and terminal.

✨ Features
✅ Set HTTP/HTTPS proxy for:

npm

Git

System environment variables (via PowerShell script)

🔄 Unset previously set proxies

🔍 View current proxy configurations

📦 Installation
Install globally via npm:

bash
Copy
Edit
npm install -g @akshatmiskin/proxytool
⚙️ Usage
➕ Set Proxy
bash
Copy
Edit
proxytool set --http http://<your-proxy>:<port>
This will:

Configure proxy for npm and Git

Create a PowerShell script (proxyenv.ps1) in your home directory

Show instructions to apply the environment proxy immediately

🎓 For IIIT Allahabad Users:
Just run:

bash
Copy
Edit
proxytool set
It will auto-configure using the default proxy: http://172.31.2.4:8080.

⚠️ You’ll still need to authenticate in the browser once.

➖ Unset Proxy
bash
Copy
Edit
proxytool unset
This will:

Remove proxy settings from npm and Git

Delete the PowerShell proxy script (proxyenv.ps1)

ℹ️ Check Proxy Status
bash
Copy
Edit
proxytool status
Outputs current settings for:

npm

Git

System environment variables

⚠️ PowerShell Execution Policy
To apply system environment variables using a PowerShell script, ensure script execution is allowed.

🔐 Steps:
Check current policy:

powershell
Copy
Edit
Get-ExecutionPolicy
If it returns Restricted, proceed to the next step.

Allow scripts:

powershell
Copy
Edit
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
Apply proxy settings:

powershell
Copy
Edit
. $env:USERPROFILE\proxyenv.ps1
🛠️ Troubleshooting
❓ npm proxy still not visible?
If npm config get proxy returns nothing, manually set it using:

bash
Copy
Edit
npm config set proxy http://<your-proxy>:<port>
npm config set https-proxy http://<your-proxy>:<port>
🤝 Contributing
You're welcome to contribute!

Fork the repo

Create a new branch:

bash
Copy
Edit
git checkout -b feature-branch
Make your changes

Commit and push:

bash
Copy
Edit
git commit -m "Add feature"
git push origin feature-branch
Open a Pull Request 🚀

📄 License
Licensed under the ISC License.
