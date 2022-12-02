import {RoomCharge} from "../model/roomCharge";

export class RoomChargeManage {
    listRoomCharge: RoomCharge[] = []

    constructor() {
    }

    add(t: RoomCharge) {
        this.listRoomCharge.push(t)
    }
}