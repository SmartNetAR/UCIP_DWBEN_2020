import knex from '../database/knex';

export const getAll = async (req, res) => {
    const tasks = await knex('tasks');
    res.status(200).json({tasks});
}

export const getByID = (req, res) => {
    const {id} = req.params;
    res.status(200).json({
        id,
        msg: "tasks"
    })
}

export const createNewTask = async (req,res) => {
    const saved_task = await knex('tasks').returning('id').insert({
        name:req.body.name,
        description:req.body.description,
        value:req.body.value
    })

    res.status(200).json({created:saved_task});
}