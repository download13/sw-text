# sw-text

Convenience middleware for sending text. Adds a `.text()` method to the `res` object which sends back text with a Content-Type of `text/plain`.

## Install

`npm install sw-text`

## Example

```javascript
var text = require('sw-tex');

// With express
app.use(text);

// or use as inline middleware
app.get('/example/page', text, function(req, res) {
	if(req.query.n) {
		res.text('Nothing', 404); // The status code can be passed in place of options
	} else {
		res.text('Some text');
	}
});
```

## API

`res.text(body, [options])`

* body - String or buffer holding the response body
* options - Options object, optional
 * code - Status code, defaults to 200
 * charset - Character encoding, defaults to `utf-8`
