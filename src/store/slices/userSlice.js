// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null, token: null },
    reducers: {

        setUser: (state, action) => {
            let user = { ...action.payload };
            state.user = { ...user, username: `${user?.firstName} ${user?.lastName}` };
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null
            state.token = null
        },
    },
});

// Exporting actions
export const { setUser, setToken, logout } = userSlice.actions;
export const selectUser = (state) => state.allData.user.user;
// Exporting the reducer
export default userSlice.reducer;
