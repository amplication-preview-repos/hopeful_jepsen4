import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
