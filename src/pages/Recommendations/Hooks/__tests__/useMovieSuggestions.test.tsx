import { render, screen, waitFor, act } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";
import { useMovieSuggestions } from "../useMovieSuggestions";

const queryClient = new QueryClient();

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const TestComponent = ({ movieId }: { movieId: string }) => {
  const { approveMovie, rejectMovie } = useMovieSuggestions();

  return (
    <div>
      <button onClick={() => approveMovie(movieId)}>Approve</button>
      <button onClick={() => rejectMovie(movieId)}>Reject</button>
    </div>
  );
};

describe("useMovieSuggestions - PUT calls", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("approves a movie suggestion", async () => {
    fetchMock.mockResponseOnce("", { status: 200 });

    render(<TestComponent movieId="1and3011" />, { wrapper });

    await act(async () => {
      userEvent.click(screen.getByText("Approve"));
    });

    await waitFor(() =>
      expect(fetchMock).toHaveBeenLastCalledWith(
        "/recommendations/1and3011/accept",
        { method: "PUT" }
      )
    );
  });

  it("rejects a movie suggestion", async () => {
    fetchMock.mockResponseOnce("", { status: 200 });

    render(<TestComponent movieId="1and3011" />, { wrapper });

    await act(async () => {
      userEvent.click(screen.getByText("Reject"));
    });

    await waitFor(() =>
      expect(fetchMock).toHaveBeenLastCalledWith(
        "/recommendations/1and3011/reject",
        { method: "PUT" }
      )
    );
  });
});
