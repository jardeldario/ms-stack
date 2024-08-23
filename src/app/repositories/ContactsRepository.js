const { uuid } = require('uuidv4');
const contacts = [
    {
        id: uuid(),
        name: 'Jardel',
        email: 'jardel@email.com',
        phone: '99999998888',
        category_id: uuid(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }
}

module.exports = new ContactsRepository();
