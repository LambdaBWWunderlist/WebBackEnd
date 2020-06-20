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
}
```

#### Items

---

```js
{
  id: INTEGER; // assigned by database, auto increments

}
```

## Endpoints

#### Auth

---

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `api/register`   | User registration  |
| POST   | `api/login`      | User login         |

#### Items 

---

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `api/`           | Resource details   |
| GET    | `api/`           | Resource details   |
| PUT    | `api/`           | Resource details   |
| DELETE | `api/`           | Resource details   |

- Authentication required to access these resources

## Seed Data

#### Users

---

```js
[
  
];
```
