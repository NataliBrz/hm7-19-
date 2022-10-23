/*class Validation {
    static CheckEmpty(collection) {
        let isEmpty = false;
        for (let input of collection) {
            if (input.value == '')
                isEmpty = true;
        }
        return isEmpty;
    }
}

if (Validation.CheckEmpty(document.getElementsByName('test'))) {
    console.log('Есть пустой элемент')
}
*/

const dom = document.getElementById('link');
const btn = document.querySelector('button');

class Validation {
    constructor(email, url, date, number) {
        this.email = email;
        this.url = url;
        this.date = date;
        this.number = number;
    }

    isDomain() {
        console.log(domain)
    }
}

let domain = new Validation()
domain.isDomain()

btn.onclick = function checkDom() {
    domain.url = function () {
        the_domain = dom.value;
        var reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
        if (reg.test(the_domain) == false) {
            alert("Please Enter a Valid Domain Name");
            return false;
        }
    }
}



/*function validateDomain(the_domain) {

    the_domain = the_domain.replace("http://", "");
    the_domain = the_domain.replace("www.", "");

    var reg = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return reg.test(the_domain);
} */
