class Usuario{
  
     constructor(id=0,userName="",email="",password=""){
         this.id = id;
         this.userName = userName;
         this.email = email;
         this.password = password;
     }
    
      toString(){
           return this.id +","+ this.userName + "," + this.email + "," + this.password;
      }

     
}

model.exports = Usuario;
