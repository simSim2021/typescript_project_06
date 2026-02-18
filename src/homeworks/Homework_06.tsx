import "./styles.css";


function Homework_06 (){

    interface Car {
        brand: string;
        price: number;
        isDiesel: boolean;
    }

    const cars: Car []= [
        { brand: "BMW", price: 20000, isDiesel: true }, 
        { brand: "Mercedes", price: 22000, isDiesel: false }, 
        { brand: "Porshe", price: 50000, isDiesel: true }, 
        { brand: "Nissan", price: 25000, isDiesel: false }, 
        { brand: "Audi", price: 50000, isDiesel: true }
    ]

    const carsCard = cars.map((car: Car, index: number )=>{

        return (
            <div className="card" key={index}>
                <h3>Brand: {car.brand}</h3>
                <p>Price: {car.price}</p>
                <p>Diesel: {car.isDiesel ? "Yes" : "No"}</p>

            </div>
        );
    });

    return <div className="cards_wrapper">{carsCard}
    
    </div>
}

export default Homework_06;