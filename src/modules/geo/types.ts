export type GeoPoint = { type: 'Point'; coordinates: [number, number] }
export type GeoLineString = {
  type: 'LineString'
  coordinates: [[number, number], [number, number]]
}
export type GeoMultiPoint = {
  type: 'MultiPoint'
  coordinates: Array<[number, number]>
}

export type GeoPolygon = {
  type: 'Polygon'
  coordinates: Array<Array<[number, number]>>
}

export type GeoMultiLineString = {
  type: 'MultiLineString'
  coordinates: Array<[[number, number], [number, number]]>
}

export type GeoMultiPolygon = {
  type: 'MultiPolygon'
  coordinates: Array<Array<Array<[number, number]>>>
}

export type GeoJSON = GeoPoint | GeoLineString | GeoMultiPoint | GeoPolygon | GeoMultiLineString | GeoMultiPolygon

export type GeometryCollection = {
  type: 'GeometryCollection'
  geometries: Array<GeoJSON>
}

export type Address = {
  id?: string
  street?: string
  country_code?: string
  district_code?: string
  district_name?: string
  postal_code?: string
  province_code?: string
  province_name?: string
  type?: string
  village_code?: string
  village_name?: string
  ward_code?: string
  ward_name?: string
  position?: GeoPoint
}

export type LatLng = {
  lat: number
  lng: number
}
