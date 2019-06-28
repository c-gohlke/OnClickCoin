//TODO: nicer formatting

Overall work flow of the app:

As specified in ~/package.json, the application launches by running "npm start" in the terminal, which will call server/server.js
The entry point to the app is ~/app/app.jsx, as specified in webpack.config.js


File structure:
/app: front-end of the application
    /components:
    /containers: 
        Containers are very similar to components, the only difference is that containers are aware of application state. If part of your webpage is only used for displaying data (dumb) then make it a component.
    /images: 
        where we put the front-end-related images
    /views: 
        this folder contains the pages that will be served from the server. They are all very similar, specifically because of the line 
        ```
        <script src="bundle.js"></script>
        ```
        webpack bundles all of our app into a same folder for better performance. After running the "npm run build" or "npm start" commands, you will find a dist folder in the root directory. The bundle.js file holds most of the app information and is the one being referred to by the above line
    app.jsx:
        the entry point of the front-end part of the app

/contracts:
    where most of the code related to smart contracts is located

/dist
    built by webpack, check out webpack doc for more info

/node_modules
    where all the packages are located, use Node Packet Manager to add/remove/upgrade packages

/server
    /api
        deployContract
        getPermission
        transferToken
    /routes
    server.js

.env
    holds the Environment variables (private key, address and infura api token to be used to deply contracts in case the client does not have a web3 provider installed (e.g. metamask)). To stay safe of potential accidents, do not hold any mainnet tokens on this account. While this folder is in .gitignore and changes made to it will not be uploaded, we advise you to use the already compromised account, or for you to create a new account specifically for the development of this app to prevent potential losses

.eslintrc.js
    holds the configurations with which eslint should be run with. Use "npm run lint" to call eslint

nodemon.json
     nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when files change. nodemon.json holds the (non-default) configurations for nodemon. We specify to ignore the app folder, as changes made to the app folder will cause the server to restart, however changes in the app folder are not reflected on the webpage directly. Instead, webpack watches for changes in the app folder and, when some occur, will automatically rebuild/rebundle the app. Those changes will be incorporated in the /dist folder. Once the build is completed, nodemon will capture the changes in the dist folder and restart the server

package.json
    package.json is a central repository of configuration for all tools used within the project
    dependencies:
        specifies the packages, and versions of, the app is using. Calling "npm install" will install all dependencies specified in package.json
    scripts:
        defines how to interact with the project via the terminal
        "npm run something" will executed the script "something" specified in the scripts part

webpack.config.json
    configuration file for webpack, which bundles (most) of the app into the single ~/dist/bundle.js file.

    This file is the source of most problems :)