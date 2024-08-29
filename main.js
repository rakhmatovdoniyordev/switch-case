{
    //1-masala
    let day = 5

    switch(day){
        case 1:
            console.log("Dushanba");
            break
        case 2:
            console.log("Seshanba");
            break
        case 3:
            console.log("Chorshanba");
            break
        case 4:
            console.log("Payshanba");
            break
        case 5:
            console.log("Juma");
            break
        case 6:
            console.log("Shanba");
            break
        case 7:
            console.log("Yakshanba");
            break
        default:
            console.log("Noto'g'ri raqam kiritildi !");
    }
}

{
    //2-masala
    let k = 5
    switch(k){
        case 1:
            console.log("Yomon");
            break
        case 2:
            console.log("Qoniqarsiz");
            break
        case 3:
            console.log("Qoniqarli");
            break
        case 4:
            console.log("Yaxshi");
            break
        case 5:
            console.log("A'lo");
            break
        default:
            console.log("Xato");
    }
}

{
    //3-masala
    let month = 2
    switch(month){
        case 1:
        case 2:
        case 12:
            console.log("Qish");
            break
        case 3:
        case 4:
        case 5:
            console.log("Bahor");
            break
        case 6:
        case 7:
        case 8:
            console.log("Yoz");
        case 9:
        case 10:
        case 11:
            console.log("Kuz");
            break
        default:
            console.log("Noto'g'ri qiymat");
    }
}

{
    //4-masala
    let month = 2
    switch(month){
        case 1:
            console.log("Yanvar oyi 31 kundan iborat");
            break;
        case 2:
            console.log("Fevral oyi 29 kundan iborat");
            break;
        case 3:
            console.log("Mart oyi 31 kundan iborat");
            break;
        case 4:
            console.log("Aprel oyi 30 kundan iborat");
            break;
        case 5:
            console.log("May oyi 31 kundan iborat");
            break;
        case 6:
            console.log("Iyun oyi 30 kundan iborat");
            break;
        case 7:
            console.log("Iyul oyi 31 kundan iborat");
            break;
        case 8:
            console.log("Avgust oyi 31 kundan iborat");
            break;
        case 9:
            console.log("Sentyabr oyi 30 kundan iborat");
            break;
        case 10:
            console.log("Oktyabr oyi 31 kundan iborat");
            break;
        case 11:
            console.log("Noyabr oyi 30 kundan iborat");
            break;
        case 12:
            console.log("Yanvar oyi 31 kundan iborat");
            break;
    }
}

{
    // 5-masala
    let a = 6.7 // haqiqiy son
    let b = 2.4 // haqiqiy son
    let action = 4 // amal uchun butun son
    switch(action){
        case 1:
            console.log(a+b);
            break
        case 2:
            console.log(a-b);
            break
        case 3:
            console.log(a/b);
            break
        case 4:
            console.log(a*b);
            break
    }
}

{
    //6-masala
    let unitofLength = 1 //Uzunlik birligi (1-5 oralig'ida)
    let crosssectionLength = 1
    let meter
    switch (unitofLength) {
        case 1:
            meter = crosssectionLength * 0.1
            console.log(`${crosssectionLength} desimetr ${meter} metrga teng`);
            break;
        case 2:
            meter = crosssectionLength * 1000
            console.log(`${crosssectionLength} kilometr ${meter} metrga teng`);
            break
        case 3:
            meter = crosssectionLength
            cconsole.log(`${crosssectionLength} metr ${meter} metrga teng`);
            break
        case 4:
            meter = crosssectionLength * 0.001
            console.log(`${crosssectionLength} milimetr ${meter} metrga teng`);
            break
        case 5:
            meter = crosssectionLength * 0.01
            console.log(`${crosssectionLength} santimetr ${meter} metrga teng`);
            break
        default:
            console.log(`Noto'g'ri uzunlik birligi kiritildi !`);
            break;
    }
}

