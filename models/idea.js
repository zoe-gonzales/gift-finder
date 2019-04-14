module.exports = function(sequelize, DataTypes) {
    var Idea = sequelize.define('Idea', {
        gift_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isHomemade: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        price: {
            type: DataTypes.FLOAT,
            defaultValue: false,
            decimals: 2
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('NOW()')
          },
        updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
        }
    });

    return Idea;
}