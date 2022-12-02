import {AccountManage} from "./service/accountManage";
import {Account} from "./model/account";
import {RoomManage} from "./service/roomManage";
import {Room} from "./model/Room";
import {OrderManage} from "./service/orderManage";
import {Order} from "./model/order";

enum Status {
    A = 'drum',
    B = 'rented',
    C = 'maintenance'
}

let accountManage = new AccountManage();
let roomManage = new RoomManage();
let orderManage = new OrderManage();

let readlineSync = require('readline-sync');
let test = new Account('12345678', '12345678', '1234567890', 'a@gmail.com', 'a@gmail.com', 'a', 19)
let room1 = new Room('201', 1000, 4, 2, Status.A)
let room2 = new Room('202', 800, 3, 2, Status.B)
let room3 = new Room('203', 600, 1, 2, Status.C)
let room4 = new Room('201', 1000, 4, 2, Status.A)
let room5 = new Room('201', 800, 3, 2, Status.B)
let room6 = new Room('201', 600, 1, 2, Status.C)
accountManage.add(test)
roomManage.addRoom(room1)
roomManage.addRoom(room2)
roomManage.addRoom(room3)
roomManage.addRoom(room4)
roomManage.addRoom(room5)
roomManage.addRoom(room6)

function mainLogIn() {
    let menu = `---------Menu chính-----------
    1.Sign in
    2.Sign up
    0.Thoát chương trình `
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                logInAccount();
                break;
            case 2:
                register();
                break;
            case 0:
                break;
        }
    } while (choice !== 0);
}

mainLogIn();

function register() {
    let userName = readlineSync.question('Enter userName : ');
    let password = readlineSync.question('Enter password : ');
    let numberPhone = readlineSync.question('Enter numberPhone : ');
    let address = readlineSync.question('Enter address : ');
    let email = readlineSync.question('Enter email : ');
    let fullName = readlineSync.question('Enter fullName : ');
    let age = +readlineSync.question('Enter age : ');
    let status = true;
    let account = new Account(userName, password, numberPhone, address, email, fullName, age)
    accountManage.registration(account)
}

function logInAccount() {
    let userName = readlineSync.question('Enter userName : ');
    let password = readlineSync.question('Enter password : ', {hideEchoBack: true});
    if (accountManage.logIn(userName, password) === 1) {
        menuMain();
    } else {
        console.log('Sai tài khoản hoặc mật khẩu')
    }
}

function menuMain() {
    let menu = `---------Menu chính-----------
    1. Quản lý tài khoản
    2. Quản lý phòng
    3. Quản lý hóa đơn
    0. Thoát
    `
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                displayAccount();
                break;
            case 2:
                roomMain();
                break;
            case 3:
                orderMain();
                break;
            case 0:
                mainLogIn()
                break;
        }
    } while (choice !== 0);
}

menuMain();

function displayAccount() {
    console.log(accountManage.displayAll())
}

function roomMain() {
    let menu = `---------Menu chính-----------
    1. Hiển thị danh sách phòng
    2. Thêm phòng
    3. Sửa thông tin phòng
    4. Xóa phòng 
    5. Tìm phòng theo loại phòng
    6. Tìm phòng theo tên phòng
    0. Thoát
    `
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                displayAllRoom();
                break;
            case 2:
                addRoom();
                break;
            case 3:
                editRoom();
                break;
            case 4:
                removeRoom();
                break;
            case 5:
                searchByPrice();
                break;
            case 6:
                searchByName();
                break;
            case 0:
                menuMain();
                break;
        }
    } while (choice !== 0);
}

function displayAllRoom() {
    console.log(roomManage.displayAllRoom())
}

function addRoom() {
    console.log(`---------- Thêm Phòng Mới ---------------`)
    console.log(`Có 4 loại phòng:\n
     A: giá 1000 | 3 phòng ngủ | 1 nhà vệ sinh \n
     B: giá 800 | 2 phòng ngủ | 1 nhà vệ sinh\n
     C: giá 600 | 1 phòng ngủ | 1 nhà vệ sinh\n
     D: giá 400 | 1 phòng ngủ\n
     Status: drum | rented | maintenance
     `)
    let name = readlineSync.question('Enter NameRoom : ');
    let price = +readlineSync.question('Enter PriceRoom : ');
    let bedRoom = readlineSync.question('Enter BedRoom : ');
    let toilet = readlineSync.question('Enter Toilet : ');
    let status = readlineSync.question(`Enter Status : `);
    let a = new Room(name, price, bedRoom, toilet, status)
    roomManage.addRoom(a)
}

