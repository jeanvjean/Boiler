import DB from '../../services/service.db';
import * as ClaimsQuery from '../../lib/queries/lib.query.claim';

export const getClaims = payload => DB.transact(ClaimsQuery.getClaims, [ payload ]);
