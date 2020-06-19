const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


const github = require('../helpers/github')

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  repoName: String,
  userName: String,
  avatar_url: String,
  html_url: String,
  updated_at: String,
  forks: Number,
  description: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userName) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  //use get reposByUserName (userName, function (err, repos){})
  // github.getReposByUsername (userName, function(repos) {
  //   if (err) {
  //     console.log (err)
  //   } else {
  //     for (var i = 0; i < repos.length; i++) {
  //       var repo = new Repo( {
  //         repoName: repos[i].name,
  //         userName: repos[i].owner.login,
  //         avatar_url: repos[i].owner.avatar_url,
  //         html_url: repos[i].html_url,
  //         updated_at: repos[i].created_at,
  //         forks: repos[i].forks,
  //         description: repos[i].description
  //     })
  //     // console.log(repo);

  //     repo.save (function(err, repo ) {
  //       if (err) return console.log(err);
  //       // console.log(repo);
  //     })

  //     }
  //   }

  //   }
  // )

  github.getReposByUsername(userName)
    .then ( function(userRepos) {
      // console.log('from here', userRepos.data)
      for (var i = 0; i < userRepos.data.length; i++) {
        var repo = new Repo({
          repoName: userRepos.data[i].name,
          userName: userRepos.data[i].owner.login,
          avatar_url: userRepos.data[i].owner.avatar_url,
          html_url: userRepos.data[i].html_url,
          updated_at: userRepos.data[i].created_at,
          forks: userRepos.data[i].forks,
          description: userRepos.data[i].description
      })
      // console.log (repo)
        repo.save(function(err, repo) {
          if (err) console.log (err);
          console.log("hello",repo);
        })
      }
    })
    .catch(function(error) {
      console.log (error)
    })

  }
// save('jon-zawada');

module.exports.save = save;