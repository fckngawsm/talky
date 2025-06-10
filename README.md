# Запуск

1. Убедитесь что у вас установлен node и docker
2. Выполните команду yarn bootstrap - это обязательный шаг
3. Выполните команду yarn dev
4. Выполните команду yarn dev:client - для запуска только frontend

# Lerna

1. Добавить новый package npx lerna create {package_name}
2. Чтобы добавить зависимость для определенного package:  yarn lerna add {your_dep} --scope {package_name}
3. Чтобы добавить зависимость для любого package:  yarn lerna add {your_dep}
4. Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом dev yarn lerna add {your_dep} --dev --scope {package_name}

# Docker
docker system prune -af
docker volume prune -af
docker-compose up -d --build