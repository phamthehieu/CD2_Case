import {Room} from "../model/Room";

enum Status {
    A = 'drum',
    B = 'rented',
    C = 'maintenance'
}

export class RoomManage {
    listRoom: Room[] = []
    listRoomDrum: Room [] = []
    constructor() {
    }

    addRoom(t: Room) {
        this.listRoom.push(t)
    }

    editRoom(id: number, room: Room) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id) {
                this.listRoom[i] = room;
            }
        }
        return this.listRoom;
    }

    removeRoom(id: number) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].id === id) {
                this.listRoom.splice(i, 1)
            }
        }
    }

    displayAllRoom() {
        let str = ''
        for (let i = 0; i < this.listRoom.length; i++) {
            str += `id: ${this.listRoom[i].id} | name: ${this.listRoom[i].name} | price: ${this.listRoom[i].price} | bedRoom: ${this.listRoom[i].Bedroom} | toilet: ${this.listRoom[i].toilet} | status: ${this.listRoom[i].status}\n`
        }
        return str;
    }

    searchRoomPrice(price: number) {
        let arr = []
        let str = ''
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].price === price) {
                arr.push(this.listRoom[i])
            }
        }
        for (let i = 0; i < arr.length; i++) {
            str += `id: ${this.listRoom[i].id} | name: ${this.listRoom[i].name} | price: ${this.listRoom[i].price} | bedRoom: ${this.listRoom[i].Bedroom} | toilet: ${this.listRoom[i].toilet} | status: ${this.listRoom[i].status}\n`
        }
        return str
    }

    searchByName(name: string) {
        let art = []
        let str = ''
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].name === name) {
                art.push(this.listRoom[i])
            }
        }
        for (let i = 0; i < art.length; i++) {
            str += `id: ${this.listRoom[i].id} | name: ${this.listRoom[i].name} | price: ${this.listRoom[i].price} | bedRoom: ${this.listRoom[i].Bedroom} | toilet: ${this.listRoom[i].toilet} | status: ${this.listRoom[i].status}\n`
        }
        return str
    }

    checkRoomDrum() {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].status === Status.A) {
                this.listRoomDrum.push(this.listRoom[i])
            }
        }
        return this.listRoomDrum;
    }

    changeStatus(roomName: string) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].name === roomName) {
                return this.listRoom[i].status = Status.B
            }
        }
    }

    checkPriceRoom(name: string) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].name === name) {
                return this.listRoom[i].price
            }
        }
    }

    changeStatus1(roomName: string) {
        for (let i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].name === roomName) {
                return this.listRoom[i].status = Status.A
            }
        }
    }

    roomDrum() {
        let a = ''
        for (let i = 0; i < this.listRoomDrum.length; i++) {
            a += `id: ${this.listRoomDrum[i].id} | name: ${this.listRoomDrum[i].name} | price: ${this.listRoomDrum[i].price} | bedRoom: ${this.listRoomDrum[i].Bedroom} | toilet: ${this.listRoomDrum[i].toilet} | status: ${this.listRoomDrum[i].status}\n`
        }
        return a;
    }
}