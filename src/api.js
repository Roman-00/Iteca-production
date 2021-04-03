import { API_URL, API_KEY } from './config';

const getInfoManager = async (manager) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            'apiKey': '0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=',
            'lang': '',
            'exhibkey': 'Kioge 2021',
            'companykey': 'MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==',
            'companyid': 'QUEwMDAwMDAyNzky'
        })
    });

    return manager = response.json();
}

const getInfoNomenklatura = async (list) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            'apiKey': '0KHQtdC60YDQtdGC0L3Ri9C50JrQu9GO0YfQlNC70Y/QotC10YXQl9Cw0LrQsNC30LA=',
            'lang': '',
            'exhibkey': 'Kioge 2021',
            'companykey': 'MHhhNzA5MDAxNzlhN2JjY2JmMTFkZDUzMjI5YTYzMzgyMw==',
            'companyid': 'QUEwMDAwMDAyNzky'
        })
    });

    return list = response.json();
}

export { getInfoManager, getInfoNomenklatura };