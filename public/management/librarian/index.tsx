import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import dashboard_routes from './routes/index.js';
import axios from 'axios';
import { anyObject } from './common_types/object.js';

function Component() {
    const router = createHashRouter(dashboard_routes);
    return <RouterProvider router={router}></RouterProvider>;
}

const container: HTMLElement | null = document.getElementById('app2');
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

        // eslint-disable-next-line no-undef
        (window as any).$('.loader-wrapper').fadeIn('slow', function () {});
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    function (response) {
        (window as any).$('.loader-wrapper').fadeOut('slow', function () {});
        return response;
    },
    function (error) {
        (window as any).$('.loader-wrapper').fadeOut('slow', function () {});
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

            let error_el = document.querySelector('.has_error');
            if (error_el) {
                setTimeout(() => {
                    error_el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }, 300);
            }
            console.log(error.response);
        }
        return Promise.reject(error);
    },
);
