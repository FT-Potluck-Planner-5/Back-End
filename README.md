```javascript


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

getAll =[
{
event_id:1,
event_name: George Grad,
event_date: 07/06/20never,
event_time: 1AM,
event_location: Las Vegas,
organizer: Francis,
items = [
{
item_name:cake,
responsible_for: Daniel
},
{
item_name:chicken,
responsible_for: Francis
},
],
guests = [
{username: Francis, confirmation: going},
{username: Daniel, confirmation: going}
]
},
]
```

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

```javascript
[GET]: /api/events

[GET]: /api/events/:id

[GET]: /api/events/user/:user__id

[GET]: /api/events/guests/:user_id

[PUT]: /api/events/:event_id

[PUT]: /api/events/guests/:event_id

[POST]: /api/events
```

### Items:

```javascript
[GET]: /api/items

[GET]: /api/items:id

[POST]: /api/items

```
