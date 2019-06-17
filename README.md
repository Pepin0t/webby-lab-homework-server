# webby-lab-homework-server

This application is designed to help you find reliable storage for you movies or something else.

View [next repository](https://github.com/Pepin0t/webby-lab-homework-client) to understand what i'm talking about.

## Instruction

Firstly. You need database. In this app uses ModgoDB and you should install and configure it yourself.

How to do this you can find out from the following sources: [MongoDB Installation](https://docs.mongodb.com/manual/installation/) or [Atlas Getting Started](https://docs.atlas.mongodb.com/getting-started/).

Actually all you need is uri address of MongoDB.

You should put it in the `.env` file in root of this app.

```
MONGO_URI=
```
Next. Start application using next command:

```
npm install
npm run dev
```
Access will be available at following address:

```
http://localhost:5001
```

## Requests

#### GET

Return list of films.

```
/api/get-list-of-films
```

#### POST

Add new film to your database.

```
/api/add-film
```

#### DELETE

Delete selected film.

```
/api/delete-film
```
