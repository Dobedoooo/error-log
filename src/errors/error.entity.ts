import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ErrorLog {
    @PrimaryGeneratedColumn()
    error_id: string

    @Column()
    error_title: string

    @Column()
    error_create_user: string

    @Column()
    error_create_time: string

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
}