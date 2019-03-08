import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.js";
import { createStore, applyMiddleware, compose } from "redux";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["events"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	persistedReducer,
	composeEnhancer(applyMiddleware(thunk))
);
let persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
