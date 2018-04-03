const _get = (name) => {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

const _set = (name, value, days) => {
  let exp = new Date()
  exp.setTime(exp.getTime() + (days || 2) * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + ';path=/;expires=' + exp.toGMTString()
}

const _remove = (name) => {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let val = _get(name)
  if (val !== null) {
    document.cookie = name + '=' + val + ';path=/;expires=' + exp.toGMTString()
  }
}

export default {
  get: _get,
  set: _set,
  remove: _remove
}
