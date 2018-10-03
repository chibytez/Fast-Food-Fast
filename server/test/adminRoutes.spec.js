import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';

import app from '../../app';

const Expect = chai.expect;

chai.use(chaiHttp);

export default (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header !== 'undefined') {
    const bearer = header.split(' ');
    req.token = bearer[1];
    next();
  } else {
    res.status(403)
      .json({
        message: 'Forbidden access',
      });
  }
};


describe('ADMIN ROUTES', () => {
  // it('Should set order as new ', (done) => {
  //   chai.request(app)
  //     .put('/api/v1/allOrders/')
  //     .set({ Authorization: 'Bearer ' + global.tok })
  //     .end((err, res) => {
  //       Expect(res.statusCode)
  //         .to
  //         .equal(200);
  //     });
  //   done();
  // });

  it('Should process an order', (done) => {
    chai.request(app)
      .put('/api/v1/allOrders/:orderId/processing')
      .set({ Authorization: 'Bearer ' + global.tok })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
      });
    done();
  });

  it('Should cancel an order', (done) => {
    chai.request(app)
      .put('/api/v1/allOrders/:orderId/cancelled')
      .set({ Authorization: 'Bearer ' + global.tok })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
      });
    done();
  });

  it('Should Resolve a request', (done) => {
    chai.request(app)
      .put('/api/v1/allOrders/:orderId/complete')
      .set({ Authorization: 'Bearer ' + global.tok })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
      });
    done();
  });

  it('Should list ALL orders', (done) => {
    chai.request(app)
      .get('/api/v1/allOrders')
      .set({ Authorization: 'Bearer ' + global.tok })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
        Expect(res)
          .to
          .be
          .an('object');
      });
    done();
  });

  it('Should list ONE order on /allorders/:orderId GET', (done) => {
    chai.request(app)
      .get('/api/v1/allOrders/:orderId')
      .set({ Authorization: 'Bearer ' + global.tok })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
        Expect(res)
          .to
          .be
          .an('object');
      });
    done();
  });

  it('should add a meal to menu / POST', (done) => {
    const data1 = {
      meal: 'pepsi',
      price: '500',
      order: 'Lorem ipsum owjjfndfnmnxnfj Lorem ipsum Lorem',
    };
    chai.request(app)
      .post('/api/v1/allOrders')
      .set({ Authorization: 'Bearer ' + global.token })
      .send(data1)
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(201);
      });
    done();
  });

  it('should delete an order on /:mealId  DELETE', (done) => {
    chai.request(app)
      .delete('/api/v1/allOrders/:mealId')
      .set({ Authorization: 'Bearer ' + global.token })
      .end((err, res) => {
        Expect(res.statusCode)
          .to
          .equal(200);
      });
    done();
  });
});
