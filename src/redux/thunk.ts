import axios from 'axios';
import { AJX_HELLO } from '~/redux/actionTypes';
import { Dispatch, Store } from 'redux';

export function axHello(firstName: string) {
  return async function (dispatch: Dispatch, getState: () => Store) {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3003/api/v1/hello',
      data: {
        firstName,
        lastName: 'Flintstone',
      },
    }).then((res) => {
      console.log(res.data);

      const {
        RSP_BODY: { msg },
      } = res.data;
      dispatch({
        type: AJX_HELLO,
        payload: {
          msg,
        },
      });
    });
  };
}
