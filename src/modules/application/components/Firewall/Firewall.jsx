import firewall from 'modules/auth/HOC/firewall';

import AuthRoutes from '../AuthRoutes';
import PublicRoutes from '../PublicRoutes';

export default firewall(AuthRoutes, PublicRoutes);
