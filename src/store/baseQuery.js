import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { hideLoader, showLoader } from './slices/loaderSlice';

export const customFetchBaseQuery = () => {
    const baseQuery = fetchBaseQuery({
        baseUrl: process.env.REACT_APP_HOST_API,
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.user?.token || '';
            console.log('base========', token);

            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    });
    return async (args, api, extraOptions) => {
        const { dispatch } = api;
        dispatch(showLoader());
        let result = await baseQuery(args, api, extraOptions);
        dispatch(hideLoader());

        if (result?.error) {
            toast.error(result?.error?.data?.message || 'Something went wrong');
        }
        if (result.error && result.error.status === 403) {
            localStorage.clear();
            window.location.replace('/login');
        }
        return result;
    };
};
export const buildQueryString = (base, params) => {
    const query = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
    return query ? `${base}?${query}` : base;
};