import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import siteRoutes from './site.route';
import messageRoutes from './message.route';
import billingRoutes from './billing.route';

const router = express.Router();

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/users', userRoutes);

// mount site routes at /sites
router.use('/sites', siteRoutes);

// mount message routes at /messages
router.use('/messages', messageRoutes);

// mount billing routes at /stripe
router.use('/stripe', billingRoutes);

export default router;