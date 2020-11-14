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
  let buttonAdd, cat, cats, buttonApokalypsa, buttonRemove, counter
  before(()=>{
    browser.url('https://automation.cervik.repl.co/adding.html')
    buttonAdd = $('#addItem')
    cat = $('.cat.card')
    cats = $$('.cat.card')
    buttonApokalypsa = $('#removeAll')
    buttonRemove = $('#removeItem')
    counter = $('#counter')
  })
  afterEach(()=>{
    buttonApokalypsa.click()
  })

  it('ověřím, že kliknutím tlačítka Přidej kočku se přidá kočka do seznamu', ()=>{
    buttonAdd.click()
    expect(cat).toBeDisplayed()
  })
  it('ověřím, že multiple kliknutím tlačítka Přidej kočku se přidá kočky do seznamu', ()=>{
    for (let i = 0; i < 5; i++) {
      buttonAdd.click()   
    }
    expect(cats).toBeElementsArrayOfSize(5)
  })

  it('ověř, že kliknutí tlačítka Odeber kočku odebere právě jednu kočku', ()=>{
    buttonAdd.click()
    expect(cats).toBeElementsArrayOfSize(1)
    buttonRemove.click()
  })
  it('ověř, že tlačítko Apokalypsa smaže všechny karty', ()=>{
    for (let i = 0; i < 5; i++) {
      buttonAdd.click()   
    }
    expect(cats).toBeElementsArrayOfSize(5)
    buttonApokalypsa.click()
    expect(cats).toBeElementsArrayOfSize(0)
  })

  describe('Pocitadlo', ()=>{
    it('overim, ze kliknutim na tlaciko Pridej zvedne pocitadlo o 1', ()=>{
      buttonAdd.click()
      expect(counter).toHaveText('1')
    })
    it('overim, ze kliknutim na tlaciko Odeber zmensi pocitadlo o 1', ()=>{
      buttonAdd.click()
      buttonRemove.click()
      expect(counter).toHaveText('0')
    })
    it('overim, ze kliknutim na tlaciko Apokalypsa nastavi hodnotu na 0', ()=>{
      for (let i = 0; i < 5; i++) {
        buttonAdd.click()   
      }
      buttonApokalypsa.click()
      expect(counter).toHaveText('0')
    })
  })
  it('Ověř, že tlačítka na odebrání jsou aktivní jen, když je zobrazena aspoň jedna karta kočky', ()=>{
    buttonAdd.click()
    expect(buttonRemove).not.toHaveElementClass('disabled')
    expect(buttonApokalypsa).not.toHaveElementClass('disabled')
  })
  it('Ověř, že tlačítka na odebrání jsou deaktivována po smazání poslední karty kočky.', ()=>{
    buttonAdd.click()
    buttonRemove.click()
    expect(buttonRemove).toHaveElementClass('disabled')
    expect(buttonApokalypsa).toHaveElementClass('disabled')
  })
})