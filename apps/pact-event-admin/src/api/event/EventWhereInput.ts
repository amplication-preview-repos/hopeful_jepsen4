import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type EventWhereInput = {
  attendances?: AttendanceListRelationFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
};
