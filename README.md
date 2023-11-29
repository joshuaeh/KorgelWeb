# Korgel Group Website

## Site Layout

```plaintext
utwebXXXXX/
  README.md
  .gitignore
  <other files and dirs for the server itself>
  public_html/
    css/
    docs/
    headerIMGs/
    img/
      Group Photos/
      people/
    isha/
    scripts/
    index.html
    links.htm
    news.htm
    outreach.htm
    publications.htm
    people.htm
    research.htm
    <all other html files>
```

the `utwebXXXXX` directory is the home directory for our user. By initializing a
blank repository, then setting the origin to the github repository and pulling,
we were able to set this directory as the root directory of the repository. The commands
to do this are:

```bash
git init
git remote add origin https://github.com/me/name.git
git pull origin master
```

Now that the repository is initialized, we can specify website versions using tags,
then ssh into the server and checkout the tag using `git checkout tag-name`.

## Connecting to the site

The easiest way to access the site is to use the `Remote-SSH` extension in VSCode.
After connecting, open the explorer view and open the `utwebXXX` directory again to
be able to inspect and alter files easily. Beware though, this is the live version
of the site so I prefer to use git.

### SFTP

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
[X] Update Jon and Brian's room numbers  
[X] Get new header images  
[] Get stuff for new members  
[] move people and alumni to their own subfolders  
[] Add permalinks to all articles  
[X] Add files for utwXXXXX/ dir  
[] Push utwXXXXX/dir then modify remote dir  
[X] Update group pictures  
[] Update group members individual pages  
[X] Update group members titles and locations  
[] Thana, _______ visiting scholar  
[] Reisner, Stacy, Isabel, Hailey, Nha to former members  
[] Undergrads: ~~Liam~~, Jenny Wang (?), Kara Nagasaki (?), Kimberly Wang (?)  
[] Change webmaster link to joshua.hammond form mkabney
[] I/UCRC name on links page  
[] Master News Page  
[] Master Research Highlights Page  
[] Python script to automatically update date, webmaster etc  
