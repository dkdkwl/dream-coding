export default  function personReducer(person, action){
    switch(action.type){
        case 'updated': {
            const {prev, current} = action;
            return{
                ...person,
                    mentors: person.mentors.map((mentor) => {
                        if (mentor.name === prev) {
                        return { ...mentor, name: current };
                        }
                        return mentor;
                }),
            };
        }
        case 'added': {
            return{
                ...person,
                mentors: [{ name: action.mentor.name, title: action.mentor.title }, ...person.mentors],
                };
            }
        case 'deleted': {
            return {
                ...person,
                mentors: person.mentors.filter((m) => m.name !== action.name),
            };
        }
        default: {
            throw Error(`알 수 없는 액션 타입입니다. ${action.type}`);
        }
    }
}