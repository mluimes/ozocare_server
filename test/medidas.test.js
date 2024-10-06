const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Asegúrate de que tu archivo app.js exporta app correctamente
const expect = chai.expect;

chai.use(chaiHttp);

describe('Medidas API', () => {

  describe('GET /api/v1/medidas', () => {
    it('debería obtener todas las medidas', (done) => {
      chai.request(app)
        .get('/api/v1/medidas')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /api/v1/medidas', () => {
    it('debería crear una nueva medida', (done) => {
      const nuevaMedida = {
        temperatura: 23,
        concentracionGas: 2
      };
      
      chai.request(app)
        .post('/api/v1/medidas')
        .send(nuevaMedida)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('temperatura', 23);
          expect(res.body).to.have.property('concentracionGas', 2);
          done();
        });
    });
  });
});
