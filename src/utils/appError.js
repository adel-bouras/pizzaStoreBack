class appError extends Error{
    constructor(){
        super();
    }

    createError(status , message){
        this.status = status;
        this.message = message;
        return this;
    }
}

module.exports = new appError();