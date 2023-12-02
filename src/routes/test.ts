import express from 'express';
import testfunction from '../controllers/test'
const testRouter =  express.Router();
testRouter.post('/test', testfunction.testfunction )
export default testRouter;