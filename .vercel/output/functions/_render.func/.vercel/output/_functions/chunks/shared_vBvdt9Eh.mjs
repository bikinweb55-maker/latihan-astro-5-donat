import { createClient } from '@crystallize/js-api-client';

const apiClient = createClient({
  tenantIdentifier: "dounot",
  accessTokenId: undefined                                           ,
  accessTokenSecret: undefined                                               ,
  tenantId: undefined                                     
});

export { apiClient as a };
