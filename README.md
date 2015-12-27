# A basic AngularJS boilerplate  [![Build Status](https://travis-ci.org/gruberb/angular-boilerplate.svg?branch=master)](https://travis-ci.org/gruberb/angular-boilerplate)

A basic template with
- Different folders for staging and production
- Minify build files
- Headless browser testing with PhantomJS
- Jasmine testing framework
- ["Official" AngularJS style guide and patterns](https://github.com/johnpapa/angular-styleguide) implemented

I used this [almost perfect boilerplate](https://github.com/ngbp/ngbp), and adjusted it to my needs:
- Removed .coffee script helpers and compilers
- Switched from LESS to SASS
- Using ControllerAs syntax
- Removed bower and just using npm for package managing
- Deleted README files and other fancy things :)

The principles are still the same, so have a look at their documentation.

# Installation

1. `git clone git@github.com:gruberb/angular-boilerplate.git`
2. `cd angular-boilerplate`
3. `sudo npm -g install grunt-cli karma`
4. `npm install`

# Run

`grunt serve`

Open a browser and navigate to `localhost:9001`
