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


describe('ADMIN ROUTES', () => {

  it('Should process an order', (done) => {
    chai.request(app)
      .put('/api/v1/orders/2/processing')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
        done();
      });
  });

  it('Should cancel an order', (done) => {
    chai.request(app)
      .put('/api/v1/orders/2/cancelled')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('Should Resolve a request', (done) => {
    chai.request(app)
      .put('/api/v1/orders/2/complete')
      .set('token', token )
      .end((err, res) => {
        Expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('Should list ALL orders', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode).to
          .equal(200);
        Expect(res)
          .to
          .be
          .an('object');
        done();
      }); 
  });

  it('Should list ONE order on /allorders/:orderId GET', (done) => {
    chai.request(app)
      .get('/api/v1/orders/1')
      .set('token', token)
      .end((err, res) => {
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

  it('should add a meal to menu / POST', (done) => {
    const data1 = {
      meal: 'pepsi',
      price: '500',
    };
    chai.request(app)
      .post('/api/v1/orders')
      .set('token', token)
      .send(data1)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(201);
        done();
      });
  });

  it('should delete an order on /:mealId  DELETE', (done) => {
    chai.request(app)
      .delete('/api/v1/orders/1')
      .set('token', token)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
        done();
      });
  });
});
