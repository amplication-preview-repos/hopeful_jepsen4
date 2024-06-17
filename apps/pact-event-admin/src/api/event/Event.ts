import { Attendance } from "../attendance/Attendance";
import { Photo } from "../photo/Photo";

export type Event = {
  attendances?: Array<Attendance>;
  createdAt: Date;
  date: Date | null;
  id: string;
  location: string | null;
  name: string | null;
  photos?: Array<Photo>;
  updatedAt: Date;
};
