const getNestedProperty = (data, path, err) => {
    if (path.length > 0) {
        if (data.hasOwnProperty(path[0])) {
          return getNestedProperty(data[path[0]], path.slice(1))
        } else { return err }
    } else { return data }
}

const getNestedPropertyFactory = (splitter) => {
  return function(data, path, err) {
    return getNestedProperty(data, splitter(path), err)
  }
}

export const getNestedByDot = getNestedPropertyFactory(function(s){ return s.split('.') })
export const var getNestedByColon = getNestedPropertyFactory(function(s){ return s.split(':') })
export const var getNestedBySpace = getNestedPropertyFactory(function(s){ return s.split(' ') })
export const var getNestedByArray = getNestedPropertyFactory(function(s){ return s })
