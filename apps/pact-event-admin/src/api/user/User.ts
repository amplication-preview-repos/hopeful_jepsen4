import { Attendance } from "../attendance/Attendance";
import { Photo } from "../photo/Photo";
import { JsonValue } from "type-fest";

export type User = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photos?: Array<Photo>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
