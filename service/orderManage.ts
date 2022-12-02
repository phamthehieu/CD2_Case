import {Order} from "../model/order";

export class OrderManage {
    listOrder: Order[] = []

    constructor() {
    }

    addOrder(t: Order) {
        this.listOrder.push(t)
    }

    displayOrder() {
        let str = ''
        for (let i = 0; i < this.listOrder.length; i++) {
            str += `id: ${this.listOrder[i].id} | staff: ${this.listOrder[i].staff} | renter: ${this.listOrder[i].renter} | roomName: ${this.listOrder[i].roomName} | timeStart: ${this.listOrder[i].timeStart}`
        }
        return str;
    }

    checkNumberOfDays(roomName: string) {
        let c: number = 0
        for (let i = 0; i < this.listOrder.length; i++) {
            if (this.listOrder[i].roomName === roomName) {
                let today = new Date().toISOString().slice(0, 10)
                let endDate: any = today
                let a: any = new Date(this.listOrder[i].timeStart)
                let b: any = new Date(endDate)
                c = Math.floor((b - a) / (1000 * 60 * 60 * 24))
            }
        }
        return c;
    }

    buyRoomPayment(price: any, time: any) {
        let total = Math.floor(price * time)
        return total;
    }

    setDay(name: string) {
        for (let i = 0; i < this.listOrder.length; i++) {
            if (this.listOrder[i].roomName === name) {
                return this.listOrder[i].timeStart = 0;
            }
        }
    }

    editOrder(name: string, t: Order) {
        for (let i = 0; i < this.listOrder.length; i++) {
            if (this.listOrder[i].roomName === name) {
                this.listOrder[i] = t
            }
        }
        return this.listOrder;
    }
}
