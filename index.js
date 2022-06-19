const { quotes } = require('./api/quotes');
const { jokes } = require('./api/jokes');

const interval = 60 * 60 * 1000;//1 hour

setInterval(() => {
     quotes();
     jokes();
}, interval);

