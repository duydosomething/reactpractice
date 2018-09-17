import axios from "axios";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => async dispatch => {
    const res = await axios.get("/api/customers");
    dispatch({ type: FETCH_USERS, payload: res.data});
};

export const postUsers = () => async dispatch => {
    const res = await axios.post("/api/customers");
    dispatch ({ type: FETCH_USERS, payload: res.data});
}
