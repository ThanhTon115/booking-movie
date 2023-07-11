/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const isDifferent = (from: unknown, to: unknown, options?: { unordered?: boolean; pick?: string[] }): boolean => {
  const fromType = typeof from
  const toType = typeof to
  if (fromType !== toType) {
    return true
  }

  if (!from && !to) {
    return false
  }

  if (fromType !== 'object') {
    return from !== to
  }

  if (Array.isArray(from)) {
    if (!Array.isArray(to) || from.length !== to.length) {
      return true
    }

    const fromList = options?.unordered ? [...from].sort() : from
    const toList = options?.unordered ? [...to.sort()] : to
    return fromList.some((f, i) => isDifferent(f, toList[i]))
  }

  // compare native object types
  if (from instanceof Date) {
    if (!(to instanceof Date)) {
      return true
    }
    return from.getTime() !== to.getTime()
  }

  return (options?.pick?.length ? options.pick : Object.keys(from)).some((k) => isDifferent(from[k], to[k]))
}

export const difference = (from: unknown, to: unknown): boolean => isDifferent(from, to)

export const differenceObject = (
  from: Record<string, unknown> | null | undefined,
  to: Record<string, unknown> | null | undefined,
  pick = []
): boolean => isDifferent(from, to, { pick })

export const differenceArray = (
  from: unknown[] | null | undefined,
  to: unknown[] | null | undefined,
  unordered = false
): boolean => isDifferent(from, to, { unordered })

export function distinct<T = unknown>(input: T[]): T[] {
  return input.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc
    }
    return [...acc, item]
  }, [] as T[])
}

export function distinctBy<T = unknown>(input: T[], keyFn: (item: T) => unknown): T[] {
  return input.reduce((acc, item) => {
    if (acc.some((a) => keyFn(a) === keyFn(item))) {
      return acc
    }

    return [...acc, item]
  }, [] as T[])
}

export function merge<T = unknown>(src: T, dest: T): T {
  const srcType = typeof src
  const destType = typeof dest
  if (srcType !== destType || srcType !== 'object' || Array.isArray(dest)) {
    return dest
  }

  return distinct([...Object.keys(src), ...Object.keys(dest)]).reduce((acc, key) => {
    return {
      ...acc,
      [key]: !Object.prototype.hasOwnProperty.call(src, key)
        ? dest[key]
        : !Object.prototype.hasOwnProperty.call(dest, key)
        ? src[key]
        : merge(src[key], dest[key])
    }
  }, {} as T)
}

export function groupBy<T = unknown, K extends string | number | symbol = string>(
  inputs: T[],
  predicate: (item: T) => K
): Record<K, T[]> {
  return (inputs || []).reduce(
    (acc, item) => {
      const key = predicate(item)
      return {
        ...acc,
        [key]: [...(Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : []), item]
      }
    },
    {} as Record<K, T[]>
  )
}

export function replicate<T = unknown>(value: (() => T) | T, quantity: number): T[] {
  if (quantity <= 0) {
    return []
  }

  const result: T[] = []
  for (let i = 0; i < quantity; i++) {
    result.push(typeof value === 'function' ? (value as any)() : value)
  }

  return result
}

export function unique<T = unknown>(inputs: T[]): T[] {
  return inputs.reduce((acc, m) => {
    return acc.some((a) => a === m) ? acc : [...acc, m]
  }, [])
}

export function uniqueBy<T = unknown>(inputs: T[], predicate: (a: T, b: T) => boolean): T[] {
  return inputs.reduce((acc, m) => {
    return acc.some((a) => predicate(a, m)) ? acc : [...acc, m]
  }, [])
}

export function identity<T = unknown>(value: T): boolean {
  return value !== null && value !== undefined
}

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @category Object
 * @param object The source object.
 * @param [predicate=identity] The function invoked per property.
 * @returns Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
export function pickBy<T extends Record<string, any>, S extends T = T>(
  object: T | null | undefined,
  predicate: (value: any) => boolean = identity
): S {
  if (!object) {
    return null
  }

  return Object.keys(object).reduce(
    (acc, key) =>
      predicate(object[key])
        ? {
            ...acc,
            [key]: object[key]
          }
        : acc,
    {}
  ) as S
}

export function mergeArray<T = unknown>(src: T[], dest: T[], predicate: (a: T, b: T) => boolean = identity): T[] {
  if (!src?.length) {
    return dest
  }
  if (!dest?.length) {
    return src
  }

  const [newArray, remain] = src.reduce(
    ([nArr, rs], item) => {
      if (!rs.length) {
        return [[...nArr, item], []]
      }

      const r = rs.find((m) => predicate(m, item))
      if (!r) {
        return [[...nArr, item], rs]
      }

      return [[...nArr, r], rs.filter((m) => !predicate(m, item))]
    },
    [[], dest]
  )

  return newArray.concat(remain)
}

export function minBy<T = unknown>(array: T[], compareFn: (a: T, b: T) => number): T | null {
  if (!array?.length) {
    return null
  }

  return array.reduce(
    (acc, t) => (t === null || t === undefined ? acc : acc === null || compareFn(acc, t) > 0 ? t : acc),
    null
  )
}

export function maxBy<T = unknown>(array: T[], compareFn: (a: T, b: T) => number): T | null {
  if (!array?.length) {
    return null
  }

  return array.reduce(
    (acc, t) => (t === null || t === undefined ? acc : acc === null || compareFn(acc, t) < 0 ? t : acc),
    null
  )
}

export function predicateKeywords<T = Record<string, any>>(
  keywords: string,
  keywordSelector: (item: Record<string, any>) => string = (item) => item.keywords
) {
  return (item: T) => !keywords || keywordSelector(item).includes(keywords.trim().toLowerCase())
}

function buildObjectPkExtractor<T, K extends string | number | symbol = string>(
  selector?: K | ((t: T) => K)
): (t: T) => K {
  return typeof selector === 'function'
    ? selector
    : (o: T) => {
        switch (typeof o) {
          case 'object':
            return (o as any)[selector]
          case 'string':
          case 'number':
            return o
          default:
            return JSON.stringify(o)
        }
      }
}

export function mergeArrayToObject<T>(
  obj: Record<string, T>,
  items: T[],
  selector?: string | ((t: T) => string)
): Record<string, T> {
  if (!items?.length) {
    return obj
  }

  const getPk = buildObjectPkExtractor(selector)

  return {
    ...obj,
    ...items.reduce(
      (acc, m) => ({
        ...acc,
        [getPk(m)]: m
      }),
      {}
    )
  }
}

export function removeArrayFromObject<T>(
  obj: Record<string, T>,
  items: string[] | T[],
  selector?: string | ((t: T) => string)
): Record<string, T> {
  if (!items?.length) {
    return obj
  }

  const getPk = buildObjectPkExtractor(selector)
  const ids: string[] = typeof items[0] === 'object' ? (items as T[]).map(getPk) : (items as string[])

  return Object.keys(obj)
    .filter((k) => !ids.includes(k))
    .reduce(
      (acc, k) => ({
        ...acc,
        [k]: obj[k]
      }),
      {} as Record<string, T>
    )
}

export function appendArrayToObject<T>(
  obj: Record<string, T>,
  items: T[],
  selector?: string | ((t: T) => string)
): Record<string, T> {
  if (!items?.length) {
    return obj
  }

  const getPk = buildObjectPkExtractor(selector)

  return {
    ...items.reduce(
      (acc, m) => ({
        ...acc,
        [getPk(m)]: m
      }),
      {}
    ),
    ...obj
  }
}
