const addingPage = {
  get buttonAddCat() { return $('#addItem') },
  get buttonRemoveOne() { return $('#removeItem') },
  get buttonRemoveAll() { return $('#removeAll') },
  get cats() { return $$('.cat') },
}

module.exports = addingPage