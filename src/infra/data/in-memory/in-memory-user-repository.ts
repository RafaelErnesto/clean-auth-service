import {UserRepository} from "../../../usecases/ports/user-repository"
import * as users from './users.json'
import {UserData} from "../../../entities/UserData";
import {UserResponseData, UserUpdateData} from "../../../usecases/registerUser/helpers/user-response-data";

export class InMemoryUserRepository implements UserRepository {
    add(data: UserData): Promise<UserResponseData> {
        return Promise.resolve(undefined);
    }

    delete(id: any): Promise<void> {
        return Promise.resolve(undefined);
    }

    update(data: UserUpdateData, id: any): Promise<UserResponseData> {
        return Promise.resolve(undefined);
    }

}