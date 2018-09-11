const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const getComment = require('../data/getComment');
const env = require('../endpoint/test');

describe('Get Comment by id', () => {

    getComment.map((data) => {
        let response;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying response code is 200', () => {
            expect(response.statusCode).to.eql(200);
        });

        it('Verifying content-type header exists and equals to application/json; charset=utf-8', () => {
            expect(response.headers['content-type']).to.eql('application/json; charset=utf-8');
        });

        it('Verifying the response body is the array of 10 users', () => {
            expect(response.body.length).to.eql(10);
        });
    })

});