# Korgel Group Website

## Connecting to the site

When on a university network or VPN, open VSCode and ensure that the `SFTP` plugin by `Natizyskunk` is installed.

If it is the first time connecting, use `SFTP: config` in the command palette and fill in `sftp.json`. My file is as follows:

```json
{
    "name": "Korgel Web",
    "host": "panel.utweb.utexas.edu",
    "protocol": "sftp",
    "port": 22,
    "username": "***REMOVED***",
    "password": "***REMOVED***",
    "remotePath": "/home/utweb/***REMOVED***/",
    "context": "./src/",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": false
}
```

### Remote Explorer Connection

The Remote explorer connection can help view files. However, the remote files cannot be edited.

Run `View: Show SFTP` in the command palette to show the SFTP plugin tab.
