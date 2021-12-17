
import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToMany, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";


@Entity("videos")
export class Video {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    duration: number;
    @Column()
    category_id: string;

    @ManyToMany(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}