import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mysql://root:qweasd@localhost:3400/sqlExercise-db')

try {
    await sequelize.authenticate();
    console.log('[SEQUELIZE] Connection successfully')
} catch (error) {
    console.log('[SEQUELIZE] Connection failed', error)
}

export default sequelize
