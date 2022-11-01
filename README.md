Алексей Постников, 47 лет, junior-программист JavaScript, Vue, Laravel, PHP. 

Telegram: @Efe117, email: pax75@yandex.ru
------------------------------------------


В качестве портфолио сделал данный сайт https://lena-palun.ru 

Бэкенд: Laravel, MySQL. 

Фронтенд состоит из 2-х частей: 
1) панель администратора (Vue 2 (options api) + Vuex), 
2) публичная часть сайта для обычного пользователя (простой JavaScript).

Верстка: 
адаптивная, именование css-классов согласно БЭМ.

<b>Панель администратора</b> позволяет:  
- Добавлять и редактировать категории товаров, товары, фото товаров, настройки пользователей, настройки сайта, влияющие на его поведение (в частности настройка «Лимит кэширования товаров»).
- Задавать seo-параметры отдельным страницам (title и description, alt-атрибуты фото),
- Посредством drag-and-drop менять положение товаров, категорий, и фото товаров (для изменения расположения контента на сайте).
- Есть функции поиска и сортировки товаров.
- На странице одного товара есть функция «Лупа», перелистывание фото, в мобильной версии перелистывание по взмаху.


<b>Фронтенд публичной части сайта</b> (на чистом Javascript) выполнен по шаблону проектирования «Наблюдатель»: имеется «модуль» Состояние приложения, Мутации и Мутатор, и модули-подписчики «Компоненты». В Компонентах по событию посредством Мутатора меняется Состояние, далее Мутатор оповещает все Компоненты что произошло изменение Состояния, и Компонентами производится «рендеринг».

Настройка «Лимит кэширования» (та, что в панели администратора, влияет на работу фронтенд публичной части) (к примеру cacheLimit = 100). Если товаров на сайте меньше 100, то после загрузки страницы все их данные из БД подгружаются на фронт, и далее  Приложение уже практически не обращается к серверу при действиях пользователя. Если товаров больше 100, то на действия пользователя Приложение обращается к серверу (без перезагрузки страницы). 

Функции публичного js-приложения:
- Просмотр списка товаров (с пагинацией и кнопкой «Показать еще», с фильтрацией и сортировкой, просмотр по категориям).
- Просмотр одного товара (с функциями «Лупа», перелистывание фото, в моб. версии перелистывание по взмаху).
- Быстрый просмотр одного товара.
- Просмотренные товары внизу страницы.
- Добавление в Избранное.
