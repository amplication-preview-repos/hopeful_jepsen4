import { Event } from "../event/Event";
import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
};
