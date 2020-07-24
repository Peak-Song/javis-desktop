import Store from 'electron-store'

const store = new Store()

store.set('foo.bar', true)
console.log(store.get('foo'))

export default store
