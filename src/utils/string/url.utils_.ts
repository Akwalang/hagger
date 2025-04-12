type Anatomy = {
  protocol: string | null; // http, https, ftp, etc.
  auth: string | null; // user:password
  host: string | null; // domain name or IP address
  port: string | null; // port number
  path: string | null; // path to the resource
  search: string | null; // query parameters
  hash: string | null; // fragment identifier
};

const extract = (url: string, delimiter: string, saveDelimiter = false): [string | null, string] => {
  const idx = url.indexOf(delimiter);

  return idx !== -1
    ? [url.slice(0, idx), url.slice(idx + (saveDelimiter ? 0 : delimiter.length))]
    : [null, url];
};

const extractProtocol = (url: string): [string | null, string] => {
  return extract(url, '://');
};

const extractAuth = (url: string): [string | null, string] => {
  const parts = extract(url, '@');

  return parts[0]?.includes('/')
    ? [null, url]
    : parts;
};

const extractHost = (url: string): [string | null, string] => {
  let parts = extract(url, '/');

  return parts[0]?.includes(':')
    ? extract(url, ':')
    : parts;
}

const extractPort = (url: string): [string | null, string] => {
  const parts = extract(url, ':');

  return parts[0]?.includes('/')
    ? [null, url]
    : parts;
};

const extractPath = (url: string): [string | null, string] => {
  const parts = extract(url, '?');

  return parts[0]?.includes('#')
    ? extract(url, '#')
    : parts;
};

export const parse = (url: string): Anatomy => {
  const urlPattern = /^(https?:\/\/)?(([^:/?#]+)(:[0-9]+)?)(\/[^?#]*)?(\?[^#]*)?(#.*)?/i;
  const matches = url.match(urlPattern);

  if (!matches) {
    throw new Error('Invalid URL format');
  }

  return {
    protocol: matches[1] || undefined,
    hostname: matches[3] || undefined,
    port: matches[4] || undefined,
    pathname: matches[5] || undefined,
    search: matches[6] || undefined,
    hash: matches[7] || undefined,
  };
}
