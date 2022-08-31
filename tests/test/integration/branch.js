import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import 'dotenv/config';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('create branch', () => {
  it('should return error if required fields are not passed', (done) => {
    chai.request(app)
      .post('/api/v1/branch')
      .send({
        name: 'the title',
        longitude: 15.999888,
        latitude: -40.555444,
        distance: 10000,
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(422);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('branch_type is a required field');
        expect(res.body.status).to.equal('error');
        done();
      });
  });
  it('should create headquarters successfully', (done) => {
    chai.request(app)
      .post('/api/v1/branch')
      .send({
        name: 'the title',
        longitude: -40.555449,
        latitude: 15.999885,
        branch_type: 'head_quarters',
        distance: 10000,
      })
      .end((err, res) => {
        process.env.BRANCH_HQ_ID = res.body.data.id;
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('created successfully');
        expect(res.body.status).to.equal('success');
        done();
      });
  });
  it('should return error if head quarters branch already exists', (done) => {
    chai.request(app)
      .post('/api/v1/branch')
      .send({
        name: 'the title',
        longitude: -40.555444,
        latitude: 15.999888,
        branch_type: 'head_quarters',
        distance: 10000,
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(400);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('there can only be one HQ branch');
        expect(res.body.status).to.equal('error');
        done();
      });
  });
  it('should create branch successfully', (done) => {
    chai.request(app)
      .post('/api/v1/branch')
      .send({
        name: 'the title',
        longitude: -85.3078294,
        latitude: 35.0609500,
        branch_type: 'sub_branch',
        distance: 10000,
      })
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal('created successfully');
        expect(res.body.status).to.equal('success');
        done();
      });
  });
});

describe('Fetch branches', () => {
  it('should throw error if required query are not passed', (done) => {
    chai.request(app)
      .get('/api/v1/branch')
      .query({
        longitude: -85.3071590,
        latitude: 35.0472780,
      })
      .end((err, res) => {
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.statusCode).to.equal(422);
        expect(res.body.message).to.equal('distance is a required field');
        expect(res.body.status).to.equal('error');
        done();
      });
  });
  it('should successfully create a branch', (done) => {
    chai.request(app)
      .get('/api/v1/branch')
      .query({
        longitude: -85.3071590,
        latitude: 35.0472780,
        distance: 10000,
      })
      .end((err, res) => {
        expect(res.body).to.have.property('status');
        expect(res.body).to.have.property('message');
        expect(res.statusCode).to.equal(200);
        expect(res.body.message).to.equal('fetched all branches within (10000 meters) from provided location');
        expect(res.body.status).to.equal('success');
        done();
      });
  });
});
