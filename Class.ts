class Player{
    
    constructor(
        private height: number, 
        public weight: number, 
        protected city?: string){}

    getMyHeight = () => this.height;
    
}

const p1 = new Player(100,150,"Pune");
console.log(p1.getMyHeight());


class Batsman extends Player{
    
    role: string;
    constructor(
        height: number,
        weight: number,
        city: string,
        role: string)
    {
        super(height, weight, city);
        this.role = role;
    }

    getCity = () => this.city;
}

const rohit = new Batsman(165, 75, "Mumbai", "Batsman");
// console.log(rohit.getMyHeight(), rohit.role, rohit.weight);
console.log(rohit.getCity());
