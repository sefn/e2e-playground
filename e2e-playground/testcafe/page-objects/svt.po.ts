import { Selector } from 'testcafe';

export class SVTPage {
    huvudRubrik = Selector('.nyh_teaser__heading');
    menyLokalt = Selector('a').withAttribute('aria-label', 'Visa länkar under Lokalt');
    menyStockholm = Selector('a').withText('Stockholm');
    menyRubrik = Selector('.nyh_section-header__link');
    menyAllaProgram = Selector('a').withAttribute('data-title', 'Alla program');
    allaProgramSök = Selector('.play_search__box');
    allaProgramFörstaResultatet = Selector('.play_search-result__article-header').nth(0);
    programTitel = Selector('#titel');
}
