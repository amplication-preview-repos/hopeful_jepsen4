import { AttendanceUpdateManyWithoutEventsInput } from "./AttendanceUpdateManyWithoutEventsInput";
import { PhotoUpdateManyWithoutEventsInput } from "./PhotoUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEventsInput;
  date?: Date | null;
  location?: string | null;
  name?: string | null;
  photos?: PhotoUpdateManyWithoutEventsInput;
};
