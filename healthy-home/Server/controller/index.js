const user = require('./user');
const tips = require('./tips');
const questions = require('./questions');
const barometer = require('./barometer')
const emails = require('./emails')


module.exports = (app) => {
    app.use('/auth', user);
    app.use('/tips', tips);
    app.use('/emails', emails); 
    app.use('/barometer', barometer); 
    app.use('/questions', questions);
}