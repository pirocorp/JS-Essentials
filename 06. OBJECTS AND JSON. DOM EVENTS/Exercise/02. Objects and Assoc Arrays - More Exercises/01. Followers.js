function solve(inpputStrings) {
    let users = new Map();

    for (const currentString of inpputStrings) {
        if (currentString.includes('Welcome, ')){            
            const user = currentString
                .split('Welcome,')
                .map(x => x.trim())
                .filter(x => x !== '')[0];

            if(!users.get(user)){
                let currentUser = {
                    name: user,
                    following: new Set(),
                    followers: new Set()
                }

                users.set(user, currentUser)
            }
        } else if (currentString.includes('followed')) {
            const [followerName, followedName] = currentString
                .split(' followed ')
                .map(x => x.trim())
                .filter(x => x !== '');                

            if (users.get(followerName) && users.get(followedName) && followerName && followedName){

                if (followerName !== followedName) {
                    const followedUser = users.get(followedName);
                    const followerUser = users.get(followerName);
                    followedUser.followers.add(followerName);
                    followerUser.following.add(followedName);
                }                
            }
        }
    }

    let sortedUsers = Array.from(users.keys()).sort((a, b) => sortUsers(a, b));

    console.log(`Total users registered: ${users.size}`);

    const firstUser = users.get(sortedUsers[0]);
    console.log(`1. ${firstUser.name} : ${firstUser.following.size} following, ${firstUser.followers.size} followers`);
    const sortedFollowers = Array.from(firstUser.followers).sort((a, b) => a.localeCompare(b));
    
    for (const follower of sortedFollowers) {
        console.log(`*  ${follower}`);
    }

    for (let i = 1; i < sortedUsers.length; i++) {
        const currentUsername = sortedUsers[i];
        const currentUser = users.get(currentUsername);
        console.log(`${i + 1}. ${currentUser.name} : ${currentUser.following.size} following, ${currentUser.followers.size} followers`);
    }

    function sortUsers(a, b) {
        let user1 = users.get(a);
        let user2 = users.get(b);

        if (user1.followers.size != user2.followers.size){
            return user2.followers.size - user1.followers.size;
        } else {
            return b.localeCompare(a);
        }
    }
}
solve([
'Welcome, JennaMarbles',
'JennaMarbles followed Zoella',
'Welcome, AmazingPhil',
'JennaMarbles followed AmazingPhil',
'Welcome, Zoella',
'Welcome, JennaMarbles',
'Zoella followed AmazingPhil',
'Christy followed Zoella',
'Zoella followed Christy',
'Welcome, JacksGap',
'JacksGap followed JennaMarbles',
'Welcome, PewDiePie',
'Welcome, Zoella'
]);