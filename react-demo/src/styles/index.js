const files = require.context("./", false, /\.\/\w+\.(less|css)/);

files.keys().forEach(mod => files(mod));
