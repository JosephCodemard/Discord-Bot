# Discord bot #

### v3.1.0 ###



## Content ##

* [Features](#Features)
* [Setup](#Setup)
* [Syntax](#Syntax)
* [Documentation](#Documentation)
* [Contributing](#Contributing)
* [Support](#Support)
* [License](#License)

---

## Features ##

### This bots features include: ###

* Voice chat text to speach
* Kick users
* Reactions
* Change nicknames
* Add reply
* Random small talk

Random small talk works by randomly selecting a message from data.json
These messages can be added with "Add reply"

---

## Setup ##

You must first have a bot set up. This can be done throught the [Discord Developer Portal](https://discord.com/developers/applications)

You must start by going into [config.json](../master/src/config.json) and add your bot's credentials.
The `bot_id` field must be surronded by <@! and >


#### Note ####

The prefix and bot name is completely optional and does not relate to anything.
The `server_general_id` is a reference to the channel id of the channel `general`


```shell
$ npm i
$ npm run start
```

This will start the bot.

---

## Syntax ##

The bot can be referenced by the prefix token.
By default it is `!`, or the bot's name @botname

The name of the command is then typed after that, as well as any parameters
(The command is not case sensitive)

#### For example ####


```
!           Add         Hello world
^           ^^^^        ^^^^^^^^^^^
prefix     command       arguments
```

This would make the command 

`! Add Hello world`

---

## Documentation ##

For the full documentation see [Wiki](https://github.com/JosephCodemard/Discord-Bot/wiki)

---

## Contributing ##

If you wish to contribute feel free to do so!
Just fork the repo and create a pull request

---

## Support ##

If there are any problems or questions feel free to raise a github issue

---

## License ##

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <b>JosephCodemard</b>
