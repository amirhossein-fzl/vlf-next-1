const path = require('path');

module.exports = {
    outDir: 'dist',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    poweredByHeader: false,
    images: {
        loader: 'imgix',
        path: '/',
    },
    reactStrictMode: false,
};