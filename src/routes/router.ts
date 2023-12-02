import { Application } from 'express';

import clientRouter from './student';
import testRouter from './test';
import courseRouter from './course';

const initAppRoutes = (app:Application) =>{
    app.use('/student', clientRouter)
    app.use('/course', courseRouter)
    
    app.use('/', testRouter)
    return app;
}

export default initAppRoutes;