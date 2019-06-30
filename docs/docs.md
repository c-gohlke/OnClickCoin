# OnClickCoin documentation
  
## Overall work flow of the app:

As specified in ~/package.json, the application launches by running "npm start" in the terminal, which will call server/server.js
The entry point to the app is ~/app/app.jsx, as specified in webpack.config.js

### File structure:

>**app**:  
>_front-end of the application_
>>**components**:
>
>>**containers**:  
>>_Containers are very similar to components, the only difference is that containers are aware of application state. If part of your webpage is only used for displaying data (dumb) then make it a component._
> 
>>**images**:  
>>_where we put the front-end-related images_
>
>>**views**:  
>>_this folder contains the pages that will be served from the server. They are all very similar, specifically because of the line_ 
>>```
>><script  src="bundle.js"></script>
>>```
>>_webpack bundles all of our app into a same folder for better performance. After running the "npm run build" or "npm start" commands, you will find a dist folder in the root directory. The dist/bundle.js file holds most of the app information and is the one being referred to by the above line_
>
>>**app.jsx**:  
>>_the entry point to the front-end part of the app_

>**contracts**:  
>_where most of the code related to smart contracts is located_


>**dist**  
>_built by webpack, check out webpack documentation for more info_

>**node_modules**  
_where all the packages are located, use Node Packet Manager to add/remove/upgrade packages_

>**server**
>>**api**
>>>**deployContract**  
>>>**getPermission**  
>>>**transferToken**
>
>>**routes**
>
>>**server.js**

>**.env**  
>_holds the Environment variables (private key, address and infura api token to be used to deploy contracts in case the client does not have a web3 provider installed (e.g. metamask)). To stay safe of potential accidents, do not hold any mainnet tokens on this account. While this folder is in .gitignore and changes made to it will not be uploaded, we advise you to use the already compromised account, or for you to create a new account specifically for the development of this app to prevent potential losses_

>**.eslintrc.js**  
>_holds the configurations with which eslint should be run with. Use "npm run lint" to call eslint_

>**nodemon.json**  
>_nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when files change. nodemon.json holds the (non-default) configurations for nodemon. We specify to ignore the app folder, as changes made to the app folder will cause the server to restart, however changes in the app folder are not reflected on the webpage directly. Instead, webpack watches for changes in the app folder and, when some occur, will automatically rebuild/rebundle the app. Those changes will be incorporated in the /dist folder. Once the build is completed, nodemon will capture the changes in the dist folder and restart the server_

>**package.json**  
>_package.json is a central repository of configuration for all tools used within the project_
>>**dependencies:**  
>>_specifies the packages, and versions of, the app is using. Calling "npm install" will install all dependencies specified in package.json_
>
>>**scripts:**  
>>_defines how to interact with the project via the terminal_
>>```
>>npm run something
>>```
>>_will executed the script "something" specified in the scripts part_

 >**webpack.config.json**  
>_configuration file for webpack, which bundles (most) of the app into the single ~/dist/bundle.js file._

# API of our app

## GET/POST Requests

* get(/)
* get(/receipt')
* get(/receipt*)
* get(/send')
* get(/send*)
* get(/info')
* get(/info*)
* get(/ico)
* get(/ico*)

* post(/transfer-token)  
_request body with netname, receiveAmount, sendAddr, contractAddr_  
_responds with res.end("transaction confirmed")_

* post(/deploy-contract)  
_request body with netname, name, symbols, decimals, supply_  
_responds with netname, contractAddress, and account's address_

# Frequently used functions Cheat Sheet

## Markdown

to skip to the next line, add 2 spaces at the end of the previous line
