// Dependencies
import { createStore, AnyAction } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';

export interface APP {
  theme: string;
}

const INITIAL: APP = {
  theme: 'tau-light',
};

const reducer = (state: APP, action: AnyAction) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
const makeStore: MakeStore<any> = () => createStore(reducer, INITIAL);

export default createWrapper<any>(makeStore, {
  debug: !!process.env.DEVELOPMENT,
});
