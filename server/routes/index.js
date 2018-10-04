import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';
import auth from './authRoutes';


const routes = (app) => {

  userRoutes(app);
  adminRoutes(app);
  auth(app);

  app.get('/', (request, response) => response.status(200).json({
    message: 'My Fast-Food-Fast App',
  }));

  app.get('/api/v1', (request, response) => response.status(200).json({
    message: 'Welcome to My Fast-Food-Fast App Api, Version 1',
  }));

 app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });  
};

export default routes;
