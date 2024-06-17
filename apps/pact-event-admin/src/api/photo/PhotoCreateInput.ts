import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  event?: EventWhereUniqueInput | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
