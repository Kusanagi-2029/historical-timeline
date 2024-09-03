/**
 * Сохраняет значение в локальное хранилище по указанному ключу.
 * Данные сериализуются в JSON-строку перед сохранением.
 */
export const saveToStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Загружает значение из локального хранилища по указанному ключу.
 * Если значение не найдено, возвращает null.
 * Данные десериализуются из JSON-строки после загрузки.
 */
export const loadFromStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
