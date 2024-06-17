import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type UserWhereInput = {
  attendances?: AttendanceListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
  username?: StringFilter;
};
