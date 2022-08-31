import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import app from '../../../src/app';
import * as UserFixtures from '../fixtures/user';
import * as Message from '../../../src/lib/enums/lib.enums.message';

const { newUserAccount } = UserFixtures;

chai.use(chaiHttp);

describe('User Route', () => {
  describe('Create Role', () => {
    it('should return error if the role does not exist', (done) => {
      chai.request(app)
        .post('/api/v1/user')
        .send({
          ...newUserAccount, role_id: `${process.env.BRANCH_HQ_ID}`, branch_id: `${process.env.BRANCH_HQ_ID}`,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal(Message.ROLE_NOT_FOUND);
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
    it('should return error if the branch does not exist', (done) => {
      chai.request(app)
        .post('/api/v1/user')
        .send({
          ...newUserAccount, role_id: `${process.env.ROLE_1_ID}`, branch_id: `${process.env.ROLE_1_ID}`,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal(Message.RESOURCE_NOT_EXIST('Branch'));
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
    it('should successfully create a new account', (done) => {
      chai.request(app)
        .post('/api/v1/user')
        .send({
          ...newUserAccount, branch_id: `${process.env.BRANCH_HQ_ID}`, role_id: `${process.env.ROLE_1_ID}`,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('success');
          expect(res.body.message).to.equal(Message.RESOURCE_CREATED('User'));
          expect(res.statusCode).to.equal(201);
          done();
        });
    });
    it('should return error if the account already exists', (done) => {
      chai.request(app)
        .post('/api/v1/user')
        .send({
          ...newUserAccount, branch_id: `${process.env.BRANCH_HQ_ID}`, role_id: `${process.env.ROLE_1_ID}`,
        })
        .end((err, res) => {
          expect(res.body.status).to.equal('error');
          expect(res.body.message).to.equal(Message.RESOURCE_EXISTS('Account'));
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
});
