import { Body, Controller, Get ,Logger, Post} from '@nestjs/common';
import { CreateCoordianatesDto } from './dto/create-coordinates.dto';
@Controller('rider-coordinates')
export class RiderCoordinatesController {
    // private readonly logger = new Logger(RiderCoordinatesController.name);

    // constructor() {
    //     this.logger.log('RiderCoordinatesController initialized');  // Log on initialization
    // }
    @Get()
    getRiderCoordinates(): string {
        // this.logger.log('GET /rider-coordinates was called');
        return 'Hello i am from Rider coordinates';
    }
    @Post()
    saveRiderCoordinates( 
        // this.logger.log('POST /rider-coordinates was called');
        @Body()
        createCoordinatesDto: CreateCoordianatesDto,
        
    ){
        return createCoordinatesDto;
    }
}
