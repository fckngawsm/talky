# Запуск

1. Убедитесь что у вас установлен node и docker
2. Выполните команду yarn bootstrap - это обязательный шаг
3. Выполните команду yarn dev
4. Выполните команду dev:client - для запуска только frontend

# lerna

1. Добавить новый package npx lerna create {package_name}
2. Чтобы добавить зависимость для определенного package:  yarn lerna add {your_dep} --scope {package_name}
3. Чтобы добавить зависимость для любого package:  yarn lerna add {your_dep}
4. Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом dev yarn lerna add {your_dep} --dev --scope {package_name}

# Что нужно будет сделать
1. Продумать архитектуру
2. Сделать микросервис с пользователями
3. Авторизация