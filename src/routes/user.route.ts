import { Router } from 'express';
import { signupController, loginController } from '../controller/user.controller';
import * as controller from '../controller/init.controller';


const router = Router({ strict: true });



router.get('/', (req, res, next) => {
    res.send('user route');
});

import { getDbConnection } from '../database/mssql.database';
import { authMiddleware } from '../middleware/auth.middleware';

router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: (req as any).user });
});

// GET /login (debug db) ยังอยู่ด้านบน

// POST /login สำหรับ auth
router.post('/login', loginController);

router.post('/signup', signupController);

export default router;