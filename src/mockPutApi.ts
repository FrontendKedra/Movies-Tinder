function createMockResponse(status: number): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? "OK" : "Error",
    url: "",
    redirected: false,
    type: "default",
    headers: new Headers(),
    clone: () => createMockResponse(status),
    body: null,
    bodyUsed: false,
    json: async () => ({}),
    text: async () => "",
    arrayBuffer: async () => new ArrayBuffer(0),
    blob: async () => new Blob(),
    formData: async () => new FormData(),
  } as Response;
}

global.fetch = (
  url: URL | RequestInfo,
  options?: RequestInit
): Promise<Response> => {
  const urlString = typeof url === "string" ? url : url.toString();

  if (
    urlString.match(/\/recommendations\/.+\/accept/) &&
    options?.method === "PUT"
  ) {
    return Promise.resolve(createMockResponse(200));
  }

  if (
    urlString.match(/\/recommendations\/.+\/reject/) &&
    options?.method === "PUT"
  ) {
    return Promise.resolve(createMockResponse(200));
  }

  return Promise.reject(new Error("Not implemented in mock"));
};

export default global.fetch;
