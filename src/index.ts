/**
 * json ignore in javascript
 * @param {없앨 필드 목록을 적습니다.} fields ['필드', '필드']
 * @param {객체를 보냅니다.} obj
 */
export const jsonIgnore = (fields: Array<any>, obj: any) => {
  fields.map((key) => {
    delete obj[key]
  })
  return obj;
}

