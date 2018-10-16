import {fetchProducts} from './fetchProductsActions'
import configureMockStore from 'redux-mock-store'
import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS } from '../constants/ActionTypes'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// import thunk from 'redux-thunk'
//
// const middlewares = [ thunk ];
// const mockStore = configureMockStore(middlewares);
//
// const mockResponse = (status, statusText, response) => {
//   return new window.Response(response, {
//     status: status,
//     statusText: statusText,
//     headers: {
//       'Content-type': 'application/json'
//     }
//   });
// };
// describe('actions/fetchProductsActions', () => {
// //   describe('fetchProducts', () => {
// //     it('calls request and success actions if the fetch response was successful', () => {
// //       window.fetch = jest.fn().mockImplementation(() =>
// //         Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));
// //
// //       return store.dispatch(fetchProducts(id))
// //         .then(() => {
// //           const expectedActions = store.getActions();
// //           expect(expectedActions.length).toBe(2);
// //           expect(expectedActions).toContainEqual({type: types.FETCH_DATA_REQUEST});
// //           expect(expectedActions).toContainEqual({type: types.FETCH_DATA_SUCCESS, data });
// //         })
// //     });
// //   });
// // });
describe('fetchProducts action', () => {
  let store
  let httpMock

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve))

  beforeEach(() => {
    httpMock = new MockAdapter(axios)
    const mockStore = configureMockStore();
    store = mockStore({})
  })

  it('fetch products', async () =>{
    // given
    httpMock.onGet('https://api.myjson.com/bins/10ywg4').reply(200, {
      status: 'success',
      message: 'https://dog.ceo/api/img/someDog.jpg',
    });
    // when
    fetchProducts()(store.dispatch);
    await flushAllPromises();
    // then
    expect(store.getActions()).toEqual(
      [
        { type: FETCH_PRODUCTS_BEGIN },
        { payload: { url: 'https://dog.ceo/api/img/someDog.jpg' }, type: FETCH_PRODUCTS_SUCCESS }
      ])
  })
})

