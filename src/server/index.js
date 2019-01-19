import path from 'path';
import app from './config/express';
import routes from './routes/index.route';
import swagger from './config/swagger';
import * as errorHandler from './middlewares/errorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack/webpack.config.dev';

// if (process.env.NODE_ENV === 'development') {

//     const compiler = webpack(webpackConfig);
//     app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
//     app.use(webpackHotMiddleware(compiler));
// }

// Swagger API documentation
app.get('/swagger.json', (req, res) => {
   res.json(swagger);
});

// Add headers
app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Router
app.use('/api', routes);



app.get('/api', (req, res) => {
  res.json({ message: 'Hello! welcome to our api!' });
});

// // Landing page
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// Joi Error Handler
app.use(joiErrorHandler);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

const PORT = process.env.PORT || 8080;

console.log('ProcessENVPORT' + process.env.PORT);

console.log('AppgetPORT' + app.get('port'));

app.listen(process.env.PORT || PORT, app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});




// const port = process.env.PORT || 3000;

// app.listen(process.env.PORT, () => {
//     // console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
// });

export default app;
