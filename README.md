# A basic AngularJS boilerplate [![Build Status](https://travis-ci.org/gruberb/angular-boilerplate.svg?branch=master)](https://travis-ci.org/gruberb/angular-boilerplate) [![npm installs](https://img.shields.io/npm/dm/angular-karma-boilerplate.svg?style=flat)](https://github.com/gruberb/angular-boilerplate) [![Code Climate](https://codeclimate.com/github/gruberb/angular-boilerplate/badges/gpa.svg)](https://codeclimate.com/github/gruberb/angular-boilerplate)

A basic template with (now updated to Angular 1.5.0)
- Different folders for staging and production
- `grunt compile` for one minified JavaScript file for production
- ImmutableJS library for immutable data
- Headless browser testing with PhantomJS
- Jasmine testing framework
- [AngularJS inoffical style guide and patterns](https://github.com/johnpapa/angular-styleguide) implemented
- Multiple language support


# Install either via

1. `git clone git@github.com:gruberb/angular-boilerplate.git`
2. `cd angular-boilerplate`
3. `sudo npm -g install grunt-cli karma`
4. `npm install`

# or via
1. `npm install angular-karma-boilerplate`

# Run

`grunt serve`

Open a browser and navigate to `localhost:9001`

# Coverage

To see the coverage report navigate to `coverage` folder created by grunt serve, build or compile, and locate index.html file.

# Build process

### Staging

`grunt build` for not minified version to debug in the browser

### Production

`grunt compile` for creating a `bin` folder with one minified JavaScript file for production

For compiling the langauge files you need to add them to list in Gruntfile config under jsonmin->locale->files
