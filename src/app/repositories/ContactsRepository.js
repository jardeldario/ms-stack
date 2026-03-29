const { v4 } = require('uuid');
let contacts = [
    {
        id: v4(),
        name: 'Jardel',
        email: 'jardel@email.com',
        phone: '99999998888',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Roberto',
        email: 'roberto@email.com',
        phone: '99933338888',
        category_id: v4(),
    },
];

class ContactsRepository {
    async findAll() {
        return contacts;
    }

    async findById(id) {
        return contacts.find((contact) => contact.id === id);
    }

    async findByEmail(email) {
        return contacts.find((contact) => contact.email === email);
    }

    async create({ name, email, phone, category_id }) {
        const newContact = {
            id: v4(),
            name,
            email,
            phone,
            category_id,
        };

        contacts.push(newContact);
        return newContact;
    }

    async update(id, { name, email, phone, category_id }) {
        const updatedContact = {
            id,
            name,
            email,
            phone,
            category_id,
        };

        contacts = contacts.map((contact) => (
            contact.id === id ? updatedContact : contact
        ));

        return updatedContact;
    }

    async delete(id) {
        contacts = contacts.filter((contact) => contact.id !== id);
    }
}

module.exports = new ContactsRepository();
