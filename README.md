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
    "username": "",
    "password": "",
    "remotePath": "",
    "context": "./src/",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": false
}
```

SFTP then can be used to push, pull or sync changes between the remote and local repositories.

### Remote Explorer Connection

The Remote explorer connection can help view files. However, the remote files cannot be edited.

Run `View: Show SFTP` in the command palette to show the SFTP plugin tab.

## TODO

[X] Update publications
[X] Remove uppercase filenames
[] Update Jon and Brian's room numbers
[] Get new header images
[] Get stuff for new members
[] move people and alumni to their own subfolders
[] Add permalinks to all articles
[X] Add files for utwXXXXX/ dir
[] Push utwXXXXX/dir then modify remote dir
[] Update group pictures
[] Update group members individual pages
[] Update group members titles and locations
[] Thana, _______ visiting scholar
[] Reisner, Stacy, Isabel, Hailey, Nha to former members
[] Undergrads: Liam, Jenny Wang (?), Kara Nagasaki (?), Kimberly Wang (?)
