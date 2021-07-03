class TODO {
    constructor(description) {
        this.id = new Date().getTime();
        this.description = description;
        this.done = false;
    }
}

export default TODO;