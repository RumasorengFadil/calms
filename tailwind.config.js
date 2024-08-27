import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                'inter': ['Inter', 'sans-serif'],
            },
            colors :{
                'primary' : '#3CACAE',
                'secondary' : '#169DDC',
                'light-gray' : '#F2F2F2'
            } 
        },
    },

    plugins: [forms],
};
