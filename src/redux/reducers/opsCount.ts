import { ADD_COUNT, MINUS_COUNT, AJX_HELLO } from '../actionTypes';

const initState = {
  count: 0,
  msg: 'Hello, Zacard Initial',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  state = initState,
  action: Action<ActionPayloadCount>,
) {
  switch (action.type) {
    case ADD_COUNT: {
      const { count } = action.payload;
      return {
        ...state,
        count: state.count + count,
      };
    }
    case MINUS_COUNT: {
      const { count } = action.payload;
      return {
        ...state,
        count: state.count - count,
      };
    }
    case AJX_HELLO: {
      const { msg } = action.payload;
      return {
        ...state,
        msg,
      };
    }
    default:
      return state;
  }
}
