---
layout: post
title: Protecting Yourself Against rm
categories: blog
project_id: blog
project_title: Miscellaneous
---

Those who use the command-line on GNU/Linux operating systems know and love `rm`. But it is also the bane of our existance. No one wants to accidentally `rm -rf` the company data. To prevent myself from doing this on our data server, I aliased `rm` to something more sensible.

<!-- more -->

First, create a file `~/are_you_sure_rm.sh` in your home directory. This is the contents of mine, which I am sure will evolve over time:

```
#!/bin/bash

if [[ "$PWD" == *"/lake"* || "$@" == *"/lake"* ]]; then
  echo "You just tried to do rm in /lake. If you really meant to do so, then type /bin/rm followed by what you want to do. It will be unprotected. It is recommended you do /bin/rm -i for interactive mode."
else
  rm -i "$@"
fi

```

Next, make sure it is executable:

```
chmod +x ~/are_you_sure_rm.sh
```

Lastly, add an alias for `rm` to your native shell by adding this line to your `~/.bash_aliases` file (and create the file if you do not have one).

```
# make sure to prompt on every removal of a file
alias rm="~/are_you_sure_rm.sh"
```

Log out and log back in to active your superpower.

Now every time you try to `rm` something either from the `/lake` or that contains `/lake`, your shell will scream at you. What more do you want?
