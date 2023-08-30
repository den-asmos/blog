Области хранения данных:

- БД на json-server
- BFF (эмулятор)
- redux store

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего), redux store (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), redux store (использование на клиенте)
- статья: БД (список статей), redux store (отображение в браузере)
- комментарий: БД (список комментариев), redux store (отображение в браузере)

Таблицы БД:

- users: id, login, password, registered_at, role_id
- roles: id, name
- posts: id, title, image_url, content, published_at
- comments: id, author_id, post_id, content

Схема состояния на BFF:

- сессия текущего пользователя: login, password, role

Схема для Redux store (на клиенте):

- user: id, login, roleId, session
- users:
  массив user: id, login, registeredAt, role
- posts:
  массив post: id, title, imageUrl, publishedAt, commentsCount
- post: id, title, imageUrl, publishedAt, content,
  comments: массив comment: id, author, content, publishedAt
