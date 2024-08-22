const axios = require('axios');
const { Autobot} = require('../Models/Autobot');
const {Posts} = require('../Models/Posts');
const {Comments} = require('../Models/Comments');
const nodeCron = require('node-cron');

async function createAutobots() {
    for (let i = 0; i < 500; i++) {
        try {
            const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
            const user = userResponse.data[i % userResponse.data.length];
            const autobot = await Autobot.create({
                name: user.name,
                username: user.username,
                email: user.email,
            });

            const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const uniquePosts = postResponse.data.filter((post, index, self) =>
                index === self.findIndex(p => p.title === post.title)
            );

            for (let j = 0; j < 10; j++) {
                const post = uniquePosts[j % uniquePosts.length];
                const createdPost = await autobot.createPost({
                    title: post.title,
                    body: post.body
                });

                const commentResponse = await axios.get('https://jsonplaceholder.typicode.com/comments');
                const comments = commentResponse.data.slice(0, 10);

                for (let comment of comments) {
                    await createdPost.createComment({
                        body: comment.body
                    });
                }
            }
        } catch (error) {
            console.error('Error creating Autobot:', error);
        }
    }
    console.log('500 Autobots created');
}

//schedule cron job
nodeCron.schedule('0 * * * *', createAutobots);


module.exports = createAutobots;
