import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { streetsReducer } from "./streets/reducer";
import { housesReducer } from "./houses/reducer";

const middlewares = [thunk];

//конфигурация persist
const persistConfig = {
    key: "Houses",
    storage,
    blacklist: [],
};

//объявление rootReducer
const rootReducer = combineReducers({
    streets: streetsReducer,
    houses: housesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//подключение Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//создание store
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);