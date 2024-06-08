class SecretiveObject{
    #getSecret() {
        return "I ate all the plums";
    }

    interrogate(){
        let shallISayIt = this.#getSecret();
        return "never";
    }
}

console.log(
    (new SecretiveObject()).interrogate()    
);