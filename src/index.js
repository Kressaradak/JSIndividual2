
/**
 * Получает случайную активность с помощью запроса к API.
 * @returns {Promise<string|null>} Случайная активность или null в случае ошибки.
 */
async function getRandomActivity() {
    try {
      const response = await fetch('http://www.boredapi.com/api/activity/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.activity;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  /**
 * Обновляет отображение активности на странице.
 * @param {string|null} activity Активность для отображения или null в случае ошибки.
 */
  function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    if (activity) {
      activityElement.textContent = activity;
    } else {
      activityElement.textContent = 'К сожалению, произошла ошибка';
    }
  }
  
  /**
 * Периодически обновляет данные, запрашивая новую активность каждую минуту.
 */
  async function updateDataPeriodically() {
    try {
      const activity = await getRandomActivity();
      updateActivity(activity);
    } catch (error) {
      console.error('Error updating data:', error);
      updateActivity(null);
    } finally {
      setTimeout(updateDataPeriodically, 60000); // Обновляем каждую минуту (60000 мс = 1 минута)
    }
  }
  
  // Запускает функцию для периодического обновления данных
  updateDataPeriodically();
  