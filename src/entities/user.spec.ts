import { User } from './user'
describe('User entity test', () => {
    it('Ensure User returns a new User entity when all data is correct', () => {
        const sut = User.create({
            name: 'any_name',
            email: 'any@email.com',
            password: 'any_password'
        })

        expect(sut).toMatchObject({
            name: 'any_name',
            email: 'any@email.com',
            password: 'any_password'
        })
    })
})