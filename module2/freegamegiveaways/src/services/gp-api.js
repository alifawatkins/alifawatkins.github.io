export async function getAllLiveGiveaways() {
    try {
        const response = await fetch(
            'https://gamerpower.p.rapidapi.com/api/giveaways'
        );
        const data = await response.json();
        return data;
      } catch (e) {
        console.error(e);
      }
}