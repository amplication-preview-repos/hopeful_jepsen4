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
import { PhotoWhereInput } from "./PhotoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PhotoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => PhotoWhereInput)
  @IsOptional()
  @Field(() => PhotoWhereInput, {
    nullable: true,
  })
  every?: PhotoWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => PhotoWhereInput)
  @IsOptional()
  @Field(() => PhotoWhereInput, {
    nullable: true,
  })
  some?: PhotoWhereInput;

  @ApiProperty({
    required: false,
    type: () => PhotoWhereInput,
  })
  @ValidateNested()
  @Type(() => PhotoWhereInput)
  @IsOptional()
  @Field(() => PhotoWhereInput, {
    nullable: true,
  })
  none?: PhotoWhereInput;
}
export { PhotoListRelationFilter as PhotoListRelationFilter };
