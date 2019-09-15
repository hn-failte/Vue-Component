const path = require('path')

module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                "@src": path.resolve(__dirname,"./src"),
                "@assets" : path.resolve(__dirname,"./src/common"),
                "@api" : path.resolve(__dirname,"./src/api"),
                "@components" : path.resolve(__dirname,"./src/components"),
                "@utils" : path.resolve(__dirname,"./src/utils"),
                "@views":path.resolve(__dirname,"./src/views")
            }
        }
    }
}