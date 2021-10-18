---
layout: post
title: pyenv and shells
categories: blog
project_id: blog
project_title: Miscellaneous
published: false
---

* difference between .profile, .bash_profile, .bashrc

.profile --> sources .bashrc
.bash_profile --> 
.bashrc --> sources .bash_profile


pyenv: the scripts only should be run ONCE



manually running in this order:
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

ended up putting this all in .bash_profile


CORE ISSUE IS THAT THE PATH VARIABLE DOESN'T CHANGE WHEN RUNNING pyenv virtualenv activate --> WHY


