module.exports = {
    login: function(req, res, next) {
        for (key in users) {
            if (users.name[i] === req.body.name && users.password[i] === req.body.password) {
                req.session.currentUser = users[i];
            } else {
                res.send({userFound: false});
            }
        }
        res.send({userFound: true});
    }
};

var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];