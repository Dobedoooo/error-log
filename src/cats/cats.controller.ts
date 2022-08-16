import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ListAllEntities, CreateCatDto, UpdateCatDto } from './dto/dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
        return this.catsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `this action returns #${id} cat`
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `this action updates a #${id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `this action removes a #${id} cat`
    }
}
