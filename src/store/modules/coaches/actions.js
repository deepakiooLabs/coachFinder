
export default {
    async registerCoach(context,data){
        const userId = context.rootGetters.userId
        const coachData = {
            firstName:data.first,
            lastName:data.last,
            areas:data.areas,
            description:data.desc,
            hourlyRate:data.rate
        }

        const response = await fetch(`https://coachfinder-32157-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'POST',
            body : JSON.stringify(coachData)
        })
        // const responseData = await response.json();

        if(!response.ok){
            // ..error
        }
        context.commit('registerCoach',{
            ...coachData,
            id: userId
        })
    }
}