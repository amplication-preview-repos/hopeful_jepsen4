import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  event?: EventWhereUniqueInput | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
};
