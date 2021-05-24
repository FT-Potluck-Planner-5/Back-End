#### User register:

[post]: `/api/auth/register`

```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "user_id": 1,
  "password": string,                     |              "username": "user",
}                                         |            }

```

#### User login:

[post]: `/api/auth/login`

```javascript
Body:                                     |            Response:
{                                         |            {
  "username": string,                     |              "message": 'Welcome Back ${username}',
  "password": string,                     |              "token": 'random generated token',
                                          |              "user_id": uuid,
}                                         |            }

```

### Events:

[GET]:` /api/events`

```javascript
Response:
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

```javascript
[GET]: /api/events/:id

[GET]: /api/events/user/:user__id

[GET]: /api/events/guests/:user_id

[PUT]: /api/events/:event_id

[PUT]: /api/events/guests/:event_id
```

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
