[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15116230)
# 사용자 모델 제작

이번 과제에서는 "사용자 모델 제작" 배웁니다.

이 과제는 4 부분으로 나뉩니다.

1. '데이터 모델의 개선' (17장)
2. '사용자 모델의 구현' (18장)
3. '모델의 생성과 읽기' (19장)
4. '모델의 업데이트와 삭제' (20장)

---

## 1. 데이터 모델의 개선

1. Add validations to the **`Subscriber`** model in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber` 모델에 유효성 검사를 추가합니다.
2. Add instance methods to the `Subscriber` model in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber` 모델에 인스턴스 메서드를 추가합니다.
3. Create a **`Course`** model in `models/Course.js`.<br>
   `models/Course.js`에 `Course` 모델을 생성합니다.
4. Set up associations between the `Subscriber` and `Course` models in `models/Subscriber.js`.<br>
   `models/Subscriber.js`의 `Subscriber`와 `Course` 모델 사이의 연관 관계를 설정합니다.
5. **Seed** the database with _courses_ in `seedCourses.js`.<br>
   `seedCourses.js`에서 데이터베이스에 코스를 씁니다. **(REPL 대신)**
6. **Seed** the database with _subscribers_ in `seedSubscribers.js`.<br>
   `seedSubscribers.js`에서 데이터베이스에 구독자를 씁니다. **(REPL 대신)**
7. <del>Randomly associate subscribers with courses in and populate subscribers' courses.<br>
   구독자를 코스에 무작위로 연결하고 구독자의 코스를 채웁니다. **(나중에)**</del>

---

## 2. 사용자 모델의 구현

1. Build a **`User`** model in `models/User.js` and a add virtual attribute.<br>
   `models/User.js`에 `User` 모델을 생성하고 가상 속성을 추가합니다.
2. **Seed** the database with _users_ in `seedUsers.js`.<br>
   `seedUsers.js`에서 데이터베이스에 사용자를 씁니다. **(REPL 대신)**
3. Associate subscribers with users.<br>
   구독자를 사용자와 연결합니다. **(링크 나중에)**
4. Create a `userController.js` in the `controllers` folder.<br>
   `controllers` 폴더에 `userController.js`를 생성합니다.
5. Create a `users` folder in the `views` folder and add `index.ejs` to it.<br>
   `views` 폴더에 `users` 폴더를 생성하고 `index.ejs`를 추가합니다.

---

## 3. 모델의 생성과 읽기

1. Create functions for `new` and `create` in `controllers/userController.js`.<br>
   `controllers/userController.js`에 `new`와 `create` 함수를 생성합니다.
2. Add `new` and `create` routes for users in `main.js`.<br>
   `main.js`에 사용자의 `new`와 `create` 라우트를 추가합니다.
3. Add a pre('save') hook to the `User` model in `models/User.js`.<br>
   `models/User.js`의 `User` 모델에 `pre('save')` 훅을 추가합니다.
4. Add a `show` route for users in `main.js` using the `:id` parameter.<br>
   `main.js`에 `:id` 매개변수를 사용하여 사용자의 `show` 라우트를 추가하다.
5. Add a `show` route for users in `main.js` using the `:id` parameter. <br>
   `controllers/userController.js`에 함수를 생성합니다.

---

## 4. 모델의 업데이트와 삭제

1. Add `method-override` to your project and require it in `main.js`.<br>
   `method-override`를 프로젝트에 추가하고 `main.js`에서 요구합니다.
2. Add `edit` and `update` routes for users and create functions for them in `controllers/userController.js`.<br>
   `controllers/userController.js`에 사용자의 `edit`와 `update` 라우트를 추가하고 함수를 생성합니다.
3. Add a `delete` route for users and create a function for it in `controllers/userController.js`.<br>
   `controllers/userController.js`에 사용자의 `delete` 라우트를 추가하고 함수를 생성합니다.
4. Update the `show` route for users in `main.js` to include a link to the `edit` and `delete` routes.<br>
   `main.js`의 사용자의 `show` 라우트를 업데이트하여 `edit`와 `delete` 라우트에 대한 링크를 포함합니다.

---

## 과제 파일

These files will need to be updated to complete the assignment. / 이 파일들을 업데이트하여 과제를 완료해야 합니다.

- **6-crud-operations `(16/16)`** _(5월 26일까지)_
  - [lesson-17](./lesson-17) (Seed + associate data)
    - /models/Subscriber.js `(2/2)`
    - /models/Course.js `(2/2)`
  - [lesson-18](./lesson-18) (Users MVC)
    - /models/User.js `(2/2)`
    - /controllers/userController.js `(2/2)`
  - [lesson-19](./lesson-19) (CREATE + READ)
    - /models/User.js `(2/2)`
    - /controllers/userController.js `(2/2)`
  - [lesson-20](./lesson-20) (UPDATE + DELETE)
    - /controllers/userController.js `(2/2)`
    - main.js `(2/2)`

---

## 전체 파일

Any file that needs updated will have a `.TODO` in its extension. After updating the file, remove the `.TODO` from the extension. / 업데이트가 필요한 파일은 확장자에 `.TODO`가 있습니다. 파일을 업데이트한 후 확장자에서 `.TODO`를 제거하십시오.

```
├── main.TODO.js (18과: usersController.indexView 추가, 19과: `new, create, show` 라우트 추가, 20과: `edit` 라우트 추가)
├── package-lock.json
├── package.json
│
├── /controllers
│   ├── errorController.js
│   ├── homeController.js (17과: `courses` 배열 삭제해도 됨)
│   ├── subscribersController.js
│   └── usersController.js (18과: 새로 생성, 19과: `new, create, show` 함수 추가, 20과: `edit, update, delete` 함수 추가)
│
├── /data
│   ├── repl.js (REPL 명령어 - 보기만 해도 됨)
│   ├── seedCourses.js (17과: `node seedCourses.js`로 실행)
│   ├── seedSubscribers.js (17과: `node seedSubscribers.js`로 실행)
│   └── seedUsers.js (18과: `node seedUsers.js`로 실행)
│
├── /models
│   ├── `Course.js` (17과)
│   ├── `Subscriber.js` (17과)
│   └── `User.js` (18과: 새로 생성, 19과: `pre('save')` 훅)
│
├── /public
│   ├── /css
│   ├── /img
│   └── /js
│
├── /views
│   ├── /partials
|   |   ├── _confetti.ejs
|   |   ├── _navigation.ejs (17과: 구독자, 코스, 사용자 목록 링크 추가)
│   │   ├── _footer.ejs
│   │   └── _header.ejs
│   │
│   ├── /users (18과: 새로 생성)
│   │   ├── index.ejs (18과: 새로 생성)
│   │   ├── new.ejs (19과: 새로 생성)
│   │   ├── show.ejs (19과: 새로 생성)
│   │   └── edit.ejs (20과: 새로 생성)
│   │
│   ├── contact.ejs
│   ├── error.ejs
│   ├── index.ejs
│   ├── layout.ejs
│   ├── subscribers.ejs (17과: 구독자 정보 데이터 추가)
│   ├── thanks.ejs
│   └── transportation.ejs
```
