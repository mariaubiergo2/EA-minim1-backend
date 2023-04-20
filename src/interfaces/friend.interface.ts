import { ObjectId } from "mongodb";

export interface Friend {
    //Un Friend sempre estarà dins d'un User
    username: ObjectId; //Username of the Friend
    userFollowed: ObjectId; //Username of the one that starts to have a new friend
    dateStart: string; //The day it started to be friend with the other user
    likes: number; //Number of likes that the Friend gives
    active: boolean; //True: you are friends/False: ends being friends
}