## node js JsonIgnore

스프링의 JsonIgnore 와 같은 일을 합니다.

## 사용법

 - npm install json-ignore

```
const jsonIgnore = require('ignore-field');

const objectToProcess = {
  field1: 'field1',
  field2: 'field2',
  fieldToRemove: 'hihi'
}

const result = jsonIgnore(['fieldToRemove'], objectToProcess);

```
