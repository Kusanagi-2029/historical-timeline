# historical-timeline - Приложение для отрисовки временных отрезков и слайдера

- [Описание проекта](#описание-проекта)
- [Установка и запуск](#установка-и-запуск)
  - [Технологии](#технологии)
  - [Скрипты](#скрипты)
  - [DEMO](#demo)
    - [Видео](#видео)
    - [Изолированность](#изолированность)
    - [Анимация](#анимация)
      - [TimelineContainer](#timelinecontainer)
      - [updateDatesWithAnimation](#updatedateswithanimation)
    - [Прочее](#прочее)
- [Архитектура проекта](#архитектура-проекта)
  - [Структура директорий](#структура-директорий)
  - [Модульная архитектура](#модульная-архитектура)
  - [Container-presenter pattern](#container-presenter-pattern)

## Описание проекта

**historical-timeline** - Приложение для отрисовки временных отрезков и слайдера:
- Реализован следующий блок в соответствии с [макетом figma](https://www.figma.com/design/YXCbNT4Jf9INk62BKTZw1z/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=1-8&node-type=FRAME&t=u5fzHD9avvaJvSZj-0) (Все существующие в макете линии — это не разметочная сетка, а часть верстки).
- Блок содержит информацию о временных отрезках, в каждом из которых существует несколько событий. 
- При переключении временных отрезков изменяются соответствующие числа и под ними показывается новый слайдер, который содержит подробную информацию по ключевым событиям на активном временном отрезке.
- Итого 6 временных отрезков. Все интерактивные точки на окружности располагаются на одинаковом расстоянии друг от друга
- Весь блок сделан независимым от другой логики на странице. 
Например, если добавить на страницу ещё один такой же блок, верстка и логика работы этих блоков не будет нарушена.

## Технологии

● Использованы:

- Typescript
- React.js
- SCSS-стили
- Сборка проекта с помощью Webpack
- Библиотека Swiper - для слайдера
- Для реализации js-анимаций были использованы ts и scss
- Линтер ESLint - для code conventions
- Prettier - для форматирования
- Yarn
- Библиотека react-router-dom - для роутинга
- Библиотека @babel/plugin-proposal-private-property-in-object - для babel и webpack

● Не были использованы:

- JQuery
- Bootstrap, Tailwind и т.п.
- Библиотеки UI-компонентов - MaterialUI, AntDesign и т.п.

## Установка и запуск

Вам понадобится:
1) **Node.js:**
- https://nodejs.org/en
2) **Yarn:**
- https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
или
`npm install --global yarn`

3) Откройте проект и установите зависимости. Запустите приложение:
```bash
yarn install
yarn start
```
Приложение запустится на [http://localhost:3000](http://localhost:3000)

## Скрипты

### `yarn install`

Установка зависимостей:
```bash
yarn install
```

### `yarn start`

```bash
yarn start
```

Приложение запустится на [http://localhost:3000](http://localhost:3000)

### `yarn build`

Запуск локального сервера для запуска билда:
```bash
yarn add -g serve
```

Запуск самого процесса билда:
```bash
yarn build
serve -s build
```

Билд запустится на [http://localhost:3000](http://localhost:3000)

### `yarn test`

Запуск тестов приложения

### `yarn eject`

> [!CAUTION]
> Это неотвратимая операция `eject`!

## DEMO

### Видео

Видео с демо функционала работающего приложения (с условием изолированности логики и вёрстки):
Доступ по ссылке:
- https://youtu.be/NtdkXLZBUVA

### Анимация

В компоненте `TimelineContainer` реализована анимация без использования сторонних библиотек, анимация которая включает в себя:

- Плавное изменение значений дат с помощью функции `updateDatesWithAnimation`.
- Изменение стилей кругов и текстов, связанных с временными отрезками, для визуального обозначения активного периода.
- Взаимодействие с пользователем через обработчики событий, которые добавляют динамику при наведении курсора.

### TimelineContainer

1. **Обновление дат с анимацией**:

   - Функция `updateDatesWithAnimation` вызывается внутри эффекта `useEffect`, когда активный период изменяется. Эта функция отвечает за плавное изменение значений начальной и конечной дат временного отрезка.
   - Анимация осуществляется путем постепенного изменения значений `startDate` и `endDate` от текущих значений до новых значений, полученных из данных о периоде.
   - Каждое обновление значений происходит с интервалом в 20 миллисекунд, что создает эффект анимации.

2. **Изменение стилей элементов**:

   - Внутри `useEffect` происходит изменение стилей для кружков и текстов, связанных с временными отрезками:
     - Кружки, представляющие временные отрезки, изменяют радиус (`r`) в зависимости от того, активен ли соответствующий период. Если период активен, радиус кружка увеличивается до `16`, в противном случае устанавливается в `2`.
     - Тексты, связанные с временными отрезками, изменяют свою непрозрачность (`opacity`) в зависимости от того, активен ли период. Если период активен, непрозрачность текста устанавливается в `1`, в противном случае — в `0`.

3. **Обработчики событий наведения мыши**:
   - Обработчики `handleMouseEnter` и `handleMouseLeave` добавляют дополнительную анимацию при наведении курсора на кружки:
     - При наведении на кружок его радиус увеличивается, а текст становится видимым.
     - При уходе курсора радиус кружка возвращается к исходному значению, а текст становится невидимым.

Да, в функции `updateDatesWithAnimation` реализована анимация изменения дат. Давайте подробно рассмотрим, как работает эта анимация.

### updateDatesWithAnimation

1. **Извлечение года из строки даты**:

   - Вспомогательная функция `parseYear` извлекает год из строки даты. Если строка не является числом, возвращается 0.

2. **Инициализация текущих и целевых значений дат**:

   - Переменные `currentStartYear` и `currentEndYear` хранят текущие значения начальной и конечной дат соответственно.
   - Переменные `targetStartYear` и `targetEndYear` содержат целевые значения начальной и конечной дат.

3. **Установка интервала обновления**:

   - Переменная `updateInterval` устанавливает интервал между обновлениями анимации в миллисекундах.

4. **Запуск интервала анимации**:
   - Функция `setInterval` запускает таймер, который будет вызываться каждые `updateInterval` миллисекунд.
   - Внутри интервала происходит обновление текущих значений дат в зависимости от целевых значений:
     - Если `currentStartYear` не равен `targetStartYear`, он увеличивается или уменьшается на 1 в зависимости от того, меньше или больше текущее значение по сравнению с целевым.
     - Если `currentEndYear` не равен `targetEndYear`, он также увеличивается или уменьшается на 1 в зависимости от соотношения с целевым значением.
     - Функции `setStartDate` и `setEndDate` вызываются для обновления значений начальной и конечной дат соответственно.
   - Когда `currentStartYear` становится равным `targetStartYear` и `currentEndYear` становится равным `targetEndYear`, интервал останавливается с помощью `clearInterval`.

### Прочее

#### Отключение zoom'a при двойном тапе в мобильном устройстве:

`touch-action: manipulation;`

#### Подключение шрифта на примере Bebas Neue:

1. 1-ый способ Подключения шрифта Bebas Neue - в index.html:

 `<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&display=swap" rel="stylesheet">`
 
2. 2-ой способ Подключения шрифта Bebas Neue - через import в CSS-файл напрямую:
   `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&display=swap');`

3. 3-ий способ Подключения шрифта Bebas Neue - через import в CSS/SCSS-файл и подключение его к входной точке проекта - `src/index.js` или `src/App.js`:

   ```scss
   @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&display=swap');
   ```

   ```tsx
   import './shared/styles/fonts.scss';

   // Заменить на путь к файлу стилей
   ```

4. 4-ый способ Подключения шрифта Bebas Neue - импорт из другого css/scss-файла
   Установить файл в проект:
   `afternpm install @fontsource/bebas-neue`

   ```tsx
   import '@fontsource/bebas-neue';

   // Импортировать шрифт в ваш JS/JSX файл
   ```

5. 5-ый способ - прямой импорт из другого CSS|SCSS;
   `@import '/src/shared/styles/fonts.scss';`

   Но должны быть настроены Webpack и tsconfig:

```js
// Пример webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        ...
      },
    ],
  },
};
```

```js
// Пример tsconfig.json
{
  "compilerOptions": {
     ...
    }
  }
}
```

### Изолированность

**Для демонстрации изолированности логики и вёрстки одинаковых блоков компонента был введён компонент страницы `threeBlocksPage`,** на которую можно перейти по кнопке **"На 3 блока"** или по адресу приложения **/3**.

```tsx
/**
 * Компонент страницы с Тремя блоками временных отрезков для демонстрации изолированности их логики и вёрстки
 */
const threeBlocksPage: React.FC = () => {
  const navigate = useNavigate();

  /** Обработчик навигации */
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.threeBlocksPage}>
      <div className={styles.toMainPageButton}>
        <NavButton text="На Главную" onClick={() => handleNavigate('/')} />
      </div>
      <TimelineBlock id="timeline1" />
      <TimelineBlock id="timeline2" />
      <TimelineBlock id="timeline3" />
    </div>
  );
};

export default threeBlocksPage;
```
Ключевым здесь является передача id - так определяется конкретный временной период конкретного блока:
```tsx
  const [activePeriod, setActivePeriod] = useState<number>(() => loadFromStorage(`activePeriod_${id}`) || 1);
```

## Архитектура проекта

### Структура директорий
Структура директорий проекта представлена на следующих скриншотах:

![Архитектура 1](https://github.com/user-attachments/assets/99587901-9711-4c77-912a-ec382a63a038)

![Архитектура 2](https://github.com/user-attachments/assets/39b46730-c218-472f-b111-bdb33d8c3e94)

![Архитектура 3](https://github.com/user-attachments/assets/84ea40e4-00b6-4394-a95d-4a6f3b1b1b9e)

### Модульная архитектура

1. **Функциональная модульность**: Код разбивается на модули, где каждый модуль представляет собой независимую функциональность. Это позволяет легче поддерживать и расширять функционал приложения.
2. **Изоляция компонентов**: Компоненты и функции, относящиеся к определенной функциональной области, сгруппированы вместе. Это помогает избежать путаницы между различными частями кода.
   - **Пример** - Осуществляется инкапсуляция модуля через **`index.ts`** - **_PUBLIC API_**:
       - Внешнее приложение знает о модуле только то, что ему надо знать, принимает только то, что стоит принимать. Не мутирует данные и не имеет к ним доступа извне модуля.
       - Модуль легче тестировать и изменять, а также другие модули легче внедрять в проект/удалять из проекта.
3. **Масштабируемость**: Упрощает добавление нового функционала, так как новые функции добавляются в отдельные модули, не затрагивая существующие.
4. **Упрощенное тестирование**: Модули можно тестировать отдельно, что делает процесс тестирования более управляемым и эффективным.

#### Преимущества подхода

- **Четкая структура**: Позволяет легко ориентироваться в коде и быстро находить нужные компоненты и модули.
- **Модульность**: Облегчает масштабирование и добавление новых функций.
- **Упрощенное тестирование и поддержка**: Каждый модуль можно тестировать и поддерживать отдельно от других.

### Container-presenter pattern
1) Пример - компонент **TimelineContainer (Container)** - имеет свой локальный state и определённую логику, состоит из компонентов, вынесенных в отдельные файлы для лучшего разделения логики и UI.
Таким образом, компонент **TimelineContainer** разделяет логику и UI-часть, делегируя её подробную часть другим компонентам: **TimelinePresenter** и **TimelineDots**:
```tsx
/**
 * Компонент контейнера для шкалы временных отрезков.
 */
...
const TimelineContainer: React.FC<TimelineContainerProps> = ({ activePeriod, timelineData, onPeriodChange }) => {
  const circleRef = useRef<SVGSVGElement>(null);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const textRefs = useRef<(SVGTextElement | null)[]>([]);
//... Локальное состояние компонента-контейнера
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useDeviceDetect();
  const [startDate, setStartDate] = useState<string>('2000');
  const [endDate, setEndDate] = useState<string>('2000');
//...
  /**
   * Обработчик события наведения мыши на кружочка.
   */
  const handleMouseEnter = (index: number) => {
    if (index + 1 !== activePeriod) {
      setHoveredIndex(index);
      if (circleRefs.current[index]) {
        circleRefs.current[index].setAttribute('r', '16');
      }
      if (textRefs.current[index]) {
        textRefs.current[index].style.opacity = '1';
      }
    }
  };
//... Делегирование отрисовки UI и передача логики через props дочерним компонентам
  return (
    <TimelinePresenter
      periodData={periodData}
      startDate={startDate}
      endDate={endDate}
      isMobile={isMobile}
      circleRef={circleRef}
    >
      <TimelineDots
        totalPeriods={timelineData.length}
        activePeriod={activePeriod}
        hoveredIndex={hoveredIndex}
        onPeriodChange={onPeriodChange}
        circleRefs={circleRefs}
        textRefs={textRefs}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isMobile={isMobile}
      />
    </TimelinePresenter>
  );
};
//... 
```
2) В свою очередь, компонент **TimelinePresenter (presenter)** принимает данные от **TimelineContainer (Container)** через пропсы и возвращает блок из общих переиспользуемых UI-компонентов:
```tsx
//...
/**
 * Компонент для отображения шкалы временных отрезков.
 */
const TimelinePresenter: React.FC<TimelinePresenterProps> = ({
  periodData,
  startDate,
  endDate,
  isMobile,
  circleRef,
  children,
}) => {
  return (
    <div className={!isMobile ? styles.timeline : styles.timelineMobile}>
      <ThemeDisplay
        theme={periodData.theme}
        isMobile={isMobile}
        themeContainerDesktop={styles.themeContainer}
        themeContainerMobile={styles.themeContainerMobile}
      />
      <DateDisplayTimeline
        startDate={startDate}
        endDate={endDate}
        isMobile={isMobile}
        classNameContainerDesktop={styles.dateContainer}
        classNameContainerMobile={styles.dateContainerMobile}
        classNameStartDateDesktop={styles.startDate}
        classNameStartDateMobile={styles.startDateMobile}
        classNameEndDate={styles.endDate}
        classNameEndDateMobile={styles.endDateMobile}
      />
      <div className={!isMobile ? styles.center : styles.centerMobile}>
        {!isMobile && (
          <svg width="400" height="400" viewBox="-200 -200 400 400" ref={circleRef}>
            <circle r="160" fill="none" stroke="#ccc" strokeWidth="1" />
            {children} {/* Отображаем TimelineDots здесь */}
          </svg>
        )}
        {isMobile && <div className={styles.mobileDotsContainer}>{children}</div>}
      </div>
    </div>
  );
};
//...
```
3) Самый общий shared UI-компонент отображения темы представлен в виде атомарного(неделимого) компонента, который, в свою очередь, является **(presenter)** для компонента **TimelinePresenter**, выступающим в качестве **Container** относительно данного **ThemeDisplay**, принимающим значения и функцию в виде пропсов:
```tsx
//...
const ThemeDisplay: React.FC<ThemeDisplayProps> = ({
  theme,
  isMobile,
  themeContainerDesktop,
  themeContainerMobile,
}) => {
  return <h2 className={!isMobile ? themeContainerDesktop : themeContainerMobile}>{theme || 'Нет темы'}</h2>;
};
//...
```

Таким образом, понижается **Coupling (зацепление, зависимость одних модулей/компонент/функций/т.п. от других)** и повышается **Cohesion (связанность, способность модулей/компонент/функций/т.п. выполнять одну и ту же задачу/функцию)**.

_P.s. Стараются понижать **Coupling** и повышать **Cohesion**._

![image](https://github.com/user-attachments/assets/5bd87fb3-be35-4311-abb3-faf79d47194a)

> [!TIP]
> Этот подход обеспечивает хорошую организацию и гибкость для масштабирования проекта, делая его более устойчивым к изменениям и лёгким для поддержки.
