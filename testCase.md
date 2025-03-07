# Тест-кейсы

#### Тест-кейс №1: Проверка навигации по страницам документации Playwright с использованием кнопки "Next" 

##### Прекондиция 
  - Открытая главная страница https://playwright.dev/

##### Шаги
  **Шаг 1: Проверить кнопку "Get Started" на главной странице.**
  **Ожидаемый результат:**
  - Кнопка "Get Started" отображается на главной странице.

  **Шаг 2: Нажать на кнопку "Get Started" на главной странице**
  - Осуществляется переход на страницу **Installation** <https://playwright.dev/docs/intro>
  - Заголовок страницы: **"Installation | Playwright"**

  **Шаг 3: Нажать на кнопку "Next" на странице Installation.**
  **Ожидаемый результат:**
  - Осуществляется переход на страницу **Writing tests** <https://playwright.dev/docs/writing-tests>
  - Заголовок страницы: **"Writing tests | Playwright"**

  **Шаг 4: Нажать на кнопку "Next" на странице Writing tests.**
  **Ожидаемый результат:**
  - Осуществляется переход на страницу **Generating tests** <https://playwright.dev/docs/codegen-intro>
  - Заголовок страницы: **"Generating tests | Playwright"**

  **Шаг 5: Нажать на кнопку "Next" на странице Generating tests.**
  **Ожидаемый результат:**
  - Осуществляется переход на страницу **Running and debugging tests** <https://playwright.dev/docs/running-tests>
  - Заголовок страницы: **"Running and debugging tests | Playwright"**