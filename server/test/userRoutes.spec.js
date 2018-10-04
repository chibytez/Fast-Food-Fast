import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';

import app from '../../app';

const Expect = chai.expect;
chai.use(chaiHttp);


describe('USER CONTROLLER TESTS', () => {
  describe('User sign up', () => {
    it('Should return a token and a status code of 201', (done) => {
      const newUser = {
        name: 'John',
        email: 'example25@gmail.com',
        phoneNumber: '12345678901',
        password: 'chibuikeadmin',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(newUser)
        .end((err, res) => {
          Expect(err).to.equal(null);
          Expect(res.statusCode).to.equal(201);
          Expect(res.body[0]).to.have.property('token');
          Expect(res.body[0].auth).to.be.equal(true);
          done();
        });
      
    });
  });

  it('Should return a status code of 409', (done) => {
    const newUser = {
      name: 'John doe',
      email: 'example@gmail.com',
      phoneNumber: '12345678901',
      password: '123456',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        Expect(err).to.equal(null);
        Expect(res.statusCode).to.equal(409);
        done();
      });
  });

  it('Should return a status code of 500', (done) => {
    const newUser = {
      name: 'John doe',
      email: 12456874,
      phoneNumber: '12345678901',
      password: '123456',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        Expect(res.statusCode).to.equal(400);
        Expect(res.body).to.have.property('errors');
        done();
      });
  });

  describe('POST User Login(/auth/login)', () => {
    it('Should return a token', (done) => {
      const User = {
        email: 'example@gmail.com',
        password: '123456',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(User)
        .end((err, res) => {
          Expect(err).to.equal(null);
          Expect(res.statusCode).to.equal(200);
          Expect(res.body[0]).to.be.have.property('token');
          done();
        });
    });

    it('Should return a status code of 401 login authentication fail', (done) => {
      const User = {
        email: 'example@gmail.com',
        password: '1234567',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(User)
        .end((err, res) => {
          Expect(err).to.equal(null);
          Expect(res.statusCode).to.equal(401);
          done();
        });
    });

    it('Should return a status code of 401 for incorrect password and email', (done) => {
      const User = {
        email: 'example21233@gmail.com',
        password: '123456',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(User)
        .end((err, res) => {
          Expect(res.statusCode).to.equal(401);
          done();
        });
    });

    it('Should return a status code of 400 for invalid email', (done) => {
      const user = {
        email: 12,
        password: '1234567',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          Expect(res.statusCode).to.equal(400);
          done();
        });
    });

    it('Should return a status code of 400 for invalid password', (done) => {
      const user = {
        email: 'example@gmail.com',
        password: '10',
      };
      chai.request(app)
        .post('/api/v1/auth/login')
        .send(user)
        .end((err, res) => {
          Expect(err).to.equal(null);
          Expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
});
