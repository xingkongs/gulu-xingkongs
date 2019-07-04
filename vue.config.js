const path = require("path");
module.exports = {
    publicPath: "./",
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.join(__dirname, "src")]
            }
        }
    }
};
