import { InvalidUserData } from './errors/invalid-user-data-error'
import { User } from './user'
describe('User entity test', () => {
    it('Ensure User returns a new User entity when all data is correct', () => {
        const result = User.create({
            name: 'any_name',
            email: 'any@email.com',
            password: 'any_password'
        })

        expect(result).toMatchObject({
            name: 'any_name',
            email: 'any@email.com',
            password: 'any_password'
        })
    })

    it('Ensure User returns a InvalidUserData when name is empty', () => {
        try {
            const result = User.create({
                name: '',
                email: 'any@email.com',
                password: 'any_password'
            })
        } catch(error) {
            expect(error).toBeInstanceOf(InvalidUserData)
            expect(error.message).toBe('Name must have length  between 1 and 150')
        }

    })
})