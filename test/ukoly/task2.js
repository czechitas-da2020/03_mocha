
describe('03 Elements', () => {
    //rozdel tenhle test-case do samostatnych test-casu. 
    // co testcase, to assertion (expect)
    before(()=>{
        browser.url('https://automation.cervik.repl.co/selectors.html');
    })

    beforeEach(()=>{
        console.log('AKTUALNI CAS: ' + new Date())
    })


    it('test mimo pohadku', ()=>{
        let giveLikeButton = browser.$('#like-button')      // najdi tlacitko "Dej like!" na konci pohadky
        let likeCounter = browser.$('#lvlAwesome')          // najdi pocitadlo pod pohadkou
        
        //scrollIntoView zname - scrollni dolu, at vidis, co se deje
        likeCounter.scrollIntoView()
        for(let i= 0; i < 10; i = i +1) {
            // element, ktery jsme nasli na radku 12 a ted na nej klikame
            giveLikeButton.click()
            browser.pause(500)
        }

        expect(likeCounter).toHaveText('10') // overi, ze pocitadlo ukazuje spravnou hodnotu - 10
    })

    describe('fairytale', ()=>{
        it('test1', () => {
            // jdi na adresu
            let headerOfStory = browser.$('#pohadka h2')            // najdi nadpis pohadky O Budulinkovi
            expect(headerOfStory).toHaveText('O Budulínkovi')       // overi se, ze element v promenne headerOfStory ma dany text
        });
    
        it('test2', ()=>{
            let paragraphsOfStory = browser.$$('#pohadka p')        // najdi vsechny paragraphs pohadky O Budulinkovi
            expect(paragraphsOfStory).toBeElementsArrayOfSize(16)   // overi, ze pocet elementu v poli se rovna 16
        })
        it('test3', ()=>{
            let foxsInStory = browser.$('p*=lištičky')              // najdi paragraph, kde se vyskytuje slovo "lištičky"
            expect(foxsInStory).toHaveTextContaining('lištičky')    // overi, ze v danem elementu jsou opravdu lištičky
        })
        it('test4', ()=>{
            let imageOfStory = browser.$('#pohadka img')        // najdi ilustraci v pohadce o budulinkovi
            expect(imageOfStory).toHaveAttribute('src', 'https://automation.cervik.repl.co/images/budulinek.jpg')
        })
    })
})