function editRoom() {
    let id = +readlineSync.question('Enter IdRoom : ');
    console.log(`---------- Sửa Thông Tin Phòng ---------------`)
    console.log(`Có 4 loại phòng:\n
     A: giá 1000 | 3 phòng ngủ | 1 nhà vệ sinh \n
     B: giá 800 | 2 phòng ngủ | 1 nhà vệ sinh\n
     C: giá 600 | 1 phòng ngủ | 1 nhà vệ sinh\n
     D: giá 400 | 1 phòng ngủ\n
     Status: drum | rented | maintenance
     `)
    let name = readlineSync.question('Enter Name : ');
    let price = +readlineSync.question('Enter PriceRoom : ');
    let bedRoom = readlineSync.question('Enter BedRoom : ');
    let toilet = readlineSync.question('Enter Toilet : ');
    let status = readlineSync.question('Enter Status : ');
    let a = new Room(name, price, bedRoom, toilet, status)
    roomManage.editRoom(id, a)
}

function removeRoom() {
    console.log(`---------- Xóa Phòng ---------------`)
    let id = +readlineSync.question('Enter IdRoom : ');
    roomManage.removeRoom(id)
}

function searchByPrice() {
    let price = +readlineSync.question('Enter PriceRoom : ');
    console.log(roomManage.searchRoomPrice(price))
}

function searchByName() {
    console.log(`-----------Nhập Tên Phòng--------------`)
    let name = readlineSync.question('Enter Name : ');
    console.log(roomManage.searchByName(name))
}

function orderMain() {
    let menu = `---------Menu chính-----------
    1. Hiển thị danh sách phòng
    2. Thêm phòng
    3. Xem số ngày đã thuê
    4. Sửa thông tin phòng
    5. Tính tiền phòng
    0. Thoát
    `
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                displayOrder();
                break;
            case 2:
                addOrder();
                break;
            case 3:
                checkDay();
                break;
            case 4:
                editOrder();
                break;
            case 5:
                roomPayment();
                break;
            case 0:
                menuMain();
        }
    } while (choice !== 0);
}

function addOrder() {
    console.log(`----------Danh sách phòng trống------------`)
    console.log(roomManage.checkRoomDrum())
    console.log(`----------Cho thuê phòng---------------`)
    console.log(`TimeStart: year/month/day`)
    let staff = readlineSync.question('Enter staff : ');
    let renter = readlineSync.question('Enter renter : ');
    let roomName = readlineSync.question('Enter roomName : ');
    let timeStart = readlineSync.question('Enter timeStart : ');
    let t = new Order(staff, renter, roomName, timeStart)
    orderManage.addOrder(t)
    roomManage.changeStatus(roomName)
}

function displayOrder() {
    console.log(orderManage.displayOrder())
}

function checkDay() {
    console.log(orderManage.displayOrder())
    console.log(`TimeStart: year/month/day`)
    let roomName = readlineSync.question('Enter roomName : ');
    console.log(`Ngày thuê quả bạn: ${orderManage.checkNumberOfDays(roomName)}`)
}

function roomPayment() {
    console.log(orderManage.displayOrder())
    console.log(`------------Chọn phòng cần thanh toán----------`)
    let name = readlineSync.question('Enter NameRoom : ');
    let price = roomManage.checkPriceRoom(name);
    let time = orderManage.checkNumberOfDays(name);
    console.log(`Tiền cần thanh toán: ${orderManage.buyRoomPayment(price, time)}`)
    roomManage.changeStatus1(name)
    orderManage.setDay(name)
}

function editOrder() {
    console.log(orderManage.displayOrder())
    console.log(`------------Chọn phòng cần sửa----------`)
    let name = readlineSync.question('Enter roomName : ');
    console.log(`------------from sửa----------`)
    let staff = readlineSync.question('Enter staff : ');
    let renter = readlineSync.question('Enter renter : ');
    let roomName = readlineSync.question('Enter roomName : ');
    let timeStart = readlineSync.question('Enter timeStart : ');
    let t = new Order(staff, renter, roomName, timeStart)
    orderManage.editOrder(name, t)
}