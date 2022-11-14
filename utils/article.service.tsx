import { Roboto, Shalimar } from "@next/font/google";

export function extractDate(param: string) {
    const date = new Date(param)
    const month = date.toLocaleString('default', {month: 'short'});
    const year = date.toLocaleString('default', {year: '2-digit'});
    return month + ', ' + year;
}

export const paginationConfig = {
    pagination: { perPage: 10 },
};

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : '';

export const siteTitle = "Python Like I am 5";

export const slogan = "";

export const textHeader = siteTitle;

export const bodyText = Roboto({ 
    weight: '400', 
    subsets: ['latin'],
    style: 'normal',
    display: 'swap', 
});

export const logoText = Shalimar({
    weight: "400",
    style: 'normal',
    variable: "--logo-font",
    subsets: ['latin'],
    display: 'swap'
});

export function pageCount(num: number){
    return Math.ceil(num / paginationConfig.pagination.perPage);
};

