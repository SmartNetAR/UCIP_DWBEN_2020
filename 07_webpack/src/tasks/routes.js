import { Router } from 'express';
import {getAll,getByID,createNewTask} from './controler';
const router = Router();


router.get ('/', getAll);
router.get ('/:id', getByID);
router.post ('/', createNewTask);

export default router;