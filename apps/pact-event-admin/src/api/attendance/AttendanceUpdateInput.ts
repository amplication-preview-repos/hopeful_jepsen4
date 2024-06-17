import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceUpdateInput = {
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
