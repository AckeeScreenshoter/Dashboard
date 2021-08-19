import { firewall } from 'modules/auth';

import AuthRoutes from '../AuthRoutes';
import PublicRoutes from '../PublicRoutes';

export default firewall(AuthRoutes, PublicRoutes);
