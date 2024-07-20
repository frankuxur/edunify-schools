module.exports = (sequelize, DataTypes) => {
    const schools = sequelize.define("schools", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        city: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        state: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        contact: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email_id: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    return schools
}