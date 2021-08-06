import {RegisterUserUseCase} from "./register-user-use-case";
import {InMemoryUserRepository} from "../../infra/data/in-memory/in-memory-user-repository";
import {RegisterUser} from "./register-user";
import {User} from "../../entities/user";

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
        expect(response).toBeInstanceOf(User)
    })
})