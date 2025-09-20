import { Router } from 'express';
import patientRoutes from './patientRoutes.js';

const router = Router();

router.use('/patients', patientRoutes);

export default router;

