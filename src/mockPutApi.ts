import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

// Mock the PUT requests for accept/reject
mock.onPut(/\/recommendations\/.+\/accept/).reply(200);
mock.onPut(/\/recommendations\/.+\/reject/).reply(200);

export default mock;
