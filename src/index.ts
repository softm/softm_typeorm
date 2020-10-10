import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Profile } from "./entity/Profile";
import { Photo } from "./entity/Photo";
import { ITestRes2 } from "./interface";

createConnection().then(async connection => {

    const profile = new Profile();
    profile.gender = "male";
    profile.photo = "me.jpg";
    await connection.manager.save(profile);
    
    const user = new User();
    user.name = 'test';
    user.profile = profile;
    await connection.manager.save(user);

    const users2 = await connection.manager.find(User,{name:"test"});
    
    console.log("Loaded users: ", users2);

    const usersJoin = await connection
    .getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile", "profile")
    .getMany();
    console.log("user leftJoinAndSelect : ", usersJoin);
    //usersJoin[0].profile;

    const userRepository = connection.getRepository(User);
    const users = await userRepository.find({ relations: ["profile"] });
    console.log("relations : ", usersJoin);

    const profiles = await connection
    .getRepository(Profile)
    .createQueryBuilder("profile")
    .leftJoinAndSelect("profile.user2", "user")
    .getMany();
    console.log("profile leftJoinAndSelect : ", usersJoin);

    const photo1 = new Photo();
    photo1.url = "me.jpg";
    await connection.manager.save(photo1);
    
    const photo2 = new Photo();
    photo2.url = "me-and-bears.jpg";
    await connection.manager.save(photo2);
    
    const user2 = new User();
    user2.name = "John";
    user2.photos = [photo1, photo2];
   // user.profile = profile;
    await connection.manager.save(user2);
    const userRepository3 = connection.getRepository(User);
    const users3 = await userRepository3.find({ relations: ["profile","photos"],select:["id"]});
    // ,select:["user.id"] 
    console.log("users3 select column : ", users3);

    const userRepository2 = connection.getRepository(User);
    const users11:ITestRes2 = await connection.createQueryBuilder()
        .select("user.id","userId")
        .addSelect("profile.id", "profileId")
        .addSelect("profile.gender", "gender")
        .from(User, "user")
        .leftJoin(Profile, "profile", "user.id = profile.id")
        .where("user.id = :id",{id:22})
        .getRawOne()
    ;
    console.log("users11 createQuery column : ", users11.gender,users11.userId,users11.profileId);

    
}).catch(error => console.log(error));
