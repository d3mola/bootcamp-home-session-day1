
function Phone(brand, year){
    this.year = year || "Unknown";
    this.brand = brand || "Unstated";
    this.status= 'New';
    
    if (this.brand === "Apple"){
        this.OS = "ios";
        this.battery ="non-removable";
        this.security = "high";
        
    }
    else {
        this.OS = "Andriod";
        this.battery ="removable or non-removable ";
        this.security ="low";
    }
    
    if((this.brand === "Sony") && (this.year > 2014)){
        this.isWaterResistance = true;
    }
    
    else{
        this.isWaterResistance = false;
    }
    
    Phone.prototype.use = function(){
           self.status = "Used" ;
           return self;
        };
    
    Phone.prototype.showstatus = function(){
        if(self.status==="New"){
            
            return ("This phone is currently New");
        }
        else{
            return ("This phone has been Used"); 
        }
    };
    
    Phone.prototype.phoneInfo = function(){
           return {
               brand : self.brand,
               year :self.year,
               OS: self.OS,
               phonestatus: self.status,
               security: self.security,
               waterResistance: self.isWaterResistance,
               Battery:self.battery
               
           };
        };
}
