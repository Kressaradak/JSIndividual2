async function getRandomActivity() {
    try {
        const response = await fetch('http://www.boredapi.com/api/activity/');
        const data = await response.json();
        
        if (data.activity) {
            return data.activity;
        } else {
            throw new Error('Не удалось получить активность');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
        const errorMessage = 'К сожалению, произошла ошибка';
        // Добавляем текст ошибки в файл index.html
        fs.appendFileSync('index.html', errorMessage);
        return null;
    }
}

module.exports = { getRandomActivity };
