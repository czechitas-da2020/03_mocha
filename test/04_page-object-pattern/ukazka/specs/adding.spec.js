/* ZADANI:
  Ověř, že tlačíko Přidej kočku přidá kartu s kočkou.
  Ověř, že tlačíko Přidej kočku dokáže přidat vícero karet s kočkou.
  Ověř, že tlačíko Odeber kočku odebre jednu kartu s kočkou.
  Ověř, že tlačíko Apokalypsa! smaže všechny karty s kočkou.
  Ověř, že počítadlo koček reaguje na přidání kočky, smazání kočky, smazání všech koček
  Ověř, že lze přidat 20 karet s kočkou.
  Zajisti, aby Tvé testy byly atomické = aby byly na sobě nezávislé, daly se spouštět jednotlivě.
  Ověř, že tlačítka na odebrání jsou aktivní jen, když je zobrazena aspoň jedna karta kočky
  Ověř, že tlačítka na odebrání jsou deaktivována po smazání poslední karty kočky.
*/
const addingPage = require('../pages/adding')

describe('what to test', () => { 
  before(()=>{
    browser.url('https://automation.cervik.repl.co/adding.html')
  })

  it('jde pridat kocku 20x', ()=>{
    for (let i = 0; i < 20; i++) {
      addingPage.buttonAddCat.click()
    }
    expect(addingPage.cats).toBeElementsArrayOfSize(20)
  })
})