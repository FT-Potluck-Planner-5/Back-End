# Authentication

### User register:

#### `[POST]:{ API_URL }/api/auth/register`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string, [required]          |              "user_id": 1,
  "password": string, [required]          |              "username": "user",
}                                         |            }

```

### User login:

#### `[POST]:{ API_URL }/api/auth/login`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string, [required]          |              "message": 'Welcome Back ${username}',
  "password": string, [required]          |              "token": 'random generated token',
                                          |              "user_id": uuid,
}                                         |            }

```
# Events

### Get All Events:

#### `[GET]:{ API_URL }/api/events`

What `response` from database you should be receiving looks like (if you are registered):
```javascript
[
{
  "event_id": integer,
 " event_name": string,
  "event_date": string,
  "event_time": string,
  "event_location": string,
  "organizer": string,
  "items" = [
          {"item_name":string, "responsible_for": username},
          {"item_name":string, "responsible_for": username},
          ],
  "guests" = [
            {"username": string, "confirmation": string},
            {"username": string, "confirmation": string}
            ]
},
]
```
### Get Single Event:

#### `[GET]:{ API_URL }/api/events/:event_id`

What `response` from database you should be receiving looks like:
```javascript
[
    {
        "event_date": string,
        "event_id": integer,
        "event_location": string,
        "event_time": string,
        "event_name": string,
        "organizer": string
    }
]
```
### Get All Guests Within Event:

#### `[GET]:{ API_URL }/api/events/:event_id/guests`

What `response` from database you should be receiving looks like:
```javascript
[
    {
        "event_name": string,
        "response": string,
        "guest": string
    },
    {
        "event_name": string,
        "response": string,
        "guest": string
    }
]
```
### Get All Events the User has Organized:

#### `[GET]:{ API_URL }/api/events/organizer/:user_id`
What `response` from database you should be receiving looks like:
```javascript
[
    {
        "event_date": string,
        "event_id": integer,
        "event_location": string,
        "event_time": string,
        "event_name": string,
        "organizer": string,
        "items": [
            {
                "item_name": string,
                "responsible_for": string
            },
            {
                "item_name": string,
                "responsible_for": string
            }
        ],
        "guests": [
            {
                "username": string,
                "response": string
            },
            {
                "username": string,
                "response": string
            }
        ]
    },
]
```

### Get All Events the User is a Guest of:

#### `[GET]:{ API_URL }/api/events/guest/:user_id`
What `response` from database you should be receiving looks like:
```javascript
[
    {
        "event_date": string,
        "event_id": integer,
        "event_location": string,
        "event_time": string,
        "event_name": string,
        "organizer": string,
        "items": [
            {
                "item_name": string,
                "responsible_for": string
            },
            {
                "item_name": string,
                "responsible_for": string
            }
        ],
        "guests": [
            {
                "username": string,
                "response": string
            },
            {
                "username": string,
                "response": string
            }
        ]
    },
]
```

[GET]: /api/events/guest/:user_id

[PUT]: /api/events/:event_id

[PUT]: /api/events/guests/:event_id


### What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript

[POST]: /api/events
addEvent:
{
  "event_name": string,
  "event_date": string,
  "event_time": string,
  "event_location": string,
  "owner_id": ,
}

response:
{
  "event_id": integer,
  "event_name": string,
  "event_date": string,
  "event_time": string ,
  "event_location": string ,
  "owner_id": string,
}
```

### Items:

```javascript
[GET]: /api/items

[GET]: /api/items:id

[POST]: /api/items

```
