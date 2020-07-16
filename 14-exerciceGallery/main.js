/* -------------------------------------------------------------------------- */
/*                                   jQuery                                   */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Créer une gallery --------------------------- */

/* ------------------------- les images dans le HTML ------------------------- */

(function ($) {
    $(document).ready(function () {
        $('.image').on('click', selection) // au clic sur les photos


    });

    function ajoutClass() {
        $('.image').each(function () {
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

        var contenu = $(this).find('img').attr('alt')

        var image = '<a href="photos/' + contenu + '_fullsize.jpg"><img src="photos/' + contenu + '_preview.jpg" alt="' + contenu + '"></a>';

        var legende = '<a href="photos/' + contenu + '_fullsize.jpg" target="_blank"><i class="fas fa-search-plus"></i>Fullsize</a><p>Ajouter une legende à la photo ' + contenu + '</p>';

        $('.apercu').fadeOut(250, function () {
            $('.prev').html(image);
            $('.info').html(legende);
            $('.apercu').fadeIn(250);
            ajoutClass();
        })


    }





})(jQuery);