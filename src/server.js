import app from './app.js';
import './database/index.js';

app.listen(process.env.PORT || 3001, () => console.log('Application is runnig at port 3001'));

