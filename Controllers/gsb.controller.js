const knex = require('../Config/knex.Data')

module.exports = {
    select: async (req, res) => {
        const park = await knex.select().table('bank')
        console.log(park)
        return res.status(200).json(park)
    },
    search: async (req, res) => {
        const panta = await knex('bank')
            .where('name', req.params.id)
        return res.status(200).send(panta)
    },
    // join ยังไม่เข้าใจวิธีการจอย 
    join: async (req, res) => {
        const msi = await knex('bank')
        .join('mobile', 'name.id', '=', 'mobile.name_id')
        .select('name.id', 'phone.name')
        return res.status(200).send(msi)
    },
    insert: async (req, res) => {
        const { name, branch, personnel, money } = req.body;
        const yotin = await knex('bank').insert({
            name: name, branch: branch, personnel: personnel, money: money
        })
        console.log(yotin)
        return res.status(200).send('เพิ่มได้แล้วนะ')
    },
    put: async (req, res) => {
        const keesongz = await knex('bank')
            .where({
                name: req.params.id
            })
            .update({
                money: "26.3"
            })
        return res.status(200).send('แก้ไขให้แล้ว')
    },
    delete: async (req, res) => {
        const ajua = await knex('bank')
            .where({
                name: req.params.id
            })
            .del()
        return res.status(200).send('ลบได้แล้ว')
    },
}