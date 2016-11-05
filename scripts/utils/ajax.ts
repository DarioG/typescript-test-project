import { Promise } from 'es6-promise';

let ajax = {
    getJson: function (): Promise<any> {
        return new Promise((resolve) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', '../../JSON/famousPainters.json');
            xhr.onload = () => {
                resolve(JSON.parse(xhr.responseText));
            };
            xhr.send();
        });
    }
};

export { ajax };