import myJson from './user.json' assert {type: 'json'};
var jsonString = JSON.stringify(myJson);
var obj = JSON.parse(jsonString);
console.log(obj)



for (const elem of obj) {
    const box = document.createElement("div");
    box.className="box";
    for (var key in elem) {
        if (typeof elem[key] == 'object' && elem[key] != null) {
            for (var key2 in elem[key]) {
                var p = document.createElement('p');
                p.textContent = key2 + ":  " + elem[key][key2];
                p.className=key2;
                box.appendChild(p);
            }

        }
        else {
            var p = document.createElement('p');
            p.textContent =key + ":   " + elem[key];
            p.className=key;
            box.appendChild(p)
        }
    }
    document.body.appendChild(box);
}

function myFunction() {
    var checkBox = document.getElementById("accept");
    var box =document.getElementsByClassName("box");
    if (checkBox.checked == true) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}