/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Créer une gallery --------------------------- */

/* ------------------------ Pas d'images dans le HTML ----------------------- */

(function ($) {

    galerie()

    $(document).ready(function () {
        $('.image').on('click', selection)



    })

    function galerie() {
        $.ajax({
            url: "images.json",
            dataType: "json",
            type: "get",
            success: genererImg,
            error: function (err) {
                console.log(err);
                if (err.status == 404) {
                    $('#container').html('<mark> infos non trouvées</mark>')
                }
            }
        })
    }

    /* --------------------- Appel de l'Ajax avec Vanilla JS -------------------- */

    //Vanilla JS AJAX

    // var requete = new XMLHttpRequest;
    // requete.open('GET', 'images.json')
    // requete.onload = function () {
    //     if (requete.status == 200) {
    //         checkDatas(requete.response)
    //     } else {
    //         console.log(requete.status);
    //     }
    // }

    // requete.send();

    // function checkDatas(photos) {
    //     console.log(JSON.parse(photos));
    // }

    /* -------------------------------------------------------------------------- */

    function genererImg(img) {

        for (var i = 0; i < img.length; i++) {
            $('.photo').append('<div class="image"><img src="' + img[i].thumbnail + '" alt="' + img[i].alt + '"></div>');
        }

    };

    function ajoutClass() {
        $(".image").each(function () {
            if ($(this).find('img').attr('alt') == $('.prev img').attr('alt')) {
                $(this).addClass('selection')
                $(this).children().addClass('imageSelection')
            } else {
                $(this).removeClass('selection')
                $(this).children().removeClass('imageSelection')
            }
        })

    }

    function selection() {
        var contenu = $(this).find('img').attr('alt');

        var image = '<a data-fancybox href="photos/' + contenu + '_fullsize.jpg"><img src="photos/' + contenu + '_preview.jpg" alt="' + contenu + '"></a>';

        var legende = '<a data-fancybox href="photos/' + contenu + '_fullsize.jpg" ><i class="fas fa-search-plus"></i>Fullsize</a><p>Ajouter une legende à la photo ' + contenu + '</p>';


        $('.apercu').fadeOut(250, function () {
            $('.prev').html(image);
            $('.info').html(legende);
            $('.apercu').fadeIn(250);
            ajoutClass();
        })


    }



})(jQuery);