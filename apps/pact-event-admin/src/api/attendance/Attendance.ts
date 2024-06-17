import { Event } from "../event/Event";
import { User } from "../user/User";

export type Attendance = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
