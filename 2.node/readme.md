- import & export in js
```js
module.exports = 'file name';

require('./')
```

// express js
// install
> npm i express

// express js boilerplate code
```js
import express from 'express';

const app = express();

app.set('view engine', 'ejs'); //set view engine
app.use(express.static('./public')); // static files setup

app.get('/', (req, res) => {
	res.send('Server is ready')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server at http://localhost:${port}`)
});
```

// express js ejs setup
	// install ejs
	> npm i ejs
	// set view engine
	app.set('view engine', 'ejs');
	// create views folder
	// create ejs files
	// render ejs files inside route
	
// express static files setup
app.use(express.static('./public'));

// architecture of public folder
	>>images, javascripts, stylesheets