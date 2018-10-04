import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';

import app from '../../app';


const Expect = chai.expect;

chai.use(chaiHttp);

let token;
before((done) => {
  chai.request(app)
    .post('/api/v1/auth/login')
    .send({
      email: 'example@gmail.com',
      password: 'chibuikeadmin',
    })
    .end((err, res) => {
      const jwttoken = res.body.token;
      token = jwttoken;
      done();
    });
});

describe('USER ORDER CONTROLLER API ENDPOINT', () => {
  it('Should not have access to menu on no token GET', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .set('token', token)
      .end((err, res) => {
        Expect(err)
          .to
          .be
          .equal(null);
        Expect(res.statusCode)
          .to
          .equal(403);
        done();
      });
  });

  it('Should not have access to menu on invalid token GET', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .set('token', token)
      .end((err, res) => {
        Expect(err)
          .to
          .be
          .equal(null);
        Expect(res.statusCode)
          .to
          .equal(401);
        done();
      });
  });

  it('should place a SINGLE order / POST', (done) => {
    const data1 = {
      user_id: 1,
      email: 'fgsfdfdf@getMaxListeners.com',
      meal: 'pizza',
      price: '4500',
      option: 0,
      status: 0,
    };
    chai.request(app)
      .post('/api/v1/order')
      .set('token', token)
      .send(data1)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(201);
        done();
      });
  });

  it('Should list ALL order of a particular user  GET', (done) => {
    chai.request(app)
      .get('/api/v1/users/1/orders')
      .set('token', token)
      .end((err, res) => {
        Expect(err)
          .to
          .be
          .equal(null);
        Expect(res.statusCode)
          .to
          .equal(200);
        Expect(res)
          .to
          .be
          .an('object');
        done();
      });
  });

  it('Should list ALL meal menu on /users GET', (done) => {
    chai.request(app)
      .get('/api/v1/menu')
      .set('token', token)
      .end((err, res) => {
        Expect(err)
          .to
          .be
          .equal(null);
        Expect(res.statusCode)
          .to
          .equal(200);
        Expect(res)
          .to
          .be
          .an('object');
        done();
      });
  });

  it('should get an error when an order is not found on /orderId  DELETE', (done) => {
    chai.request(app)
      .delete('/api/v1/users/1/1235')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(404);
        done();
      });
  });

  it('should cancel an order on /orderId  DELETE', (done) => {
    chai.request(app)
      .delete('/api/v1/users/1/1')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
        done();
      });
  });
});
