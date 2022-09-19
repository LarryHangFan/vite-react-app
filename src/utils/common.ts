
// 生成随机的16位十六进制的数
export const getRamNumber = (): string => {
  var result = ''; for (var i = 0; i < 16; i++) {
    result += Math.floor(Math.random() * 16).toString(16);//获取0-15并通过toString转16进制 
  } //默认字母小写,手动转大写 
  return result.toUpperCase();
}
/**
 * 
 * @param source 原数据
 * @param cache 是否缓存
 * @returns copy的数据
 */
export const deepClone = (source: any, cache?: any) => {
  if (!cache) {
    cache = new Map()
  }
  if (source instanceof Object) { // 不考虑跨 iframe
    if (cache.get(source)) { return cache.get(source) }
    let result: any
    if (source instanceof Function) {
      if (source.prototype) { // 有 prototype 就是普通函数
        result = function (this: any) {
          return source.apply(this, arguments)
        }
      } else {
        result = (...args: any) => { return source.call(undefined, ...args) }
      }
    } else if (source instanceof Array) {
      result = []
    } else if (source instanceof Date) {
      result = new Date(source as any - 0)
    } else if (source instanceof RegExp) {
      result = new RegExp(source.source, source.flags)
    } else {
      result = {}
    }
    cache.set(source, result)
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = deepClone(source[key], cache)
      }
    }
    return result
  } else {
    return source
  }
}