import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCoordianatesDto {
    @IsNumber()
    @IsNotEmpty()
    lng: number;
    @IsNumber()
    @IsNotEmpty()
    lat: number;
    @IsNumber()
    @IsNotEmpty()
    riderId: string;
}
