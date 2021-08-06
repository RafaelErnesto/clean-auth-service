import {RegisterUserUseCase} from "./register-user-use-case";
import {InMemoryUserRepository} from "../../infra/data/in-memory/in-memory-user-repository";
import {RegisterUser} from "./register-user";
import {User} from "../../entities/user";
import { UserResponseData } from "./helpers/user-response-data";
import {InvalidUserData} from "../../entities/errors/invalid-user-data-error";

describe('RegisterUser test', () => {
    const makeSut = (): RegisterUserUseCase => {
        return new RegisterUser(new InMemoryUserRepository())
    }
    it('Ensure RegisterUser returns User entity when all data is correct', async () => {
        const sut = makeSut()
        const response = await sut.create({
            name:"Any_name",
            email:"any@mail.com",
            password: "12345678"
        })
        expect(response.name).toEqual('Any_name')
    })

    it('Ensure RegisterUser throws when some data is missing', async () => {
        const sut = makeSut()
        try {
            expect(await sut.create({
                email:"any@mail.com",
                password: "12345678"
            })).toThrowError(InvalidUserData)
        } catch(error) {
            expect(error.message).toBe('Name must have length  between 1 and 150')
        }
    })
})