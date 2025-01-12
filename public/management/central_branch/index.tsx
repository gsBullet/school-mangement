import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import dashboard_routes from './routes';
import axios from 'axios';
import { anyObject } from '../../../src/modules/common_types/object';

function Component() {
    const router = createHashRouter(dashboard_routes);
    return <RouterProvider router={router}></RouterProvider>;
}

const container: HTMLElement | null = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <Component />
        </Provider>,
    );
}

axios.interceptors.request.use(
    function (config) {
        let form_errors = document.querySelectorAll('.form_error');
        [...form_errors].forEach((e) => e.remove());
        let has_errors = document.querySelectorAll('.has_error');
        [...has_errors].forEach((e) => e.classList.remove('has_error'));

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.data.status === 422) {
            let errors = error.response.data.data;
            errors.forEach((error) => {
                let el = document.querySelector(`[name="${error.path}"]`);
                if (el) {
                    (el.parentNode as HTMLElement).classList.add('has_error');
                    (el.parentNode as HTMLElement)?.insertAdjacentHTML(
                        'beforeend',
                        `
                        <div className="form_error">
                            ${error.msg}
                        </div>
                        `,
                    );
                }
            });

            (window as anyObject).toaster(
                `${error.response.status} - ${error.response.statusText}`,
            );

            console.log(error.response);
        }
        return Promise.reject(error);
    },
);
