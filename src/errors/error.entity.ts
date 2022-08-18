import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ErrorLog {
    @PrimaryGeneratedColumn()
    error_id: number

    @Column()
    error_title: string

    @Column()
    error_create_user: string

    @Column()
    error_create_time: string

    @Column()
    error_timestamp: string

    @Column()
    error_type: string

    @Column()
    error_sub_type: string

    @Column()
    error_desc: string

    @Column()
    error_analysis: string
    
    @Column()
    error_resolve: string

    @DeleteDateColumn()
    error_deleted?: Date
}