import { Router } from 'express';
import multer from 'multer';

import HousesControllers from './controllers/HousesControllers';
import uploadConfig from './config/upload';
const routes = Router();

const upload = multer(uploadConfig);

routes.get('/houses', HousesControllers.index);
routes.get('/houses/:id', HousesControllers.show);

routes.post('/houses', upload.array('images'), HousesControllers.create);

export default routes;
