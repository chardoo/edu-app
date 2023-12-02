import { Application } from 'express';

import clientRouter from './student';
import testRouter from './test';
import courseRouter from './course';
import schoolRouter from './school';

const initAppRoutes = (app:Application) =>{
    app.use('/student', clientRouter)
    app.use('/course', courseRouter)
    app.use('/school', schoolRouter)
    
    
    app.use('/', testRouter)
    return app;
}

export default initAppRoutes;