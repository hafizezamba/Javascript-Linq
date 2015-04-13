/**
 * Created by Ugur on 13.4.2015.
 */
"use strict";

$(document).ready(function () {

    var data = { userList: [                                            //data isminde bir nesne oluşturuldu.Nesne içerisine userList adında bir dizi tanımlandı.Dizi nesnelerden oluşmaktadır.
        {
            userInfo: { id: 1, nameSurname: "Ali",                      //Dizideki nesnelere userInfo ve accountInfo olmak üzere 2 adet özellik eklendi.
                age: 45, gender:"Erkek" },
            accountInfo: { debit: 250, credit: 300}
        },
        {
            userInfo: { id: 2, nameSurname: "Veli",
                age: 25, gender:"Erkek" },
            accountInfo: { debit: 200, credit: 100}
        },
        {
            userInfo: { id: 3, nameSurname: "Ahmet",
                age: 35, gender:"Erkek" },
            accountInfo: { debit: 550, credit: 0 }
        },
        {
            userInfo: { id: 4, nameSurname: "Mehmet",
                age: 20, gender:"Erkek" },
            accountInfo: { debit: 0, credit: 400 }
        },
        {
            userInfo: { id: 5, nameSurname: "Ayse",
                age: 40, gender:"Kadin" },
            accountInfo: { debit: 800, credit: 400 }
        },
        {
            userInfo: { id: 6, nameSurname: "Fatma",
                age: 30, gender:"Kadin" },
            accountInfo: { debit: 150, credit: 900 }
        }
    ]};

    var queryResult1 = $.Enumerable.From(data.userList)     //from fonksiyonu ile bir dizi üzerinde linq ifadelerini çalıştırabilmemizi sağlar. Üzerinde çalışmak istenilen dizi fonksiyona parametre olarak
        .Where("x => x.userInfo.age == 30")                 //Where fonksiyonu ile yaşı 30 olan kullanıcıları lsteledik.
        .Select("x => x.userInfo.nameSurname")              //Select fonksiyonu ile isminin seçileceğini bildirdik.
        .ToArray();                                         //ToArray fonksiyonu ile sorgu sonucu diziye çevrildi.

    for (var i = 0; i < queryResult1.length; i++) {         //for döngüsü tanımlandı.i queryRsult dizisinin eleman sayısından küçük olana kadar ; i'yi bir arttır.
        $("body").append(queryResult1[i]);                  //i. indexi yazdır.
        $("body").append("<br>");
    }

    $("body").append("-------------------------------");
    $("body").append("<br>");

    var queryResult2 = $.Enumerable.From(data.userList)
        .Where("x => x.userInfo.id >= 3 && (x.userInfo.gender == 'Erkek' || x.accountInfo.debit > x.accountInfo.credit)")   //id'si 3 den büyük ve cinsiyeti erkek olan veya borcu alacağından çok olan kullanıcaları listeledik.
        .Select("x => x.accountInfo.credit - x.accountInfo.debit")                  //iki değişken birbirinden çıkartılarak tek bir çıktı elde edildi.
        .ToArray();

    for (var i = 0; i < queryResult2.length; i++) {                                 //queryresult2 dizisinin elemanları yazdırıldı.
        $("body").append(queryResult2[i]);
        $("body").append("<br>");
    }

    $("body").append("-------------------------------");
    $("body").append("<br>");

    var queryResult3 = $.Enumerable.From(data.userList)
        .Select("x => { nameSurname: x.userInfo.nameSurname, debit: x.accountInfo.debit }")             //değişkenler nesne haline getirildi
        .ToArray();

    for (var i = 0; i < queryResult3.length; i++) {                                                     //queryresult2 dizisinin elemanları yazdırıldı.
        $("body").append(queryResult3[i].nameSurname);
        $("body").append(", ");
        $("body").append(queryResult3[i].debit);
        $("body").append("<br>");
    }
});

//linq ifadeleri veri grubu üzerinde sorgulama yapmamızı sağlar.