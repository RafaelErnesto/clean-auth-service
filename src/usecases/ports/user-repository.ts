import {UserData} from "../../entities/UserData";
import {UserResponseData, UserUpdateData} from "../registerUser/helpers/user-response-data";

export interface UserRepository {
    add(data: UserData): Promise<UserResponseData>
    update(data:UserUpdateData, id: any): Promise<UserResponseData>
    delete(id: any): Promise<void>
}