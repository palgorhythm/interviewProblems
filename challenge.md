# Bird Take Home Challenge

Create a web server that can handle the following [api](#api) requests.

## P0

- handle API requests
- use Kotlin (or Java)

## P1

- use an underlying database

## P2

- check out (and use) [dagger](https://github.com/google/dagger)

## Models

**BirdState**

```
- IN_RIDE
- IDLE
```

**EventKind**

```
- RIDE_START
- RIDE_END
```

**Event**

```
- id: UUID
- kind: EventKind
- bird_id: UUID
- lat: Float
- lng: Float
- timestamp: Int
```

**Bird**

```
- id: UUID
- lat: Float
- lng: Float
- state: BirdState
- events: List[Event]
```

## API

- [insert event](#insert-event)
- [get birds](#get-birds)
- [get bird](#get-bird)

### insert event

**URL** : `/api/event`

**Method** : `POST`

**Post Body** : `Event`

### Example Request Payload

```json
{
  "id": "905cb84e-d69f-11e9-b057-7b9802c1ecf1",
  "kind": "ride_start",
  "bird_id": "77d010ce-d699-11e9-912d-0783d6ca1a7f",
  "lat": 39.74127,
  "lng": -105.50419,
  "timestamp": 1568431036
}
```

#### Example Response

**Code** : `200 OK`

### get birds

**URL** : `/api/birds`

**Method** : `GET`

**Query Parameters** : `state` (filters birds by `BirdState`)

#### Example Response

**Code** : `200 OK`

**Response Body** :

```json
[
  {
    "id": "77d010ce-d699-11e9-912d-0783d6ca1a7f",
    "lat": 39.74127,
    "lng": -105.50419,
    "state": "in_ride"
  }
]
```

### get bird

**URL** : `/api/bird/${bird_id}` (path param, not query param)

**Method** : `GET`

### Example Response

**Code** : `200 OK`

**Response Body** :

```json
{
  "id": "77d010ce-d699-11e9-912d-0783d6ca1a7f",
  "state": "in_ride",
  "lat": 39.74127,
  "lng": -105.50419,
  "events": [
    {
      "id": "905cb84e-d69f-11e9-b057-7b9802c1ecf1",
      "kind": "ride_start",
      "bird_id": "77d010ce-d699-11e9-912d-0783d6ca1a7f",
      "lat": 39.74127,
      "lng": -105.50419,
      "timestamp": 1568431036
    }
  ]
}
```

## Notes

- `timestamp` is in epoch time.
- you'll need to use the events (and `EventKind`) to transition birds into different `BirdState`s
- don't worry about auth (if you get it for free, great, if not, don't sweat it)
