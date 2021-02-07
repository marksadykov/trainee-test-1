[![GitHub Actions Status](https://github.com/marksadykov/trainee-test-1/workflows/test/badge.svg)](https://github.com/marksadykov/trainee-test-1/actions)

#### Запуск приложения:
 - npm install
 - npm start (запустится Storybook)

#### Общая цель:
Замаскировать html-фрагмент, чтобы его нельзя было идентифицировать с помощью XPath или регулярных выражений (поэтому классы у элементов генерируются динамически при каждой отрисовки). 

#### Нужно сделать:
 1. Обновить компонент **src/components/base/Image.tsx** таким образом, чтобы он отрисовывал изображение с помощью тега div (с class="..."), а не img;
 2. Обновить компонент **src/components/base/SmokeText.tsx** таким образом, чтобы он динамически маскировал выдаваемую строку (обезопасить от возможности найти блок с помощью XPath или регулярного выражения при следующей перерисовки);
 3. Написать тесты на алгоритм, который реализует функциональность в **src/components/base/SmokeText.tsx**;

Примеры XPath и регулярных выражений, от которых необходимо защититься, можно увидеть в **.storybook/components/RenderComponent.tsx**.
