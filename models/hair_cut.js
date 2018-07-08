'use strict';

module.exports = (sequelize, DataTypes) => {
  let HairCut = sequelize.define('HairCut', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.TEXT,
    rank: DataTypes.INTEGER
  });

  let description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in lobortis velit. Phasellus faucibus, 
      libero malesuada rhoncus suscipit, elit urna vestibulum orci, nec porttitor justo leo ac nisl. Suspendisse dui 
      eros, iaculis ut porttitor in, tempor id ex. In vitae sem metus. Morbi semper interdum odio, a scelerisque justo 
      feugiat sed. Morbi ut erat est. Mauris venenatis, tellus ac iaculis pretium, lectus nunc pulvinar metus, vel 
      efficitur nunc nulla elementum nulla. Suspendisse dapibus pellentesque arcu, nec lacinia metus iaculis a. 
      Quisque eu efficitur metus. Phasellus vel turpis at elit maximus ornare. Aenean ut consectetur nibh.`;

  description = description.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/\s+/g,' ').trim();

  let imageURL = 'https://placeimg.com/250/150/people';

  HairCut.sync().then(() => {
    let getHairCuts = HairCut.count();

    getHairCuts.then((c) => {
      if (c > 0) {
        return null;
      }

      HairCut.bulkCreate([
        {name: 'HairCut 1', description: description, rank: 2.5, picture: imageURL},
        {name: 'HairCut 2', description: description, rank: 4.2, picture: imageURL},
        {name: 'HairCut 3', description: description, rank: 3.5, picture: imageURL},
        {name: 'HairCut 4', description: description, rank: 3.8, picture: imageURL},
        {name: 'HairCut 5', description: description, rank: 2.1, picture: imageURL}
      ]);
    });
  });

  return HairCut;
};
