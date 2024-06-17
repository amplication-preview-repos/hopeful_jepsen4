/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceUpdateManyWithoutEventsInput } from "./AttendanceUpdateManyWithoutEventsInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PhotoUpdateManyWithoutEventsInput } from "./PhotoUpdateManyWithoutEventsInput";

@InputType()
class EventUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AttendanceUpdateManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => AttendanceUpdateManyWithoutEventsInput)
  @IsOptional()
  @Field(() => AttendanceUpdateManyWithoutEventsInput, {
    nullable: true,
  })
  attendances?: AttendanceUpdateManyWithoutEventsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PhotoUpdateManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => PhotoUpdateManyWithoutEventsInput)
  @IsOptional()
  @Field(() => PhotoUpdateManyWithoutEventsInput, {
    nullable: true,
  })
  photos?: PhotoUpdateManyWithoutEventsInput;
}

export { EventUpdateInput as EventUpdateInput };
