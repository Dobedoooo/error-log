import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { ListAllEntities } from '../universal_dto/dto';
import { CreateErrorDto, UpdateErrorDto } from './dto/dto';
import { ErrorLog } from './error.entity';
import { Error } from './interface/error.interface';

@Injectable()
export class ErrorsService {
    constructor(
        @InjectRepository(ErrorLog)
        private errorRepository: Repository<ErrorLog>
    ) {}
    
    /**
     * 分页查找
     * @param query 分页参数
     * @returns 
     */
    findAll(query: ListAllEntities): Promise<ErrorLog[]> {
        return this.errorRepository.find(query)
    }

    /**
     * 按 id 查找
     * @param id 
     * @returns 
     */
    findOneById(id: number): Promise<ErrorLog> {
        return this.errorRepository.findOneBy({ error_id: id })
    }

    /**
     * 插入一条
     * @param errorEntity 
     * @returns 影响行数是否非0
     */
    async insertOne(errorEntity: CreateErrorDto): Promise<boolean> {
        // 添加时间戳
        errorEntity.error_timestamp = new Date().getTime().toString()
        // excute
        const result: InsertResult = await this.errorRepository.insert(errorEntity as Error)
        
        return result.raw?.affectedRows !== 0
    }

    /**
     * 更新一条
     * @param id 所更新记录 id
     * @param errorProperties 更新字段
     * @returns 影响行数是否非0
     */
    async updateOne(id: number, errorProperties: UpdateErrorDto): Promise<boolean> {
        // ...
        const result: UpdateResult = await this.errorRepository.update(id, errorProperties)
        return result.affected !== 0
    }

    /**
     * 软删除：将软删除字段设置为 删除时间
     * @param id 所删除记录 id
     * @returns 影响行数是否非0
     */
    async softDelete(id: number | number[]): Promise<boolean> {
        const result: UpdateResult = await this.errorRepository.softDelete(id)
        return result.affected !== 0
    }

    /**
     * 恢复软删除的记录：将软删除字段设置为 NULL
     * @param id 所恢复记录 id
     * @returns 影响行数是否非0
     */
    async restore(id: number | number[]): Promise<boolean> {
        const result = await this.errorRepository.restore(id)
        return result.affected !== 0
    }
}
