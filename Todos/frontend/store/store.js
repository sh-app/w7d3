import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleWare from '../middleware/master_middleware';

const configureStore = () => (createStore(RootReducer, MasterMiddleWare));

export default configureStore;
