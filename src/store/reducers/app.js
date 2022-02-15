import { APP_ACTION_1, APP_ACTION_2 } from '../actions/app';

const initState = {
  data1: false,
  data2: false,
};
export default function app(state = initState, action) {
  switch (action.type) {
    case APP_ACTION_1:
      return {
        ...state,
        data1: !state.data1,
      };
    case APP_ACTION_2:
      return {
        ...state,
        data2: !state.data2,
      };
    default:
      return state;
  }
}
