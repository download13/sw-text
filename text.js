function text(body, opts) {
	var code, charset;
	var type = 'text/plain';

	switch(typeof opts) {
	case 'number':
		code = opts;
		break;

	case 'object':
		code = opts.code;
		charset = opts.charset;
	}

	code = code || 200;

	if(charset !== false) {
		if(typeof charset !== 'string') {
			charset = 'utf-8';
		}
	}

	if(charset) {
		type += '; charset=' + charset;
	}

	var length = (body instanceof Buffer) ? body.length : Buffer.byteLength(body);

	this.writeHead(code, {'Content-Type': type, 'Content-Length': length});
	this.end(body);
}

module.exports = function(req, res, next) {
	res.text = text;
	next();
}
