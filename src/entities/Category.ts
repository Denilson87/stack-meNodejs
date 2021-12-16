
import { Entity, Column, CreateDateColumn } from "typeorm";

export class Category {
    id: string;
    name: string;
    description: string;
    created_at: Date;
}