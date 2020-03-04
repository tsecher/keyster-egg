import { KeysterEggWord } from "./KeysterEggWord";

/**
 * class KeysterEggManager
 * 
 * Call a callback when user tap a specific keyword on the screen.
 */
export class KeysterEggManager{

    /**
     * Contruct the manager.
     * 
     * @params string type
     *      The type of key trigger
     */
    constructor(type='keydown'){
        // Init the word stock.
        this.words = {
            's': [], // sensitive
            'u': [], // unsensitive
        }

        // Init the callback.
        this._onEventCallback = (evt) => this._onEvent(evt)

        // Init the sentence.
        this._reinitSentence()

        // If the passed type is not allowed, we use the default type.
        const allowedTypes = this.getAllowedTypes()
        this.type = allowedTypes.indexOf(type) > -1 ? type : allowedTypes[0]
    }
    
    /**
     * Add a case sensitive listener on the word.
     * 
     * @param {string} word 
     */
    onCaseSensitive(word){
        const keysterEggWord = this._getKeysterEggWord(word)
        this.words.s.push(keysterEggWord)
        this._launchKeyListener()
        return keysterEggWord;
    }

    /**
     * Add a case unsensitive listener on the word.
     *
     * @param {string} word 
     */
    onCaseUnsensitive(word){
        const keysterEggWord = this._getKeysterEggWord(word)
        this.words.u.push(keysterEggWord)
        this._launchKeyListener()
        return keysterEggWord;
    }

    /**
     * Launch the listener.
     */
    _launchKeyListener(){
        document.removeEventListener(this.type, this._onEventCallback)
        document.addEventListener(this.type, this._onEventCallback)
    }

    /**
     * Return the list of allowed types.
     */
    getAllowedTypes(){
        return ['keydown', 'keyup', 'keypress']
    }

    /**
     * Create and return KeysterEggWord
     *
     * @param {string} word 
     * 
     * @returns {KeysterEggWord}
     */
    _getKeysterEggWord(word){
        return new KeysterEggWord(word);
    }

    /**
     * Look into KeysterEggWords if an event has to be dispatched on word match.
     *
     * @param {*} evt 
     */
    _onEvent(evt){
        this.sentence += evt.key

        this.words.s.map( keysterEggWord => this._testWord(keysterEggWord.word, keysterEggWord, this.sentence))
        this.words.u.map( keysterEggWord => this._testWord(keysterEggWord.word.toLowerCase(), keysterEggWord, this.sentence.toLowerCase()))
    }

    /**
     * Reinit the sentence.
     *
     * @param {string|null} word 
     */
    _reinitSentence(word=''){
        this.sentence = ''
    }

    /**
     * If word is in sentence, then call the success callback of kesterEggWord.
     * @param {string} word 
     * @param {KeysterEggWord} keysterEggWord 
     * @param {string} sentence 
     */
    _testWord(word, keysterEggWord, sentence){
        if (sentence.indexOf(word) > -1 ){            
            keysterEggWord.callThen();
            this._reinitSentence(word)
        }
    }
}