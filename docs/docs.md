You can use publicPath to point to the location where you want webpack-dev-server to serve its "virtual" files. The publicPath option will be the same location of the content-build option for webpack-dev-server. webpack-dev-server creates virtual files that it will use when you start it. These virtual files resemble the actual bundled files webpack creates. Basically you will want the --content-base option to point to the directory your index.html is in. Here is an example setup:

//application directory structure
/app/
/build/
/build/index.html
/webpack.config.js

//webpack.config.js
var path = require("path");
module.exports = {
...
output: {
path: path.resolve(\_\_dirname, "build"),
publicPath: "/assets/",
filename: "bundle.js"
}
};

//index.html

<!DOCTYPE>
<html>
...
<script src="assets/bundle.js"></script>
</html>

//starting a webpack-dev-server from the command line
\$ webpack-dev-server --content-base build
webpack-dev-server has created a virtual assets folder along with a virtual bundle.js file that it refers to. You can test this by going to localhost:8080/assets/bundle.js then check in your application for these files. They are only generated when you run the webpack-dev-server.
