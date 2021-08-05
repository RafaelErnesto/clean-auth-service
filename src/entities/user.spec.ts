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

    it('Ensure User returns a InvalidUserData when email is empty', () => {
        try {
            expect(User.create({
                name: 'name',
                email: '',
                password: 'any_password'
            })).toThrowError(InvalidUserData)
        } catch(error) {
            expect(error.message).toBe('Email cannot be empty')
        }
    })

    it('Ensure User returns a InvalidUserData when email is not valid', () => {
        try {
            expect(User.create({
                name: 'name',
                email: 'any_email',
                password: 'any_password'
            })).toThrowError(InvalidUserData)
        } catch(error) {
            expect(error.message).toBe('Email is not in valid format')
        }
    })

    it('Ensure User returns a InvalidUserData when password length is shorter than 8', () => {
        try {
            expect(User.create({
                name: 'name',
                email: 'any@mail.com',
                password: '1234567'
            })).toThrowError(InvalidUserData)
        } catch(error) {
            expect(error.message).toBe('Password length must be at least 8')
        }
    })
})