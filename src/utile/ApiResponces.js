class ApiResponces {
    constructor(statusCode,data,message="success" ){
        this.message = message,
        this.data = data,
        this.statuscode = statuscode,
        this.success = statuscode < 400

    }
}