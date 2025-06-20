---

## 📚 BookShelf API

A simple RESTful API for managing a list of books, built with [NestJS](https://nestjs.com/) and [Prisma](https://www.prisma.io/). It allows users to **create**, **view**, **update**, and **delete** books from a connected database.

---

### 🚀 Features

| Feature             | Endpoint     | Method |
| ------------------- | ------------ | ------ |
| Create a new book   | `/bookshelf`     | POST   |
| Get all books       | `/bookshelf`     | GET    |
| Get a book by ID    | `/bookshelf/:id` | GET    |
| Update a book by ID | `/bookshelf/:id` | PATCH  |
| Delete a book by ID | `/bookshelf/:id` | DELETE |

---

### 🧱 Technologies Used

* **NestJS** – Backend framework
* **Prisma ORM** – Database access
* **PostgreSQL** – Database (can be swapped for MySQL, SQLite, etc.)
* **Class-validator** – DTO validation
* **Thunder Client** – API testing

---

### ⚙️ Installation & Setup

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookshelf-api.git
cd bookshelf-api
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Set up the database

Create a `.env` file and add your database URL:

```env
DATABASE_URL="postgresql://your_user:your_password@your_host:5432/your_db?sslmode=require"
```

Then run:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

#### 4. Run the development server

```bash
npm run start:dev
```

Visit: [http://localhost:3000/bookshelf](http://localhost:3000/bookshelf)

---

### 📬 Example API Requests

#### Create a Book (POST)

```http
POST /bookshelf
Content-Type: application/json

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": "2018",
  "description": "A guide to building good habits."
}
```

#### Get All Books (GET)

```http
GET /bookshelf
```

#### Get Book by ID (GET)

```http
GET /bookshelf/1
```

#### Update a Book (PATCH)

```http
PATCH /bookshelf/1
Content-Type: application/json

{
  "title": "Updated Title"
}
```

#### Delete a Book (DELETE)

```http
DELETE /bookshelf/1
```

---

### 📌 Project Structure

```
src/
├── bookshelf/
│   ├── bookshelf.controller.ts
│   ├── bookshelf.service.ts
│   ├── bookshelf.module.ts
├── prisma/
│   ├── prisma.service.ts
|   ├── prisma.module.ts
├── app.module.ts
├── main.ts
```

---

### 🧠 Lessons Learned

* Learned how to structure a NestJS project using **modules, controllers, and services**.
* Implemented **Prisma ORM** for database access.
* Applied **DTO validation** using `class-validator`.
* Handled errors using **NestJS exception filters** like `NotFoundException`.

---

### 🐞 Troubleshooting

* ❌ Prisma error: `@prisma/client did not initialize`
  ✅ Solution: Run `npx prisma generate` again.

* ❌ Database connection issue
  ✅ Check `.env` file and make sure your database is running.

* ❌ Thunder Client not connecting
  ✅ Make sure NestJS server is running (`npm run start:dev`) and you're using the correct port.

---

### 🧪 Testing Tools

* Thunder Client (VSCode Extension)
* Postman (optional)
* Prisma Studio: `npx prisma studio`

---

### 📖 License

This project is for learning and practice purposes.

---

