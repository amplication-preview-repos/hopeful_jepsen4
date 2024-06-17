import { AttendanceUpdateManyWithoutUsersInput } from "./AttendanceUpdateManyWithoutUsersInput";
import { PhotoUpdateManyWithoutUsersInput } from "./PhotoUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  photos?: PhotoUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
