import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import {Profile} from "../entity/Profile";
import { Photo } from "./Photo";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Profile, profile => profile.user)
    @JoinColumn({
        name: 'profile_id'    // default: profileId~~!~~~
    })
    profile: Profile;

    @OneToMany(() => Photo, photo => photo.user)
    photos: Photo[];
    
}
