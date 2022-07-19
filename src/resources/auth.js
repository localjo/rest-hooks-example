import { Resource } from '@rest-hooks/rest';
const apiKey = process.env.REACT_APP_API_KEY;

export default class AuthdResource extends Resource {
  static getFetchInit = init => ({
    ...init,
    headers: {
      ...init.headers,
      // Not needed for this example, but most APIs require some sort of
      // authentication, so this is an example of typical usage.
      Authorization: `Basic ${apiKey}`,
    },
  });
}
