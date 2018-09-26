import userRoutes from './userRoutes';
import adminRoutes from './adminRoutes';


const routes = (app) => {
  app.get('/', (request, response) => response.status(200).json({
    message: 'My Fast-Food-Fast App',
  }));

  app.get('/api/v1', (request, response) => response.status(200).json({
    message: 'Welcome to My Fast-Food-Fast App Api, Version 1',
  }));

  userRoutes(app);
  adminRoutes(app);
};

export default routes;
