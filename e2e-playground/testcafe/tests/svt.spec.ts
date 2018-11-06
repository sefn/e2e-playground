import { SVTPage } from '../page-objects/svt.po';

const svt = new SVTPage();

fixture `Testa SVT`
    .page `https://www.svt.se`;

    test('Går att navigera till Lokala nyheter för Stockholm', async t => {
        await t
            .click(svt.menyLokalt)
            .click(svt.menyStockholm)
            .expect(svt.menyRubrik.innerText).eql('STOCKHOLM');
    });

    test('Går att söka efter Antikmagasinet i Alla Program', async t => {
        await t
            .click(svt.menyAllaProgram)
            .typeText(svt.allaProgramSök, 'Antikmagasinet')
            .pressKey('enter')
            .expect(svt.allaProgramFörstaResultatet.innerText).eql('Antikmagasinet')
            .click(svt.allaProgramFörstaResultatet)
            .expect(svt.programTitel.innerText).eql('Antikmagasinet');
    });

    test('Huvudrubriken på förstasidan säger att Sverige vunnit VM-guld', async t => {
        await t
            .expect(svt.huvudRubrik.innerText).eql('Sverige vinner VM-guld!');
    });
