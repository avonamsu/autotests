# Тест-кейсы

## Тест-кейс №1: Проверка навигации по страницам документации Playwright с использованием кнопки "Next" 

### Прекондиция 
1. Открытая главная страница https://playwright.dev/

### Шаги
**Шаг 1: Проверить кнопку "Get Started" на главной странице.**  

**Ожидаемый результат:**
1. Кнопка "Get Started" отображается на главной странице.

**Шаг 2: Нажать на кнопку "Get Started" на главной странице**

**Ожидаемый результат:**
1. Осуществляется переход на страницу **Installation** <https://playwright.dev/docs/intro>
2. Заголовок страницы: **"Installation | Playwright"**

**Шаг 3: Нажать на кнопку "Next" на странице Installation.**  

**Ожидаемый результат:**
1. Осуществляется переход на страницу **Writing tests** <https://playwright.dev/docs/writing-tests>
2. Заголовок страницы: **"Writing tests | Playwright"**

**Шаг 4: Нажать на кнопку "Next" на странице Writing tests.**  

**Ожидаемый результат:**
1. Осуществляется переход на страницу **Generating tests** <https://playwright.dev/docs/codegen-intro>
2. Заголовок страницы: **"Generating tests | Playwright"**

**Шаг 5: Нажать на кнопку "Next" на странице Generating tests.**  

**Ожидаемый результат:**
1. Осуществляется переход на страницу **Running and debugging tests** <https://playwright.dev/docs/running-tests>
2. Заголовок страницы: **"Running and debugging tests | Playwright"**

---
## Тест-кейс №2: Модальное окно поиска

### Прекондиция 
1. Открытая главная страница https://playwright.dev/

### Шаги
**Шаг 1: Кликнуть на кнопку "Search"**

**Ожидаемый результат**  
1. Открылось модальное окно поиска
2. Отображается поле поиска
3. Поле поиска пустое
4. Отображается дескрипшен "No resent searches"

**Шаг 2: Ввести текст "test" в поле поиска**

**Ожидаемый результат** 
1. В поле поиска отображается кнопка очистки (Х)
2. Под полем поиска отображается найденный контент
3. Доступна кнопка "See all ... results"

**Шаг 3: В поле поиска нажать на кнопку очистки (Х)**

**Ожидаемый результат** 
1. Поле поиска пустое
2. В поле поиска не отображается кнопка очистки (Х)
3. Отображается дескрипшен "No resent searches"

**Шаг 4: Ввести текст "test" в поле поиска**

**Ожидаемый результат** 
1. В поле поиска отображается кнопка очистки (Х)
2. Под полем поиска отображается найденный контент
3. Доступна кнопка "See all ... results"

**Шаг 5: Кликнуть по кнопке "See all ... results" в модальном окне**

**Ожидаемый результат** 
1. Осуществляется переход на страницу "Search results"

---
## Тест-кейс №3: Переключение темы сайта

### Прекондиция 
1. Открытая главная страница https://playwright.dev/

### Шаги
**Шаг 1: Кликнуть на кнопку переключения стилей (солнце)**

**Ожидаемый результат**  
1. Изменился значок кнопки переключения стилей на луну
2. Основной фон стал темного цвета
3. Основной текст на странице стал белого цвета

**Шаг 2: Кликнуть на кнопку переключения стилей (луну)**

**Ожидаемый результат**  
1. Изменился значок кнопки переключения стилей на солнце
2. Основной фон стал белого цвета
3. Основной текст на странице стал черного цвета

---
## Тест-кейс №4: Проверка ссылок блоков в футере

### Прекондиция 
1. Открытая главная страница https://playwright.dev/

### Шаги
**Шаг 1: Проверить ссылки для блока Learn**

**Ожидаемый результат**  
1. Getting started содержит ссылку https://playwright.dev/docs/intro
2. Playwright Training содержит ссылку https://learn.microsoft.com/en-us/training/modules/build-with-playwright/
3. Learn Videos содержит ссылку https://playwright.dev/community/learn-videos
4. Feature Videos содрежит ссылку https://playwright.dev/community/feature-videos

**Шаг 2: Проверить ссылки для блока Community**

**Ожидаемый результат** 
1. Stack Overflow содержит ссылку https://stackoverflow.com/questions/tagged/playwright
2. Discord содрежит ссылку https://aka.ms/playwright/discord
3. Twitter содержит ссылку https://twitter.com/playwrightweb
4. LinkedIn содержит ссылку https://www.linkedin.com/company/playwrightweb

**Шаг 3: Проверить ссылки для блока More**

**Ожидаемый результат** 
1. GitHub содрежит ссылку https://github.com/microsoft/playwright
2. YouTube содержит ссылку https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg
3. Blog содерижт ссылку https://dev.to/playwright
4. Ambassadors содрежит ссылку https://playwright.dev/community/ambassadors
