import {UserRepository} from "../../../usecases/ports/user-repository"
import users from './users.json'
import {UserData} from "../../../entities/UserData";
import {UserResponseData, UserUpdateData} from "../../../usecases/registerUser/helpers/user-response-data";

export class InMemoryUserRepository implements UserRepository {
    add(data: UserData): Promise<UserResponseData> {
        users.push({
            name: data.name,
            email: data.email,
            password: data.password,
            id: 5
        })
        return Promise.resolve(users[users.length -1]);
    }

    delete(id: any): Promise<void> {
        return Promise.resolve(undefined);
    }

    update(data: UserUpdateData, id: any): Promise<UserResponseData> {
        return Promise.resolve(undefined);
    }

}