# Back-End API for Wunderlist

### https://bw-wunder-list.herokuapp.com

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
}
```

#### Items

---

```js
{
  id: INTEGER; // assigned by database, auto increments
  name: STRING; // not nullable, 128 chars max
  completed: BOOLEAN; // not nullable, defaults to false
  recurring: STRING; // defaults to null, must be null, 'daily', 'weekly' or 'monthly'
  created_at: TIMESTAMP; // defaults to now, server will handle this
  updated_at: TIMESTAMP; // defaults to now, server will handle this
  user_id: INTEGER; // not nullable, references user id that created this item
}
```

## Endpoints

#### Auth

---

| Method | Endpoint         | Description                                              |
| ------ | ---------------- | -------------------------------------------------------- |
| POST   | `api/register`   | User registration. Returns newly created user            |
| POST   | `api/login`      | User login. If successful returns a JSON Web Token (JWT) |

#### Users 

---

| Method | Endpoint        | Description                 |
| ------ | ----------------| --------------------------- |
| GET    | `api/users`     | Returns a list of all users |
| GET    | `api/users/:id` | Return the specified user   |
| PUT    | `api/users/:id` | Updates the specified user  |
| DELETE | `api/users/:id` | Destroys the specified user |

- Authentication required to access these resources

#### Items 

---

| Method | Endpoint             | Description                                                                                  |
| ------ | -------------------- | -------------------------------------------------------------------------------------------- |
| POST   | `api/items`          | Creates a new item for the specified user and returns that item                              |
| GET    | `api/items/:user_id` | Returns a list of all items for the specified user. If no items exist returns an empty array |
| PUT    | `api/items/:id`      | Updates specified item and returns the updated item                                          |
| DELETE | `api/items/:id`      | Destroys specified item and returns the deleted item                                         |

- Authentication required to access these resources

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
    user_id: 1
  },
  {
    name: 'Solve time travel',
    user_id: 1
  },
  {
    name: 'Get the Infinity Stones',
    user_id: 1
  },
  {
    name: '?????',
    user_id: 1
  },
  {
    name: 'Profit',
    user_id: 1
  }
];
```
