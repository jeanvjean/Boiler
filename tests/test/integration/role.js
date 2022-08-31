/* eslint-disable max-len */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import app from '../../../src/app';
import enums from '../../../src/lib/enums';

chai.use(chaiHttp);

describe('Roles', () => {
  describe('Create Role', () => {
    it('should return error if required field is not passed', (done) => {
      chai.request(app)
        .post('/api/v1/role')
        .send({
          permissions: JSON.stringify([ 'permission-9ec2dabaf39a11ec80d0f39290315847', 'permission-9ec318e0f39a11ec80d037428990d55f', 'permission-9ec31a02f39a11ec80d04f11bffd0727' ]),
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(422);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('name is a required field');
          expect(res.body.status).to.equal('error');
          done();
        });
    });
    it('should create role successfully', (done) => {
      chai.request(app)
        .post('/api/v1/role')
        .send({
          name: 'Front desk',
          permissions: JSON.stringify([ 'permission-9ec2dabaf39a11ec80d0f39290315847', 'permission-9ec318e0f39a11ec80d037428990d55f', 'permission-9ec31a02f39a11ec80d04f11bffd0727' ]),

        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(201);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.ROLE_CREATED);
          expect(res.body.status).to.equal('success');
          process.env.ROLE_1_ID = res.body.data.id;
          done();
        });
    });
    it('should return error if role name already exists', (done) => {
      chai.request(app)
        .post('/api/v1/role')
        .send({
          name: 'Front desk',
          permissions: JSON.stringify([ 'permission-9ec2dabaf39a11ec80d0f39290315847', 'permission-9ec318e0f39a11ec80d037428990d55f', 'permission-9ec31a02f39a11ec80d04f11bffd0727' ]),

        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.ROLE_EXISTS);
          expect(res.body.status).to.equal('error');
          done();
        });
    });
  });
  describe('Update role', () => {
    it('should return error if unwanted field is passed', (done) => {
      chai.request(app)
        .put(`/api/v1/role/${process.env.ROLE_1_ID}`)
        .send({
          branch_id: 'branch-9ec31a84f39a11ec80d08f06b1dcc25f',
          permissions: JSON.stringify([ 'permission-9ec31a84f39a11ec80d08f06b1dcc25f', 'permission-9ec31afcf39a11ec80d0fb6ea2308f66' ]),
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(422);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('branch_id is not allowed');
          expect(res.body.status).to.equal('error');
          done();
        });
    });
    it('should fail if the role does not exist', (done) => {
      chai.request(app)
        .put(`/api/v1/role/${process.env.ROLE_1_ID}1`)
        .send({
          permissions: JSON.stringify([ 'permission-9ec31a84f39a11ec80d08f06b1dcc25f', 'permission-9ec31afcf39a11ec80d0fb6ea2308f66' ]),
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.ROLE_NOT_FOUND);
          expect(res.body.status).to.equal('error');
          done();
        });
    });
    it('should successfully update role name', (done) => {
      chai.request(app)
        .put(`/api/v1/role/${process.env.ROLE_1_ID}`)
        .send({
          name: 'Branch admin',
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.UPDATE_ROLE);
          expect(res.body.status).to.equal('success');
          done();
        });
    });
    it('should successfully update role permissions', (done) => {
      chai.request(app)
        .put(`/api/v1/role/${process.env.ROLE_1_ID}`)
        .send({
          permissions: JSON.stringify([ 'permission-9ec31a84f39a11ec80d08f06b1dcc25f', 'permission-9ec31afcf39a11ec80d0fb6ea2308f66' ]),
        })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.UPDATE_ROLE);
          expect(res.body.status).to.equal('success');
          done();
        });
    });
  });
  describe('Fetch Roles', () => {
    it('should get all roles', (done) => {
      chai.request(app)
        .get('/api/v1/role')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.FETCH_ROLES);
          expect(res.body.status).to.equal('success');
          process.env.ROLE_1_ID = res.body.data[0].id;
          done();
        });
    });
    it('should get single role', (done) => {
      chai.request(app)
        .get(`/api/v1/role/${process.env.ROLE_1_ID}`)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.GET_SINGLE_ROLE);
          expect(res.body.status).to.equal('success');
          done();
        });
    });
    it('should filter and return paginated data', (done) => {
      chai.request(app)
        .get('/api/v1/role?page=1&per_page=10&search=Front desk')
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.have.property('status');
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal(enums.FETCH_ROLES);
          expect(res.body.status).to.equal('success');
          done();
        });
    });
  });
});
