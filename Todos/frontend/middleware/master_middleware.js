import { TodoMiddleWare } from './todo_middleware';
import { applyMiddleware } from 'redux';

const MasterMiddleWare = applyMiddleware(TodoMiddleWare);

export default MasterMiddleWare;
