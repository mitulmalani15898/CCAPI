const Sequelize = require('sequelize');
const { host, database, username, password } = require('./configs/databaseConfig.js');

const UserModel = require('./schemas/user.schema');
const TournamentModel = require('./schemas/tournament.schema');
const TeamModel = require('./schemas/team.schema');
const PlayerModel = require('./schemas/player.schema');
const TournamentTeamModel = require('./schemas/tournamentteam.schema');
const UserPlayerModel = require('./schemas/userplayer.schema');
const TournamentMatchModel = require('./schemas/tournamentmatch.schema');
const TeamPlayerModel = require('./schemas/teamplayer.schema');
const TournamentPointModel = require('./schemas/tournamentpoint.schema');
const TournamentMatchPlayerScoreModel = require('./schemas/tournamentmatchplayerscore.schema');

const Op = Sequelize.Op;

// connect to db
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',
  operatorsAliases: Op,
  port: 3306,
});

const User = UserModel(sequelize, Sequelize);
const Tournament = TournamentModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Player = PlayerModel(sequelize, Sequelize);
const TournamentTeam = TournamentTeamModel(sequelize, Sequelize);
const UserPlayer = UserPlayerModel(sequelize, Sequelize);
const TournamentMatch = TournamentMatchModel(sequelize, Sequelize);
const TeamPlayer = TeamPlayerModel(sequelize, Sequelize);
const TournamentPoint = TournamentPointModel(sequelize, Sequelize);
const TournamentMatchPlayerScore = TournamentMatchPlayerScoreModel(sequelize, Sequelize);

// creates table if not exists
User.sync({ force: false })
  .then(() => {
    console.log("User Table Created Successfully...")
  })
  .catch(() => {
    console.log("User Table can't Created...")
  })

Tournament.sync({ force: false })
  .then(() => {
    console.log("Tournament Table Created Successfully...")
  })
  .catch(() => {
    console.log("Tournament Table can't Created...")
  })

Team.sync({ force: false })
  .then(() => {
    console.log("Team Table Created Successfully...")
  })
  .catch(() => {
    console.log("Team Table can't Created...")
  })

Player.sync({ force: false })
  .then(() => {
    console.log("Player Table Created Successfully...")
  })
  .catch(() => {
    console.log("Player Table can't Created...")
  })

TournamentTeam.sync({ force: false })
  .then(() => {
    console.log("TournamentTeam Table Created Successfully...")
  })
  .catch(() => {
    console.log("TournamentTeam Table can't Created...")
  })

UserPlayer.sync({ force: false })
  .then(() => {
    console.log("UserPlayer Table Created Successfully...")
  })
  .catch(() => {
    console.log("UserPlayer Table can't Created...")
  })

TournamentMatch.sync({ force: false })
  .then(() => {
    console.log("TournamentMatch Table Created Successfully...")
  })
  .catch(() => {
    console.log("TournamentMatch Table can't Created...")
  })

TeamPlayer.sync({ force: false })
  .then(() => {
    console.log("TeamPlayer Table Created Successfully...")
  })
  .catch(() => {
    console.log("TeamPlayer Table can't Created...")
  })

TournamentPoint.sync({ force: false })
  .then(() => {
    console.log("TournamentPoint Table Created Successfully...")
  })
  .catch(() => {
    console.log("TournamentPoint Table can't Created...")
  })

TournamentMatchPlayerScore.sync({ force: false })
  .then(() => {
    console.log("TournamentMatchPlayerScore Table Created Successfully...")
  })
  .catch(() => {
    console.log("TournamentMatchPlayerScore Table can't Created...")
  })

/*

//To get Data Of Teams in Tournament Model
Team.belongsToMany(Tournament, { through: TournamentTeam, foreignKey: 'teamId' });
Tournament.belongsToMany(Team, { through: TournamentTeam, foreignKey: 'tournamentId' });

//To get Data Of Tournaments in User Model
// Tournament.belongsToMany(User, { through: UserPlayer, foreignKey: 'tournamentId' });
// User.belongsToMany(Tournament, { through: UserPlayer, foreignKey: 'userId' });

//To get Data Of Players selected By User in Tournament Model 
//Player.belongsToMany(Tournament, { through: UserPlayer, foreignKey: 'playerId' });
//Tournament.belongsToMany(Player, { through: UserPlayer, foreignKey: 'tournamentId' });

//To get Data Of Match in  Tournament Model 
Tournament.hasMany(TournamentMatch, { foreignKey: 'tournamentId', sourceKey: 'id' });

//To get Data Of Team  in Particular Match Tournament Model (Both the Team)
TournamentMatch.hasMany(Team, { foreignKey: 'id', sourceKey: 'teamId1', as: 'Team1' });
TournamentMatch.hasMany(Team, { foreignKey: 'id', sourceKey: 'teamId2', as: 'Team2' });
TournamentMatch.belongsTo(Tournament, { foreignKey: 'tournamentId', sourceKey: "id" });

//Get Data of Player In Team
Player.belongsToMany(Team, { through: TeamPlayer, foreignKey: 'playerId', as: 'player' });
Team.belongsToMany(Player, { through: TeamPlayer, foreignKey: 'teamId', as: 'player' });

//Get Data of Tournamanet Point in Tournamnet
TournamentPoint.belongsTo(Tournament, { foreignKey: 'tournamentId', as: 'Tournament' });
Tournament.belongsTo(TournamentPoint, { foreignKey: 'id', as: 'points' });

//Get data of player in tournament 
Tournament.belongsToMany(Player, { through: TeamPlayer, foreignKey: 'tournamentId' });
Player.belongsToMany(Tournament, { through: TeamPlayer, foreignKey: 'playerId' });

//add player data in teamplayer data response
TeamPlayer.hasMany(Player, { foreignKey: 'id', sourceKey: 'playerId' });

//add tournament data in TournamentMatchPlayerScore data response
TournamentMatchPlayerScore.hasMany(Tournament, { foreignKey: 'id', sourceKey: 'tournamentId' });
TournamentMatchPlayerScore.belongsTo(Player, { foreignKey: 'playerId', sourceKey: "id" });


UserPlayer.hasMany(TournamentMatch, { foreignKey: 'id', sourceKey: "tournamentMatchId" });
//TournamentMatch.belongsTo(UserPlayer, { foreignKey: 'tournamentMatchId', sourceKey: "id" });
UserPlayer.hasMany(Player, { foreignKey: 'id', sourceKey: "playerId" });
//Player.belongsTo(UserPlayer, { foreignKey: 'playerId', sourceKey: "id" });

*/

sequelize
  .authenticate()
  .then(() => {
    console.log('Mysql connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



module.exports = { User, Tournament, Team, Player, TournamentTeam, TournamentMatch, UserPlayer, TournamentPoint, TeamPlayer, TournamentMatchPlayerScore };