
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./style/main.css";
import {createStore} from "redux";
import {action} from "mobx";
import {Provider} from "react-redux";

function checkAuth(){
    let x = sessionStorage.getItem("auth")
    if(x === "true"){
        return true;
    } else {
        return false;
    }

}
const defaultState = {
    auth:checkAuth(),
    basket:[],
    isAdmin:false
}
const reducer = (state = defaultState, action) => {
    switch (action.type){
        case "set_auth":
            return {auth:true}
        case "del_auth":
            return {auth:false}
        case "add_basket":
            return {...state, basket: [...state.basket, action.id]}
        case "del_basket":
            return {...state, basket: state.basket.filter(f => f !== action.id)}
        default:
            return state
    }
}

const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

