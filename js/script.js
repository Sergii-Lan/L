
$(function () {
    /**call my plagin(carousel)*/
    $('div.wrapper').carousel();


    /**Шаблонизатор*/

    var html = $('#resume').html();

    var data = {
        name: 'Лановий Сергій Сергійович',
        education: 'Закінчив ДАЖКГ у 2011р. Спеціальність: менеджмент організацій.',
        causes: 'Хочу вивчити фронтенд оскільки:',
        contacts: 'Мої контакти:',
        mob: '0667777777',
        email: 'ndmd@gmail.com',
        vk: 'Мій профіль вконтакті:',
        myvk: 'https://new.vk.com/id9717360',
        interests: 'Інтереси:',
        myInterest: 'IT',
        whyIt: 'Актуальний і перспективний напрямок діяльності'
    };

    var content = tmpl(html, data);

    $('body').append(content);
});






