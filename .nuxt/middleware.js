const middleware = {}

middleware['guest'] = require('../middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['redirect'] = require('../middleware/redirect.js')
middleware['redirect'] = middleware['redirect'].default || middleware['redirect']

export default middleware
