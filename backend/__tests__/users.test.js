// __tests__/users.test.js

import request from 'supertest';
import app from '../app.js'; // Adjust the path to app.js if needed

describe('User API', () => {
    it('should fetch all users', async () => {
        const response = await request(app).get('/api/users');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    firstName: expect.any(String),
                    lastName: expect.any(String),
                    email: expect.any(String),
                }),
            ])
        );
    });
});
