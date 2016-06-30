# Framework

For more info on test framework, visit official site : http://codecept.io/
 
# Prerequisites

`npm install -g codeceptjs`  
`npm install -g protractor@^3.3.0`  
`npm install -g selenium-webdriver`


# Usage

Run server : `webdriver-manager start`
By default, server will run on http://127.0.0.1:4444/wd/hub

You must have in root folder : 

  - codecept.json (tests configuration)
  - tests files

Then, run tests : `codeceptjs run --steps` 
