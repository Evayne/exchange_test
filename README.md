# Smoke tests for exchange site
Тестовое задание

## Требования
Наличие Node.js

```
node -v
```

## Начало работы
via `npm`:

```
$ npm install
```

## Запуск всех тестов
```
$ npm run cy:cucumber:open запуск тестов с интерфейсом 
$ npm run cy:cucumber:run запуск тестов в консоли
```

## Генерация отчетов
1 Необходимо сгенерировать базовый mochawesome.json:
```
$ npm run mocha:merge
```
2 Генерируем html:
```
$ npm run mocha:marge
```
3 Отчет смотрим в папке mochawesome-report
