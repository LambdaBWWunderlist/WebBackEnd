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
  user_id: INTEGER; // not nullable, references user id that created this item
}
```

## Endpoints

#### Auth

---

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `api/register`   | User registration  |
| POST   | `api/login`      | User login         |

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

| Method | Endpoint              | Description                                        |
| ------ | --------------------- | -------------------------------------------------- |
| POST   | `api/users/:id/items` | Creates a new item for the specified user          |
| GET    | `api/users/:id/items` | Returns a list of all items for the specified user |
| PUT    | `api/items/:id`       | Updates specified item                             |
| DELETE | `api/items/:id`       | Destroys specified item                            |

- Authentication required to access these resources

## Seed Data

#### Users

---

```js
[
  
];
```

#### Items

---

```js
[
  
];
```
