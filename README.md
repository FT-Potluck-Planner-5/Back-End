# Authentication

### User register:

#### `[POST]:{ API_URL }/api/auth/register`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string,                     |              "user_id": 1,
  "password": string,                     |              "username": "user",
}                                         |            }

```

### User login:

#### `[POST]:{ API_URL }/api/auth/login`

What fields your `req.body` should have vs. `response` from database you should be receiving:
```javascript
{                                         |            {
  "username": string,                     |              "message": 'Welcome Back ${username}',
  "password": string,                     |              "token": 'random generated token',
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
  event_id: integer,
  event_name: string,
  event_date: string,
  event_time: string,
  event_location: string,
  organizer: uuid,
  items = [
            {item_name:string, responsible_for: username},
          {item_name:string, responsible_for: username},
          ],
  guests = [
            {username: string, confirmation: string},
            {username: string, confirmation: string}
            ]
},
{
  event_id: integer,
  event_name: string,
  event_date: string,
  event_time: string,
  event_location: string,
  organizer: uuid,
  items = [
            {item_name:string, responsible_for: username},
          {item_name:string, responsible_for: username},
          ],
  guests = [
            {username: string, confirmation: string},
            {username: string, confirmation: string}
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
        event_date: string,
        event_id: integer,
        event_location: string,
        event_time: string,
        event_name: string,
        organizer: string
    }
]
```
### Get All Guests Within Event:

#### `[GET]:{ API_URL }/api/events/:event_id/guests`

What `response` from database you should be receiving looks like:
```javascript
[
    {
        event_name: string,
        response: string,
        guest: string
    },
    {
        event_name: string,
        response: string,
        guest: string
    }
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
  event_name: 'required',
  event_date: 'required',
  event_time: 'required',
  event_location: 'required',
  user_id: ,
  items:[
    {item_name: "first item not required"},
    {item_name: "second item not required"},
    {item_name: "third item not required"},
  ]
}

response:
{
  event_id: ,
  event_name: ,
  event_date: ,
  event_time: ,
  event_location: ,
  user_id: ,
}
```

### Items:

```javascript
[GET]: /api/items

[GET]: /api/items:id

[POST]: /api/items

```