{
    //7-masala
    let weightUnit = 4 //Uzunlik birligi (1-5 oralig'ida)
    let weightValue = 2
    let kilogram
    switch (weightUnit) {
        case 1:
            kilogram = weightValue
            console.log(`${weightValue} kilogram ${kilogram} kilogramga teng`);
            break;
        case 2:
            kilogram = weightValue * 1e-6
            console.log(`${weightValue} miligram ${kilogram} kilogramga teng`);
            break
        case 3:
            kilogram = weightValue * 0.001
            console.log(`${weightValue} gram ${kilogram} kilogramga teng`);
            break
        case 4:
            kilogram = weightValue * 1000
            console.log(`${weightValue} tonna ${kilogram} kilogramga teng`);
            break
        case 5:
            kilogram = weightValue * 100
            console.log(`${weightValue} sentner ${kilogram} kilogramga teng`);
            break
        default:
            console.log(`Noto'g'ri uzunlik birligi kiritildi !`);
            break;
    }
}

{
    //8-masala
    let D = 23 // kun
    let M = 2 // oy

    switch (M) {
        case 1:
            if(D >= 1 && D <= 31) console.log(`${D}-yanvar`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break;
        case 2:
            if(D >= 1 && D <= 28) console.log(`${D}-Fevral`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 3:
            if(D >= 1 && D <= 31) console.log(`${D}-Mart`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 4:
            if(D >= 1 && D <= 30) console.log(`${D}-Aprel`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 5:
            if(D >= 1 && D <= 31) console.log(`${D}-May`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 6:
            if(D >= 1 && D <= 30) console.log(`${D}-Iyun`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 7:
            if(D >= 1 && D <= 31) console.log(`${D}-Iyul`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 8:
            if(D >= 1 && D <= 31) console.log(`${D}-Avgust`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 9:
            if(D >= 1 && D <= 30) console.log(`${D}-Sentyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 10:
            if(D >= 1 && D <= 31) console.log(`${D}-Oktyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 11:
            if(D >= 1 && D <= 30) console.log(`${D}-Noyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 12:
            if(D >= 1 && D <= 31) console.log(`${D}-Dekabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        default:
            console.log(`Noto'g'ri qiymay kiritildi`);
            break;
    }
}

{
    //9-masala
    let D = 13 // kun
    let M = 11 // oy

    switch (M) {
        case 1:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-yanvar`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break;
        case 2:
            if(D >= 1 && D <= 28) console.log(`${D += 1}-Fevral`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 3:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-Mart`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 4:
            if(D >= 1 && D <= 30) console.log(`${D += 1}-Aprel`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 5:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-May`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 6:
            if(D >= 1 && D <= 30) console.log(`${D += 1}-Iyun`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 7:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-Iyul`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 8:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-Avgust`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 9:
            if(D >= 1 && D <= 30) console.log(`${D += 1}-Sentyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 10:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-Oktyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 11:
            if(D >= 1 && D <= 30) console.log(`${D += 1}-Noyabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        case 12:
            if(D >= 1 && D <= 31) console.log(`${D += 1}-Dekabr`);
            else console.log(`Noto'g'ri qiymat kiritildi !`);
            break
        default:
            console.log(`Noto'g'ri qiymay kiritildi`);
            break;
    }
}

{
    //10-masala
    let Y = `s` // bu yerda s-"shimmol" j-"janub" q-"sharq" g-"g'arb" qiymatlarini qabul qiladi
    let K = 0 // bu yerda 0-"harakatni davom ettir" 1-"chapga buril" 2-"o'nga buril" qiymatlari qabul qilinadi

    switch (Y) {
        case `s`:
            if(K === 1)console.log("g'arbga burildi");
            else if(K===2)console.log("sharqga burildi");
            else console.log("Harakatda davom etdi");
            break
        case `j`:
            if(K === 1)console.log("sharga burildi");
            else if(K===2)console.log("g'arbga burilldi");
            else console.log("Harakatda davom etdi");
            break;
        case `q`:
            if(K === 1)console.log("shimolga burildi");
            else if(K===2)console.log("janubga burildi");
            else console.log("Harakatda davom etdi");
            break
        case `g`:
            if(K === 1)console.log("janubga burildi");
            else if(K===2)console.log("shimolga burildi");
            else console.log("Harakatda davom etdi");
            break
        default:
            console.log("Not'g'ri qiymat kiritildi");
            break;
    }
}


const fullDay = document.querySelector('#full-day');
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function clock() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth()+1;
    let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();

    let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

    fullDay.textContent = `${day} ${month}, ${year}`;
    hour.textContent = `${hours}`;
    minute.textContent = `${minutes}`;
    second.textContent = `${seconds}`;
}

setInterval(() => {
    clock();
},1000)
