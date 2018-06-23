'use strict';

module.exports = function(sequelize, DataTypes) {
  let Barber = sequelize.define('Barber', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    bio: DataTypes.TEXT,
    rank: DataTypes.DECIMAL,
    picture: DataTypes.STRING
  });

  let bio = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lobortis velit. Phasellus faucibus, 
      libero malesuada rhoncus suscipit, elit urna vestibulum orci, nec porttitor justo leo ac nisl. Suspendisse dui 
      eros, iaculis ut porttitor in, tempor id ex. In vitae sem metus. Morbi semper interdum odio, a scelerisque justo 
      feugiat sed. Morbi ut erat est. Mauris venenatis, tellus ac iaculis pretium, lectus nunc pulvinar metus, vel 
      efficitur nunc nulla elementum nulla. Suspendisse dapibus pellentesque arcu, nec lacinia metus iaculis a. 
      Quisque eu efficitur metus. Phasellus vel turpis at elit maximus ornare. Aenean ut consectetur nibh.`;

  bio = bio.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/\s+/g,' ').trim();

  let imageURL = 'https://placeimg.com/150/150/people';

  Barber.sync().then(() => {
    let getBarbers = Barber.count();

    getBarbers.then((c) => {
      if (c > 0) {
        return null;
      }

      Barber.bulkCreate([
        {name: 'John Quispe', age: 23, bio: bio, rank: 2.5, picture: imageURL},
        {name: 'Juan Crespo', age: 32, bio: bio, rank: 4.2, picture: imageURL},
        {name: 'Ronald Mamani', age: 28, bio: bio, rank: 3.5, picture: imageURL},
        {name: 'Agustín Mark', age: 24, bio: bio, rank: 3.8, picture: imageURL},
        {name: 'Lunar Remanin', age: 27, bio: bio, rank: 2.1, picture: imageURL}
      ]);
    });
  });

  return Barber;
};
