import { Router } from 'express';

import hospital from '../../api/routes/route.hospitals';
import customer from '../../api/routes/route.customer';
import claims from '../../api/routes/route.claim';
import message from '../../api/routes/route.message';

const api = Router();

api.get('/', (req, res) => {
  res.send({ message: 'Welcome' });
});

api.use('/hospitals', hospital);
api.use('/customers', customer);
api.use('/claims', claims);
api.use('/message', message);

export default api;
