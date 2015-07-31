# Hot Loading & BrowserSync

Yes, another demo repo for [React](http://facebook.github.io/react/), [Hot Loading](http://gaearon.github.io/react-hot-loader) and ES2015 with [Babel](https://babeljs.io/)... with a few important differences. Most of the starter repos are pretty trivial and don't do much other than what you can find in the docs. When you want to do a little more it's frustrating how these implementations clash with one another.

This little repo allows you not only to make use of [hot loading](http://gaearon.github.io/react-hot-loader/) but also [browser-sync](http://www.browsersync.io/) which is a tool I'm not ready to do without. Yes, you can get hot loading and browser-sync playing nicely. Browser-sync has a great [feature](http://www.browsersync.io/docs/options/#option-proxy) allowing you to proxy another host. Thank you browser-sync.

You can also split your `js` concerns while using the [webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html) which is something that's not immediately apparent on how to achieve. [Webpacks](http://webpack.github.io/) messy config system doesn't make much clear so it wasn't until finding a nice [split plugin](https://www.npmjs.com/package/webpack-split-by-path) that it worked as I required.

[Webpack](http://webpack.github.io/)... I wish I didn't have to use this but it is faster than using [browserify](http://browserify.org/) to achieve the result I was after with this particular setup. I've wrapped it up in [Gulp](http://gulpjs.com/) and used it as minimally as possible.

For testing I started using [Mocha](http://mochajs.org/) and [Istanbul](https://gotwarlost.github.io/istanbul/) for test coverage but found that Istanbul just wasn't working out. After half an hour I got frustrated and dropped it. Five minutes later (mostly waiting for npm install) I had [Lab](https://www.npmjs.com/package/lab) up and running for tests and coverage.

Overall this is a pretty simple albeit more than trivial setup that demonstrates a really fast workflow. Changes to `js`, `jsx` and `styl` files swap out blazingly fast with no page refresh/reload required which is a pretty killer feature while developing.

Oh I forgot to mention it's all done with ES2015 (ES6 whatever) which is quite nice to look at.

## Installation

	$ git clone git@github.com:chasevida/babel-react-hot-loading.git
	$ cd babel-react-hot-loading
	$ npm install
	$ npm start


## Testing

Testing is pretty straight forward and makes use of [Lab](https://www.npmjs.com/package/lab)... pretty similar to [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/) for obvious reasons. A few additions to the setup have been made to allow for testing React components.

	$ npm test

## Things

Yes, I know you can lint using [Lab](https://www.npmjs.com/package/lab) but in the time I had available it was quicker to implement an old setup for linting than resolve a few issues with linting, ES6 and folder structures.

Yes, the code coverage html report is all sorts of funky but I'm pretty sure the good people working on Lab will resolve that someday.

Thanks to all the good people behind these open source projects, you are awesome.