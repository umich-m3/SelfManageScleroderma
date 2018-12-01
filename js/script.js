jQuery(document).ready(function () {

    // homepage survey CTA logic
    jQuery('#homepage-survey-cta').on('click', function (e) {
        if (window.localStorage.getItem('survey_completed') != 'yes') {
            e.preventDefault();
            window.location = 'https://umich.qualtrics.com/jfe/form/SV_02pGPO1sCNMfHlb';
        }
    });

    if (window.location.href.indexOf('/modules.html') != -1) {
        window.localStorage.setItem('survey_completed', 'yes');
    }

    // scroll body to 0px on click
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 50) {
            jQuery('#back-to-top').fadeIn();
        } else {
            jQuery('#back-to-top').fadeOut();
        }
    });

    jQuery('#back-to-top').click(function () {
        jQuery('#back-to-top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    jQuery('#back-to-top').tooltip('show');

    //toggle class active
    jQuery(".panel-heading").click(function () {
        jQuery(this).toggleClass('active');
    });

    //Expend and collapse all
    jQuery(".accordion-toggle").toggleClass('collapsed');

    jQuery(".toggle-accordion").on("click", function () {
        jQuery(".accordion-toggle").toggleClass('collapsed');
        var accordionId = $(this).attr("accordion-id"),
            numPanelOpen = $(accordionId + ' .collapse.in').length;

        jQuery(this).toggleClass("active");

        if (numPanelOpen == 0) {
            openAllPanels(accordionId);
        } else {
            closeAllPanels(accordionId);
        }
    })

    openAllPanels = function (aId) {
        console.log("setAllPanelOpen");
        jQuery(aId + ' .panel-collapse:not(".in")').collapse('show');
    }
    closeAllPanels = function (aId) {
        console.log("setAllPanelclose");
        jQuery(aId + ' .panel-collapse.in').collapse('hide');
    }

    var fixmeTop = jQuery('.fixme').offset().top;
    jQuery(window).scroll(function () {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            jQuery('.fixme').css({
                position: 'fixed',
                top: '120px',
                width: '265px'
            });
        } else {
            jQuery('.fixme').css({
                position: 'static'
            });
        }
    });

});