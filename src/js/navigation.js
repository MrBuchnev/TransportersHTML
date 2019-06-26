const navElement = '.navigation';
const dropdownButton = '.navigation__button';
const dropdownArrow = '.navigation__arrow';
const dropdownMenu = '.navigation__list';

const navShadowClass = 'navigation--shadow';
const dropdownMenuHiddenClass = 'navigation__list--hidden';
const arrowClass = 'navigation__arrow--flipped';

const onScroll = function () {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShowShadow = currentScrollPosition > 0;

    // failsafe for momentum scrolling on mobile devices
    if (currentScrollPosition < 0) {
        return;
    }

    if (shouldShowShadow) {
        $(navElement).addClass(navShadowClass);
    } else {
        $(navElement).removeClass(navShadowClass);
    }
};

$(dropdownButton).on('click', function () {
    $(dropdownMenu).toggleClass(dropdownMenuHiddenClass);
    $(dropdownArrow).toggleClass(arrowClass);
});


window.addEventListener('scroll', onScroll);
