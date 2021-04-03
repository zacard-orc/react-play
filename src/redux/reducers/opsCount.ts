import { ADD_COUNT, MINUS_COUNT } from '../actionTypes';

const initState = {
  count: 0,
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
        count: state.count + count,
      };
    }
    case MINUS_COUNT: {
      const { count } = action.payload;
      return {
        count: state.count - count,
      };
    }
    default:
      return state;
  }
}
