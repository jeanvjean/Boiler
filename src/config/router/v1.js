import { Router } from 'express';

import hospital from '../../api/routes/route.hospitals';
import customer from '../../api/routes/route.customer';
import claims from '../../api/routes/route.claim';

const api = Router();

api.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

api.use('/hospitals', hospital);
api.use('/customers', customer);
api.use('/claims', claims);

export default api;
