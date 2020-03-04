# keyster-egg

Add tools to play a callback when user tap a specific word.


## Install
npm i keyster-egg

## How to : 
Example : 
```
import { KeysterEgg } from "keyster-egg";

const word = 'Yeah!'
KeysterEgg.onCaseSensitive(word).then( () => { alert("You tapped : " + word) });
```

## Methods
### onCaseSensitive
The check is case sensitive, so if user tap "yeah!" instade of "Yeah!", no callback will be played.

```
import { KeysterEgg } from "keyster-egg";

const word = 'Yeah!'
KeysterEgg.onCaseSensitive(word).then( () => { alert("You tapped : " + word) });
```

### onCaseUnsensitive
The check is case unsensitive, so if user tap "yeah!" instade of "Yeah!", a callback will be played.
```
import { KeysterEgg } from "keyster-egg";

const word = 'Yeah!'
KeysterEgg.onCaseUnsensitive(word).then( () => { alert("You tapped : " + word) });
```
