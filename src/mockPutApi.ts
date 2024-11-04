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

  if (urlString.match(/\/recommendations\/.+\/accept/) && options?.method === "PUT") {
    return Promise.resolve(createMockResponse(200));
  }

  if (urlString.match(/\/recommendations\/.+\/reject/) && options?.method === "PUT") {
    return Promise.resolve(createMockResponse(200));
  }

  if (urlString.match(/movies\.json/) && (!options || options?.method === "GET")) {
    return Promise.resolve({
      ...createMockResponse(200),
      json: async () => (
        [
          {
            "id": "1and3011",
            "imageURL": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
            "title": "Inferno",
            "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "rating": 5.3
          },
          {
            "id": "2301abc",
            "imageURL": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
            "title": "Star Wars: Episode VII - The Force Awakens",
            "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "rating": 8.2
          },
          {
            "id": "5345ahg",
            "imageURL": "https://m.media-amazon.com/images/M/MV5BZGIxMTU1MjItM2FmMi00YmFiLTgwNDMtMTczYmVjYTBhNGZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "title": "Venom",
            "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "rating": 6.8
          },
          {
            "id": "876zgj",
            "imageURL": "https://m.media-amazon.com/images/M/MV5BNTRlNmU1NzEtODNkNC00ZGM3LWFmNzQtMjBlMWRiYTcyMGRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "title": "Joker: Folie à Deux",
            "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "rating": 5.7
          },
          {
            "id": "045lgh",
            "imageURL": "https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "title": "Bad Boys: Ride or Die",
            "summary": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            "rating": 7.5
          }
        ]
      )
    } as Response);
  }

  return Promise.reject(new Error("Not implemented in mock"));
};

export default global.fetch;

