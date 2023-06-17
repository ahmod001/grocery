// Set Session Storage Function //
export const handleSessionStorage = (action, key, target) => {
    // Set to SessionStorage
    if (action === 'set') {
        sessionStorage.setItem('grocery_' + key, JSON.stringify(target))
    }
    // Get from SessionStorage
    else if (action === 'get') {
        return JSON.parse(sessionStorage.getItem('grocery_' + key))
    }
    // Remove From SessionStorage
    else if (action === 'remove') {
        sessionStorage.removeItem('grocery_' + key)
    }
}