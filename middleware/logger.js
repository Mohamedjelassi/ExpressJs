function logger(req, res, next) {
    console.table({ method: req.method, path: req.url });
    let date = new Date().getDay();
    const hours = new Date().getHours();
    //const min= new Date().getMinutes()
    if (date > 0 && date < 6 ) {
      console.log("During Business Hours!");
  
      next();
    } else {
      console.log("out of office");
      res.send(`<h1>msakriin Sahby!!</h1>`);
    }
  }
  module.exports = logger;