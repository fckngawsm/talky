# Запуск

1. Убедитесь что у вас установлен node и docker
2. Выполните команду yarn bootstrap - это обязательный шаг
3. Выполните команду yarn dev
4. Выполните команду yarn dev:client - для запуска только frontend

# Lerna и Yarn Workspaces (актуально для Lerna v7+)

Lerna версии 7 и выше **удалила** команду `lerna add`. Вместо неё используйте команды Yarn Workspaces для управления зависимостями в монорепозитории.

1.  Добавить новый пакет:
    
        npx lerna create <package_name>
    
2.  Добавить зависимость в конкретный пакет:
    
        yarn workspace <package_name> add <your_dep>
    
3.  Добавить зависимость во весь монорепозиторий (root):
    
        yarn add <your_dep> -W
    
4.  Добавить dev-зависимость в конкретный пакет:
    
        yarn workspace <package_name> add -D <your_dep>
    
5.  Добавить dev-зависимость во весь монорепозиторий (root):
    
        yarn add -D <your_dep> -W
    

# Docker

## Очистить volumes

docker compose down -v

## Поднять проект

docker-compose up -d --build