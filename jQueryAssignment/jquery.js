$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');

    //show menu single click
    $menuButton.on('click',() => {
    $navDropdown.show();
    })

    //hide menu when the mouse leaves the menu
    $navDropdown.on('mouseleave',() => {
        $navDropdown.hide();
    });


}


)