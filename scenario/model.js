import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        //Happy Scenario or Normal Case
        this.clickhubungi = Selector('a').withText('Hubungi Kami');
        this.inputNama = Selector('#name');
        this.inputJudul = Selector('#subject');
        this.inputPertanyaan = Selector('#question');
        this.clickChat = Selector('.text-chat');
        this.inputNamaChat = Selector('#name');
       


    }

}