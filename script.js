document.addEventListener("DOMContentLoaded", function (event) {
    const search = document.getElementById('js-search-bar')
    let username = ''
    search.addEventListener('keypress', (e) => {
        // username += e.key
        // fetch(`https://api.github.com/users/${username}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // const data = fetchUser(search.value)
        // if (data) {
        //     const image = document.getElementById('js-profile-image');
        //     const follower = document.getElementById('js-follower');
        //     const following = document.getElementById('js-following');
        //     const location = document.getElementById('js-location');
        //     image.src = data.avatar_url
        //     follower.textContent = data.followers
        //     following.textContent = data.following
        //     location.textContent = data.location || 'Not stated'
        // }

        // if (e.keyCode === 13) {
        //     fetchUser(search.value)
        // }
    })


    const populateRepositories = (data) => {
        const repositories = document.querySelector('.repositories')

        // const repository = Object.assign(document.createElement('div'), { className: 'repository' })
        // const title = Object.assign(document.createElement('h2'), { className: 'repository__title' })
        // const description = Object.assign(document.createElement('p'), {className: 'repository__description'})
        // const flexGroup = Object.assign(document.createElement('div'), {className: 'flex-group'})
        // const chieldIcon = Object.assign(document.createElement('img'), {className: 'repository__title'})
        // const chield = Object.assign(document.createElement('p'), {})
        // const nestingIcon = Object.assign(document.createElement('img'), {className: 'repository__title'})
        // const nesting = Object.assign(document.createElement('p'), {})
        // const starIcon = Object.assign(document.createElement('img'), {className: 'repository__title'})
        // const star = Object.assign(document.createElement('p'), {})
    }

    // const fetchUser = (username) => {
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         return data
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
})