---
layout: post
title: Protecting Yourself Against rm
categories: blog
project_id: blog
project_title: Miscellaneous
---

Those who use the command-line on GNU/Linux operating systems know and love `rm`. But it also comes with so much power! No one wants to accidentally `rm -rf` the company data. To prevent myself from doing this on our data server, I aliased `rm` to something more sensible.

<!-- more -->

First, I created a shell script `~/are_you_sure_rm.sh` in my home directory. The file was pretty simple:

```
#!/bin/bash

echo "You just tried to do rm.
If you really meant to do so, then type /bin/rm followed
by what you want to do. It will be unprotected.
It is recommended you do /bin/rm -i for interactive mode."

```

Next, I made it executable:

```
chmod +x ~/are_you_sure_rm.sh
```

Lastly, I added an alias for `rm` to the native shell by adding this line to my `~/.bash_aliases` file.

```
# make sure to prompt on every removal of a file
alias rm="~/are_you_sure_rm.sh"
```

After logging out and back in, my new superpower is activated.

Now every time I try to `rm` something when SSHed into the company data server, my shell warns me! Amazing!
