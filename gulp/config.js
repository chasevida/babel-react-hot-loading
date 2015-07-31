// gulp/config.js

module.exports = {
    paths: {
        build: './public/',
        dist:  './dist/',
        src:   './src/'
    },
    globs: {
        scripts: './src/scripts/main.js',
        styles:  './src/styles/**/*.styl',
    },
    url: {
        protocol: 'http',
        domain:   'localhost',
        port:     '8080',
    },
    env: {
        development: false
    }
};
