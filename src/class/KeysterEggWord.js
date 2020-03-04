
/**
 * class KeysterEggWord.
 * 
 * We simulate promise with KeysterEggWord to call then function several times.
 */
export default class KeysterEggWord{

    /**
     * Constrcutor.
     *
     * @param {string} word 
     */
    constructor(word){
        this.word = word;
        this.successCallbacks = []
        this.failCallbacks  = []
   }

    /**
    * Adds a success callback.
    * @param {fn} callback 
    */
    then(callback){
        this.successCallbacks.push(callback)
        return this
    }

    /**
     * Adds a fail callback.
     *
     * @param {fn} callback 
     */
    catch(callback){
        this.failCallbacks.push(callback)
        return this
    }

    /**
     * Call All then callbacks.
     */
    callThen(){
        return this.callAll(this.successCallbacks)
    }

    /**
     * Call all catch callbacks.
     */
    callCatch(){
        return this.callAll(this.failCallbacks)
    }

    /**
     * Call a list of callbacks
     * @param {array} callbacks 
     */
    callAll(callbacks){
        callbacks.map( callback => {callback()})
        return this
    }
}
