# Back-end

### Heroku BASE_URL: `https://ft-potluck-planner-5.herokuapp.com/`

# Authentication

### User register:

#### `[POST]:{ BASE_URL }/api/auth/register`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string, [required]          |              "user_id": 1,
  "password": string, [required]          |              "username": "user",
}                                         |            }

```

### User login:

#### `[POST]:{ BASE_URL }/api/auth/login`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string, [required]          |              "message": 'Welcome Back ${username}',                           |
  "password": string, [required]          |              "token": 'random generated token',                       |
                                          |              "user_id": uuid,
}                                         |            }

```
# Events

### Get All Events:

#### `[GET]:{ BASE_URL }/api/events`

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

#### `[GET]:{ BASE_URL }/api/events/:event_id`

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

#### `[GET]:{ BASE_URL }/api/events/:event_id/guests`

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

#### `[GET]:{ BASE_URL }/api/events/organizer/:user_id`
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

#### `[GET]:{ BASE_URL }/api/events/guest/:user_id`
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

### Add Event:

#### `[POST]:{ BASE_URL }/api/events`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            [{
  "event_name": string, [required]        |              "event_date": string,
  "event_date": string, [required]        |              "event_id": integer,
  "event_time": string, [required]        |              "event_location": string,
  "event_location": string, [required]    |              "event_time": string,
  "owner_id (user_id)": string [required] |              "organizer": username
}                                         |            }]

```
### Add a Guest:

#### `[POST]:{ BASE_URL }/api/events/:event_id/guests`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            [{
  "event_id": string, [required]        |                event_name 

  "event_time": string, [required]        |              event_time

  "user_id": string [required]            |              user
}                                         |            }]


```
### Edit an Event:

#### `[PUT]:{ BASE_URL }/api/events/:event_id`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "event_name": string, [required]        |              event_name 
  "event_date": string, [required]        |              event_data
  "event_time": string, [required]        |              event_time
  "event_location": string, [required]    |              event_location
  "user_id": string [required]            |              user
}                                         |            }

```
### Edit a Guest:

#### `[PUT]:{ BASE_URL }/api/events/:event_id/guests`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "event_name": string, [required]        |              event_name 
  "event_date": string, [required]        |              event_data
  "event_time": string, [required]        |              event_time
  "event_location": string, [required]    |              event_location
  "user_id": string [required]            |              user
}                                         |            }

```

### Delete an Event:

#### `[DELETE]:{ BASE_URL }/api/events/:event_id`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "event_name": string, [required]        |              event_name 
  "event_date": string, [required]        |              event_data
  "event_time": string, [required]        |              event_time
  "event_location": string, [required]    |              event_location
  "user_id": string [required]            |              user
}                                         |            }

```
### Delete an Item:

#### `[DELETE]:{ BASE_URL }/api/events/:event_id/items`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            [{
  "event_id": integer, [required]         |              "item_name": string,
  "item_name": string, [required]         |              "responsible_for": username
}                                         |            }]
```
### Delete a Guest:

#### `[DELETE]:{ BASE_URL }/api/events/:event_id/guests`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            [{
  "event_id": integer, [required]         |              "item_name": string,
  "item_name": string, [required]         |              "responsible_for": username
}                                         |            }]
```