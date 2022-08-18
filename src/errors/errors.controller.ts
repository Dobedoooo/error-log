import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { ListAllEntities } from '../universal_dto/dto';
import { CreateErrorDto, UpdateErrorDto } from './dto/dto';
import { ErrorLog } from './error.entity';
import { ErrorsService } from './errors.service';

@Controller('errors')
export class ErrorsController {
    constructor(private errorsService: ErrorsService) {}

    @Get() 
    find(@Query() query: ListAllEntities): Promise<ErrorLog[]> {    // 分页查找
        return this.errorsService.findAll(query)
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<ErrorLog> {   // 按 id 查找
        return this.errorsService.findOneById(id)
    }

    @Post()
    async insertOne(@Body() createErrorDto: CreateErrorDto) {   // 插入一条
        const flag: boolean = await this.errorsService.insertOne(createErrorDto)
        return { success: flag, message: '' }
    }

    @Put(':id')
    async updateOne(@Param('id') id: number, @Body() updateErrorDto: UpdateErrorDto) {    // 更新一条
        const flag: boolean = await this.errorsService.updateOne(id, updateErrorDto)
        return { success: flag, message: '' }
    }

    @Delete(':id')
    async softDelete(@Param('id') id: number) {    // 软删除
        const flag: boolean = await this.errorsService.softDelete(id)   
        return { success: flag, message: '' }
    }

}
