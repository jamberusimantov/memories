const Validator = require('validator')
const isEmpty = require('is-empty')

const validateSearch = (data, searchMethod) => {
    const query = {}
    data.title = !isEmpty(data.title) ? data.title : '';
    data.message = !isEmpty(data.message) ? data.message : '';
    data.creator = !isEmpty(data.creator) ? data.creator : '';
    data.tags = !isEmpty(data.tags) ? data.tags : '';


    if (!Validator.isEmpty(data.title)) {
        query.title = searchMethod ? searchMethod(data.title) : data.title
    }
    if (!Validator.isEmpty(data.message)) {
        query.message = searchMethod ? searchMethod(data.message) : data.message
    }
    if (!Validator.isEmpty(data.creator)) {
        query.creator = searchMethod ? searchMethod(data.creator) : data.creator
    }
    if (!Validator.isEmpty(data.tags)) {
        query.tags = searchMethod ? searchMethod(data.tags) : data.tags
    }

    return {
        query,
        isQuery: !isEmpty(query)
    }
}

module.exports = validateSearch