import request from 'supertest'
import app from '../../src/app'

describe('Users testing', () => {
  it('User registration with valid data', async (done) => {
    const user = {
                  "first_name": "Vitória Carolina",
                  "last_name": "Gomes dos Santos",
                  "participation": 50.5
                 }
    
    const res = await request(app).post('/users').send(user)
    expect(res.status).toEqual(201)
    done();
  }, 30000);
  
  it('User registration with invalid data', async () => {
    const user = {
                  "first_name": "Vitória Carolina",
                  "last_name": "",
                  "participation": 12
                 }
      
    const res = await request(app).post('/users').send(user)
    expect(res.status).toEqual(400)
  });

  it('Update users', async () => {
    const user = {
                  "first_name": "Vitória Carolina",
                  "last_name": "Gomes dos Santos",
                  "participation": 10
                 }
      
    const res = await request(app).put('/users/1').send(user)
    expect(res.status).toEqual(200)
  });

  it('Search all registered users', async () => {
    const res = await request(app).get('/users')
    expect(res.status).toEqual(200);
  });

  it('Delete user', async () => {
    
    const res = await request(app).delete('/users/1')
    expect(res.status).toEqual(200)
  });

});
