class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log('Something went wrong at crud service')
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll ();
            return response;
        } catch (error) {
            console.log('Something went wrong at crud service')
        }
    }

    async create(data) {
        try {
            console.log(data);
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong at crud service')
        }
    }

    async destroy(id, data) {
        try {
            const response = await this.repository.destroy(id, data);
            return response;
        } catch (error) {
            console.log('Something went wrong at crud service')
        }
    }

    async update(id) {
        try {
            const response = await this.repository.update(id);
            return response;
        } catch (error) {
            console.log('Something went wrong at crud service')
        }
    }
}

module.exports = CrudService;