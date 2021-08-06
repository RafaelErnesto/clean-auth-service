import {RegisterUserUseCase} from "./register-user-use-case";
import {UserRepository} from "../ports/user-repository";
import {UserData} from "../../entities/UserData";
import {User} from "../../entities/user";

export class RegisterUser implements RegisterUserUseCase {
    private userRepository: UserRepository
    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository
    }
    create(data: UserData): Promise<User> {
        return new Promise(resolve => resolve(User.create(data)))
    }

}