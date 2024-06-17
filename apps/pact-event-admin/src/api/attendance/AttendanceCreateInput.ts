import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceCreateInput = {
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
