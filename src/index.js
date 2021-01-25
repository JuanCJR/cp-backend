const app = require('./app');


function init(){

    app.listen(app.get('PORT'));
    console.log(`app on port ${app.get('PORT')}`);

}

init();