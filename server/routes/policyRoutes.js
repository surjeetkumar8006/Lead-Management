import { Router } from 'express';
import Policy from '../controllers/policy.js';
import auth from '../middlewares/auth.js';
import { uploadPolicy } from '../utils/upload.js';
const router = Router();

router.get('/list', auth,Policy.index)
router.post('/add', auth,uploadPolicy.single('fileName'),Policy.add)
router.get('/view/:id', auth,Policy.view)
router.put('/edit/:id', auth,Policy.edit)
router.delete('/delete/:id', auth,Policy.deleteData)
router.post('/deletemany', auth, Policy.deleteMany)


export default router