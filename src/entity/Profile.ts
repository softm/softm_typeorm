import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { User } from "./User";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: string;

    @Column()
    photo: string;

    @OneToOne(type => User, user => user.profile) // specify inverse side as a second parameter
    user: User;

    @OneToOne(type => User, user => user.profile) // specify inverse side as a second parameter
    user2: User;

    // @OneToOne(type => User)

    // user: User;


}
