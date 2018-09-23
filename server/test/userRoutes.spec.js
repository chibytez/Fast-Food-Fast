import chai from 'chai';

// import chaiHttp from 'chai-http';

import app from '../../app';

const expect = chai.expect;

// chai.use(chaiHttp);
chai.use(require('chai-http'));

describe('ADMIN ROUTES',() =>{
    //Get all orders
it('Should Get All orders',(done)=>{
    chai.request(app)
    .get("/api/v1/orders")
    .then((res) =>{
        expect(res).to.have.status(200);
        expect(res).to.be.an('array')
    })
    done();
});

//Get Single order
it('Should Get All orders',(done)=>{
    chai.request(app)
    .get("/api/v1/orders/:id")
    .then((res) =>{
        expect(res).to.have.status(200);
        expect(res).to.be.an('array')
    }) 
    done();
});

//Get -invalid path
it('should return not found',(done)=>{
    chai.request(app)
    .get('/INVALID_PATH')
    .then((res) =>{
        throw new Error('path exists!');
    })
    .catch((err)=>{
        expect(err).to.have.status(404);
    });
    done(); 
});

//Post- Add a new order
it('should add a new order', (done)=>{
chai.request(app)
.post("/api/v1/orders")
.then((res) =>{
    expect(res).to.have.status(201);
    expect(res).to.be.an('array');
}) 
done();
});

//Post - Bad Request
it('should return bad request', (done)=>{
chai.request(app)
.post('/INVALID_PATH')
.then((res)=>{
    throw new Error ('Invalid content');
})
.catch((err)=>{
    expect(err).to.have.status(400);
})
done();
});

    //delete an order
    it('should delete an item', (done)=>{
            chai.request(app)
            .delete("/api/v1/orders/:id")
            .then((res)=>{
              expect(res).to.have.status(201);
            expect(res).to.be.an('array');
            });
            done();
            });

            //bad delete request
            it('Should show an error message when order do not exist',(done)=>{
                chai.request(app)
                .delete('/INVALID_PATH')
                .then((res)=>{
                    throw new Error ('Invalid content');
                })
                .catch((err)=>{
                    expect(err).to.have.status(404);
                })
                done();
                }); 
});