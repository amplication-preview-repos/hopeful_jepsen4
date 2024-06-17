import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import { PhotoCreateNestedManyWithoutUsersInput } from "./PhotoCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  photos?: PhotoCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
