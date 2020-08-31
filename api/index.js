export default function (req, res, next) {
  // req is the Node.js http request object
  if(req.url == '/date') {

    try {
      res.statusCode = 200;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify({date: new Date()}));
      return;
    } catch(error) {
      res.statusCode = 500;
      res.end(JSON.stringify({message: 'Problem retrieving date...'}));
      return;
    }
  }

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}