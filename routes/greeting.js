
const LANGUAGES = { en: 'en', es: 'es', de: 'de' };

module.exports = {
    hello: function (req, res) {
        if (!req.body.name) {
            res.send('An error occurred: Name is a required paramter');
        } else {
            const language = req.body.language;
            if (!LANGUAGES[language] && language !== undefined) {
                res.send('Error: Invalid Language');
            } else {
                switch (language) {
                    case LANGUAGES.es:
                        res.send(`Hola, ${req.body.name}`);
                        break;
                    case LANGUAGES.de:
                        res.send(`Hallo, ${req.body.name}`);
                        break;
                    default:
                        res.send(`Hello, ${req.body.name}`);
                        break;
                }
            }
        }
    }
};