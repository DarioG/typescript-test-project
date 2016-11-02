import { ajax } from './ajax';

describe('ajax', () => {

    beforeEach(() => {
        jasmine.Ajax.install();
    });

    afterEach(() => {
        jasmine.Ajax.uninstall();
    });

    describe('getJson', () => {
        it('should request the json', () => {
            let request = ajax.getJson();

            expect(jasmine.Ajax.requests.mostRecent().method).toBe('GET');
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('../../JSON/famousPainters.json');
        });

        it('should load the json with the data', (done) => {
            let request = ajax.getJson();

            request.then((response) => {
                expect(response).toEqual({
                    key: 'myresponse'
                });
                done();
            });

            jasmine.Ajax.requests.mostRecent().respondWith({
                'status': 200,
                'contentType': 'text/plain',
                'responseText': '{"key":"myresponse"}'
            });
        });
    });
});