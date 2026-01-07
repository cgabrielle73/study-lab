const data = {

    id: '1',

    email: "aaa@gmail.com",

    name: 'aaa',

    roles: ['Admin']

}



const getUserIdByEmail = (email) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(email === data.email) {

                resolve(data.id);

            } else reject(new Error("User not found"));

        }, 1000)

    })

}



const getRolesByUserId = (userId) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(userId === data.id) {

                resolve(data.roles);

            } else reject(new Error("Role not found"));

        }, 1000)

    })

}



const getUserAndRoles = (userName, userRoles) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`The user ${userName} with role of ${userRoles} logged in successfully`);

        }, 1000)

    })

}



const newFunction = async () => {

    try {

        const userId = await getUserIdByEmail("aaa@gmail.com");

        const roles = await getRolesByUserId(userId);

        const report = await getUserAndRoles(data.name, roles);



        console.log(report)

        return report;

    } catch (error) {

        console.log(error)

    }



}

newFunction()