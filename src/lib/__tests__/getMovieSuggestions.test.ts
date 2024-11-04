import fetchMock from "jest-fetch-mock";
import { getMovieSuggestion } from "../getMovieSuggestions";

fetchMock.enableMocks();

describe("getMoviesSugestion", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("fetches movie suggestions successfully", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          id: "1and3011",
          imageURL: "https://example.com/image.jpg",
          title: "Inferno",
          summary: "Sample summary",
          rating: 5.3,
        },
      ])
    );

    const data = await getMovieSuggestion();

    expect(data).toHaveLength(1);
    expect(data[0].title).toBe("Inferno");
  });

  it("throws an error if fetch fails", async () => {
    fetchMock.mockRejectOnce(new Error("Fetch failed"));

    await expect(getMovieSuggestion()).rejects.toThrow("Fetch failed");
  });
});
