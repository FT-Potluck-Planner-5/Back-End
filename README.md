register: {
username: admin,
password: password
}

response: {
user\_\_id: ,
username: ,
password: hashed password,
}

login: {
username: ,
password:
}

response: {
message: 'Welcome Back ${username}',
token: 'random generated token'
}

addEvent: {
event_name: ,
event_date: ,
event_time: ,
event_location: ,
user_id: ,
}

response: {
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
food_items = [
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

#### User register:

```javascript
[POST]: /api/auth/register

[POST]: /api/auth/login
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
