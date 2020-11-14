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

describe('Automation page Adding', () => { 
  before(()=>{
    browser.url('https://automation.cervik.repl.co/adding.html')
  })

  it('ověřím, že kliknutím tlačítka Přidej kočku se přidá kočka do seznamu', ()=>{})
  it('ověřím, že multiple kliknutím tlačítka Přidej kočku se přidá kočky do seznamu')
  it('ověř, že kliknutí tlačítka Odeber kočku odebere právě jednu kočku')
  it('ověř, že tlačítko Apokalypsa smaže všechny karty')
  it('Ověř, že počítadlo koček reaguje na přidání kočky, smazání kočky, smazání všech koček')
  it('Ověř, že tlačítka na odebrání jsou aktivní jen, když je zobrazena aspoň jedna karta kočky')
  it('Ověř, že tlačítka na odebrání jsou deaktivována po smazání poslední karty kočky.')
})