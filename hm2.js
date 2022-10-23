const names = document.getElementById('namepet');
const nameOw = document.getElementById('Name');
const adress = document.getElementById('contact');
const breeds = document.getElementById('breed');
const comments = document.getElementById('comment');

const btn = document.querySelector('button');

class Cat {
    constructor(namePet, nameOwner, contact, breed, typeEat, gender, comment) {
        this.namePet = namePet;
        this.nameOwner = nameOwner;
        this.contact = contact;
        this.breed = breed;
        this.typeEat = typeEat;
        this.gender = gender;
        this.comment = comment;
    }
    list() {
        console.log(cats)
    }

}


let cats = new Cat()
cats.list()


btn.onclick = function () {
    cats.namePet = names.value;
    cats.nameOwner = nameOw.value;
    cats.contact = adress.value;
    cats.breed = breeds.value;
    cats.typeEat = function checkCheckbox() {
        let eat1 = document.getElementById('eatPet1');
        let eat2 = document.getElementById('eatPet2');
        let eat3 = document.getElementById('eatPet3');
        let eat4 = document.getElementById('eatPet4');
        if (eat1.checked == true) { return eat1.value }
        else if (eat2.checked == true) { return eat2.value }
        else if (eat3.checked == true) { return eat3.value }
        else if (eat4.checked == true) { return eat4.value }
        else {
            retun = "*Please mark any of checkbox";
        }
    }
    cats.gender = function radio() {
        if (document.getElementById('girl').checked) {
            girls = document.getElementById('girl').value;
            return girls;
        }
        else if (document.getElementById('boy').checked) {
            boys = document.getElementById('boy').value;
            return boys;
        }
        else {
            retun = "Выберите пол питомца";
        }
    }
    cats.comment = comments.value;
}

/* */
