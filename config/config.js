const express = require('express');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const logger = require('morgan');
const fileUpload = require('express-fileupload');


const local = (req, res, next) => {
  if (req.session.uid) {
    res.locals.isAuth = true;
    res.locals.uid = req.session.uid;
    res.locals.isChild = req.session.isChild;
  }
  return next();
};

const sessionConfig = {
  // будем хранить данные сессии в файлах, а не в оперативной памяти
  // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
  store: new FileStore(),
  name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'elbrus_bears', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    // path: '/count'
  },
};

module.exports = function config(app) {
  app.set('view engine', 'hbs');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.env.PWD, 'public')));
  app.use(session(sessionConfig));
  app.use(logger('dev'));
  app.use(local);
  app.use(fileUpload({}));

  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
};