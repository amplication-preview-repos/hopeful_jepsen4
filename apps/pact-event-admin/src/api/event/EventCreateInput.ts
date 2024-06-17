import { AttendanceCreateNestedManyWithoutEventsInput } from "./AttendanceCreateNestedManyWithoutEventsInput";
import { PhotoCreateNestedManyWithoutEventsInput } from "./PhotoCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEventsInput;
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  photos?: PhotoCreateNestedManyWithoutEventsInput;
};
