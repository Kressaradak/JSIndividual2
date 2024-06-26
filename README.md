Индивидуальная работа №2. Занятия по душе для Капитана Смита

1. Инструкции по запуску проекта.
  -Сохранить репозиторий на свой компьютер.
  -При необходимости установить express.js при помощи -npm install express
  -Открыть файл index.html через браузер.
3. Описание работы.
   Индивидуальная работа представляет собой сайт. На сайте каждую минуту обновляется информация о хобби, либо ее можно обновить через F5. Сама работа состоит из нескольких файлов: index.html, index.css, index.js и activity.js. Первые два - файлы страницы, последние два - файлы скриптов, благодаря которым на сайт поступает информация с другого сайта.
4. Документация.
   getRandomActivity() - функция, которая будет делать запрос и получать данные со стороннего ресурса: http://www.boredapi.com/api/activity/.
   updateActivity() - функция, которая обновляет отображение активности на странице.
   updateDataPeriodically() - функция, которая обновляет активность каждую минуту.
5. Пример использования проекта.
   Необходимо открыть файл index.html через браузер, далее отобразится сайт с активностью. Каждую минуту информация будет обновляться, или же через F5.
6. Ответы на контрольные вопросы.
   Функция fetch возвращает объект типа Promise, который представляет асинхронную операцию получения ресурса из сети. Объект Promise представляет результат завершения или отказа асинхронной операции. Он может быть в трех состояниях: ожидание (pending), выполнено (fulfilled) или отклонено (rejected).

   У объекта Promise доступны следующие методы:

    then(onFulfilled, onRejected): Принимает две функции обратного вызова. Первая функция вызывается, когда Promise выполнен успешно (fulfilled), и получает результат выполнения. Вторая функция вызывается, когда Promise отклонен (rejected), и получает причину отказа.
    catch(onRejected): Принимает одну функцию обратного вызова, которая вызывается, если Promise отклонен. Это альтернативный способ обработки отклонения, чем передача функции обратного вызова в метод then для обработки ошибок.
    finally(onFinally): Принимает одну функцию обратного вызова, которая вызывается независимо от того, выполнен или отклонен Promise. Этот метод полезен для выполнения завершающих операций, таких как закрытие ресурсов, независимо от результата Promise.

   Основные различия между использованием async/await и Promise связаны с синтаксисом и уровнем абстракции.

    Синтаксис:
        async/await: Эти ключевые слова позволяют писать асинхронный код так, как если бы он был синхронным. Функции, объявленные с ключевым словом async, возвращают обещание (Promise), а оператор await приостанавливает выполнение функции до тех пор, пока не будет разрешено обещание. Это делает код более читаемым и легким для написания и понимания.
        Promise: Это конструкция языка JavaScript, которая позволяет выполнять асинхронные операции. Она использует цепочки методов then, catch, и finally для управления асинхронными операциями и их результатами.

    Уровень абстракции:
        async/await: Представляют более высокий уровень абстракции, позволяя писать асинхронный код так, как будто это синхронный код. Они делают асинхронные операции более понятными и удобными для использования.
        Promise: Являются низкоуровневым механизмом работы с асинхронным кодом, предоставляющим более гибкий контроль над потоком управления и обработкой ошибок.

    В целом, использование async/await обычно считается предпочтительным, поскольку это делает код более легким для чтения и написания, особенно при выполнении последовательных асинхронных операций. Однако Promise все еще может быть полезным при работе с более сложными сценариями, такими как параллельное выполнение нескольких асинхронных операций или управление потоком управления вручную.
7. Источники
   https://learn.javascript.ru/async-await - async/await
   https://skillbox.ru/media/code/kak-parsit-sayty-i-materialy-smi-s-pomoshchyu-javascript-i-nodejs/ - Парсинг информации с помощью JS и Node.js
