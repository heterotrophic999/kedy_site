# КЕДЫ — лендинг агентства детских праздников

Одностраничный сайт на Next.js (App Router), TypeScript и Tailwind CSS. Контент и параметры всех фотографий собраны в одном файле: `src/content/siteContent.ts`.

## Запуск

```bash
npm install
npm run dev
```

Production-проверка:

```bash
npm run typecheck
npm run build
npm start
```

## Как заменить фотографию

Все контентные изображения находятся в `public/images/`, разложены по смысловым папкам: `hero`, `categories`, `animators`, `parties`, `shows`, `addons`. В JSX нет импортов отдельных фотографий и внешних CDN-ссылок.

### Вариант 1: заменить файл с тем же именем

1. Найдите нужный файл, например `public/images/animators/spiderman.webp`.
2. Подготовьте новое изображение в WebP или AVIF. Желательно использовать пропорции, близкие к указанному для него `aspectRatio` в `siteContent.ts`.
3. Замените старый файл новым, сохранив то же имя и путь.
4. Перезапустите dev-сервер или пересоберите проект. Код и компоненты менять не нужно.

Браузер автоматически получит новое фото по прежнему пути. Если сайт уже размещён с CDN-кешем, после публикации может потребоваться очистить кеш.

### Вариант 2: изменить путь в `siteContent.ts`

1. Добавьте новый файл в подходящую папку внутри `public/images/`, например `public/images/animators/new-hero.avif`.
2. Откройте `src/content/siteContent.ts`.
3. У нужной карточки измените только объект `image`:

```ts
image: {
  src: "/images/animators/new-hero.avif",
  alt: "Содержательное описание нового фото",
  objectPosition: "center top",
  aspectRatio: "4/5",
}
```

- `src` — путь от папки `public` и всегда начинается с `/`;
- `alt` — описание содержания фото для скринридеров;
- `objectPosition` — кадрирование внутри карточки (`center`, `center top`, `40% 30%` и т. п.);
- `aspectRatio` — стабильные пропорции контейнера, предотвращающие layout shift.

Все изображения рендерит единый компонент `SiteImage`. Если файл недоступен, он покажет `public/images/fallback.webp`, не ломая сетку.

## Как изменить текст/телефон/соцсети

Весь контент редактируется в `src/content/siteContent.ts`:

- `navigation` — пункты якорного меню;
- `hero` — заголовок, оффер, кнопки, преимущества и главное фото;
- `categories`, `benefits`, `animators`, `parties`, `shows`, `addons` — данные карточек;
- `sections` — заголовки и описания секций;
- `contact` — тексты формы и финального CTA;
- `contacts` — телефон, `tel:`-ссылка и город;
- `socials` — ссылки на соцсети;
- `footer` — подпись и копирайт.

Чтобы изменить телефон корректно, обновите оба поля:

```ts
contacts: {
  phone: "+7 (999) 123-45-67",
  phoneHref: "tel:+79991234567",
}
```

Карточки создаются из массивов через `map`, поэтому добавление или удаление элемента не требует копирования JSX.

## Структура

```text
src/
  app/                  # App Router, metadata, глобальные стили
  components/           # переиспользуемые UI-компоненты и секции
  content/siteContent.ts# единый источник контента и изображений
public/images/          # локальные WebP/AVIF-фотографии
```

Связь с агентством доступна по телефону и через кнопки мессенджеров в контактном блоке.

## Production-деплой в Kubernetes через Helm

Production-образ опубликован в Docker Hub и закреплён в Helm values по digest. Chart создаёт Deployment, ClusterIP Service, Traefik Ingress, HTTPS-сертификат Let’s Encrypt и HTTP → HTTPS redirect. Pod размещается только на ноде `neurohunter.tech`; toleration для `ru_node` отсутствует.

Предварительные условия:

- A-записи `kedynsk.ru` и `www.kedynsk.ru` указывают на `109.122.196.22`;
- активен правильный kube-context;
- в кластере доступны Traefik и ClusterIssuer `letsencrypt-prod`.

Установка или безопасное обновление:

```bash
helm upgrade --install kedy-landing deploy/helm/kedy-landing \
  --namespace kedy \
  --create-namespace \
  -f deploy/helm/kedy-landing/values-prod.yaml \
  --atomic \
  --wait \
  --timeout 5m
```

Проверка после установки:

```bash
kubectl get pods -n kedy -o wide
kubectl get ingress,certificate -n kedy
helm status kedy-landing -n kedy
curl -I https://kedynsk.ru
```
