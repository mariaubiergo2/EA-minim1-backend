import { Schema, model } from "mongoose";

import { Friend } from "../interfaces/friend.interface";

const FriendSchema = new Schema<Friend>(
    {
        username: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
            required: true,
        },
        userFollowed: {
            type: [Schema.Types.ObjectId],
            ref: 'users',
            required: true,
        },
        dateStart: {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FriendModel = model('friends', FriendSchema);

export default FriendModel;