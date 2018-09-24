import { fetchProducts } from '../../src/actions/fetchProductsActions';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('actions/fetchProductsActions', () => {
  describe('fetchProducts', () => {
    it('calls request and success actions if the fetch response was successful', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));

      return store.dispatch(fetchProducts(id))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toContainEqual({type: types.FETCH_DATA_REQUEST});
          expect(expectedActions).toContainEqual({type: types.FETCH_DATA_SUCCESS, data });
        })
    });
  });
});