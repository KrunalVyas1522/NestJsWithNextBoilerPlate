import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'blogs',
    schema: 'public'
})
export class BlogsModel extends BaseEntity {
    @PrimaryGeneratedColumn('increment', {
        name: 'id'
    })
    id: number;

    @Column({
        name: 'title',
        type: 'varchar'
    })
    title: string;

    @Column({
        name: 'content',
        type: 'varchar'
    })
    content: string;

    @Column({
        name: 'author',
        type: 'varchar'
    })
    author: string;

    @Column({
        name: 'date',
        type: 'date'
    })
    date: Date;

    @Column({
        name: 'updated_at',
        type: 'date',
        nullable: true
    })
    updatedAt: Date;

    
    constructor(
        title: string,
        content: string,
        author: string,
        date: Date,
        updatedAt: Date,
    ) {
        super();
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.updatedAt = updatedAt;
    }
}
