export const supportAPIUrl = "http://localhost:8080"

export const postHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

const genericFetcher = (
baseUrl: string,
resource: string,
options?: RequestInit
) =>
fetch(baseUrl + resource, options)
    .then((res) => {
    if (res.status >= 400) throw new Error(`Error code: ${res.status}`);
    return res;
    })
    .then((res) => res?.json());

export const supportFetcher = (resource: string, options?: RequestInit) =>
genericFetcher(supportAPIUrl, resource, options);