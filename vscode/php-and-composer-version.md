# Problem:
PHP and Composer version from VSCode and Laragon are not the same. How to fix it?


# Solution:
## Configure VS Code to Use Laragon's PHP
There are some more solution for this. But If you don’t want to modify system variables, you can tell VS Code to use Laragon’s PHP explicitly.

1. Open VS Code settings.json (Ctrl + Shift + P → search Preferences: Open Settings (JSON)).

2. Add or update:
```
{
  "php.validate.executablePath": "C:/laragon/bin/php/php-8.2.0/php.exe"
}
```
The ```php.exe``` path can be coppied from the Laragon folder where it was installed.

3. Restart VS Code and check again.
