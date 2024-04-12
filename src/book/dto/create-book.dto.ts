import { IsEnum, IsNotEmpty, IsString ,IsNumber} from "class-validator";
import { Category } from "../schemas/book.schema"


export class CreateBookDto {
    @IsNotEmpty() //Now title became required
    @IsString() //Now title became required
    readonly title:string;

    @IsNotEmpty() //Now title became required
    @IsString() //Now title became required
    readonly description:string;

    @IsNotEmpty() //Now author became required
    @IsNumber() //Now author became required
    readonly price:number;

    @IsNotEmpty() //Now author became required
    @IsString() //Now author became required
    readonly author:string;

    @IsNotEmpty() //Now author became required
    @IsEnum(Category) //Now author became required
    readonly category:Category;

}