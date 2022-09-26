import { loginReducer } from './Reducer/user';
import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './Reducer/user';
import { updateReducer } from './Reducer/user';
const store = configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
        update:updateReducer,
    }
});

export default store;