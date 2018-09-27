import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import winston from 'winston';

import router from './server/routes';

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);
app.listen(port);

winston.log('info', `App is listening on port ${port}`);

// app.use((req ,res ,next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Header", "*");

// if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'PUT ,POST ,PATCH ,DELETE ,GET');
//     return res.status(200).json({});
// }
// next();
// });

// app.use('/userRoutes', userRoutes);
// app.use('/adminRoutes', adminRoutes)

// app.use((req,res,next) =>{
//     const error = new Error('not found');
//     error.status = 404;
//     next(error);
// });

// app.use((error,req,res, next) =>{
// res.status(error.status || 500);
// res.json({
//     error: {
//         message: error.message
//     }
// });
// });

export default app;
