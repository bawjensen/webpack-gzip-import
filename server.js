const express = require('express');

const app = express();

const port = 8080;

app.use(express.static('.', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js.gz')) {
            res.set({
                'Content-Type': 'application/javascript',
                'Content-Encoding': 'gzip',
            });
        }
    },
}));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
