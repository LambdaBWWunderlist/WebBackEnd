# NODE.js Back-End API for Wunderlist

### https://wunderlist-node.herokuapp.com/

## Schema

#### Users

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  username: STRING; // not nullable, unique - 128 chars max
  password: STRING; // not nullable - 256 chars max
  email: STRING; // not nullable, unique - 128 chars max
  created_at: TIMESTAMP; // defaults to now, server will handle this
  updated_at: TIMESTAMP; // defaults to now, server will handle this
}
```

#### Items

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  name: STRING; // not nullable, 128 chars max
  body: TEXT; // nullable
  completed: BOOLEAN; // not nullable, defaults to false
  recurring: STRING; // defaults to null, must be null, 'daily', 'weekly' or 'monthly'
  due_date: TIMESTAMP; // nullable, timestamp format: 'YYYY-MM-DD HH:MM:SS' (UTC)
  created_at: TIMESTAMP; // defaults to now, server will handle this
  updated_at: TIMESTAMP; // defaults to now, server will handle this
  user_id: INTEGER; // not nullable, references user id that created this item
}
```

#### Deleted Items

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  name: STRING; // not nullable, 128 chars max
  body: TEXT; // nullable
  completed: BOOLEAN; // not nullable, defaults to false
  recurring: STRING; // defaults to null, must be null, 'daily', 'weekly' or 'monthly'
  due_date: TIMESTAMP; // nullable, timestamp format: 'YYYY-MM-DD HH:MM:SS' (UTC)
  created_at: TIMESTAMP; // reference to creation date in items table
  deleted_at: TIMESTAMP; // creation date on the deleted items table, defaults to now, server will handle this
  user_id: INTEGER; // not nullable, references user id that created this item
}
```

## Endpoints

#### Auth

- No Authentication required
---

| Method | Endpoint         | Description                                              |
| ------ | ---------------- | -------------------------------------------------------- |
| POST   | `api/register`   | User registration. Returns newly created user            |
| POST   | `api/login`      | User login. If successful returns a JSON Web Token (JWT) |

#### Users 

- Authentication required to access these resources
---

| Method | Endpoint        | Description                                              |
| ------ | ----------------| -------------------------------------------------------- |
| GET    | `api/users`     | Returns a list of all users                              |
| GET    | `api/users/:id` | Return the specified user                                |
| PUT    | `api/users/:id` | Updates the specified user and returns the updated user  |
| DELETE | `api/users/:id` | Destroys the specified user and returns the deleted user |



#### Items 

- Authentication required to access these resources
---

| Method | Endpoint             | Description                                                                                  |
| ------ | -------------------- | -------------------------------------------------------------------------------------------- |
| POST   | `api/items`          | Creates a new item for the specified user and returns that item                              |
| GET    | `api/items/:user_id` | Returns a list of all items for the specified user. If no items exist returns an empty array |
| PUT    | `api/items/:id`      | Updates specified item and returns the updated item                                          |
| DELETE | `api/items/:id`      | Destroys specified item and returns the deleted item                                         |


#### Deleted Items 

- Authentication required to access these resources
---

| Method | Endpoint               | Description                                                                                          |
| ------ | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| POST   | `api/deleted/:id`      | Sending { undelete: "recover" } will copy record to the items table. Destroys deleted item           |
| GET    | `api/deleted/:user_id` | Returns a list of all deleted items for the specified user. If no items exist returns an empty array |
| DELETE | `api/deleted/:id`      | Destroys specified item and returns the deleted item                                                 |


## Seed Data

#### Users

---

```js
[
  {
    username: 'ironman',
    password: 'iam!ronman',
    email: 'tony.stark@starkindustries.net'
  },
  {
    username: 'the_hitman',
    password: 'sharpshooter',
    email: 'bret.hart@wrestling-legends.com'
  },
  {
    username: 'dieHard',
    password: 'yippeekiyay',
    email: 'john.mcclane@nypd.gov'
  },
  {
    username: 'demperor',
    password: 'warhammer40k',
    email: 'liam@deploymentzone.tv'
  },
  {
    username: 'starlord',
    password: 'gamora',
    email: 'pquill@guardian.net'
  }
];
```

#### Items

---

```js
[
  {
    name: 'Assemble the avengers',
    due_date: '2020-06-30 12:00:00',
    user_id: 1
  },
  {
    name: 'Become Heavy weight Champ',
    due_date: '2020-06-30 12:00:00',
    user_id: 2
  },
  {
    name: 'Solve time travel',
    due_date: '2020-06-30 12:00:00',
    user_id: 1
  },
  {
    name: 'Win Royale Rumble',
    due_date: '2020-06-30 12:00:00',
    user_id: 2
  },
  {
    name: 'Get the Infinity Stones',
    due_date: '2020-06-30 12:00:00',
    user_id: 1
  },
  {
    name: '?????',
    due_date: '2020-06-30 12:00:00',
    user_id: 1
  },
  {
    name: 'Profit',
    due_date: '2020-06-30 12:00:00',
    user_id: 1
  }
];
```
