import { Category } from "../schemas/book.schema"
import { IsEnum, IsNotEmpty, IsString ,IsNumber, IsOptional} from "class-validator";

export class UpdateBookDto {
    @IsOptional() //Now title became optional for update put request in body 
    @IsString() //Now title became required
    readonly title:string;

    @IsOptional() 
    @IsString() 
    readonly description:string;

    @IsOptional() 
    @IsNumber() 
    readonly price:number;

    @IsOptional() 
    @IsString() 
    readonly author:string;

    @IsOptional() 
    @IsEnum(Category) 
    readonly category:Category;

}