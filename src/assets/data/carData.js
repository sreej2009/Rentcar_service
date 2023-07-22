// import all images from assets/images directory
import img01 from "../all-images/cars-img/thar.png";
import img02 from "../all-images/cars-img/fortuner.jpeg";
import img03 from "../all-images/cars-img/m4.png";
import img04 from "../all-images/cars-img/Honda-city.png";
import img05 from "../all-images/cars-img/baleno.png";
import img06 from "../all-images/cars-img/volvoxc.png";
import img07 from "../all-images/cars-img/a4.png";
import img08 from "../all-images/cars-img/rolles.png";
import img09 from "../all-images/cars-img/PoloGt.png";
import img10 from "../all-images/cars-img/xuv.png";
import img11 from "../all-images/cars-img/toyota.png";
import img12 from "../all-images/cars-img/Hyundai.png";

const carData = [
  {
    id: 9,
    brand: "Volkswagen",
    rating: 52,
    carName: "volkswagen Polo",
    imgUrl: img09,
    model: "GT",
    price: 1500,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " GT is powered by a 999 cc Petrol engine mated to a 6 Gears, Manual Override speed Automatic (TC) gearbox which generates 109 bhp of power & 175 Nm of torque.",
  },
  {
    id: 2,
    brand: "BMW",
    rating: 132,
    carName: "BMW M4",
    imgUrl: img03,
    model: "Model-2020",
    price: 5000,
    speed: "180kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Petrol engine is 2993 cc . It is available with Automatic transmission. Depending upon the variant and fuel type the M4 Competition has a mileage of . The M4 Competition is a 5 seater 6 cylinder car and has length of 4794mm, width of 2081mm and a wheelbase of 2857mm..",
  },

  {
    id: 3,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Fortuner",
    imgUrl: img02,
    model: "Model-2022",
    price: 3000,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Diesel engine is 2755 cc while the Petrol engine is 2694 cc . It is available with Automatic & Manual transmission.Depending upon the variant and fuel type the Fortuner has a mileage of 10.0 kmpl . The Fortuner is a 7 seater 4 cylinder car and has length of 4795mm, width of 1855mm and a wheelbase of 2745mm.",
  },

  {
    id: 4,
    brand: "Honda",
    rating: 102,
    carName: "Honda City",
    imgUrl: img04,
    model: "Model-2022",
    price: 2000,
    speed: "150kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The 1498 cc Petrol engine generates a power of 119.35bhp@6600rpm and a torque of 145Nm@4300rpm. Honda City is available in both Manual & Automatic transmission. The kerb weight of City is 1107-1153 Kg. In configurations, Honda City has a dimensions of 4583 mm in length, 1748 mm in width and 1489 mm^3 mm in height.",
  },

  {
    id: 5,
    brand: "Maruti",
    rating: 94,
    carName: "Maruti Suzuki Baleno",
    imgUrl: img05,
    model: "Model-2021",
    price: 1500,
    speed: "120kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The top features of the Baleno include the first-in- segment Head Up Display, 360 View Camera, SmartPlay Pro +, Next Generation Suzuki Connect, and the 1.2 L K series Dual Jet Dual VVT Engine.The New Age Nexa Baleno by Maruti Suzuki is a premium hatchback that comes with a well-shaped boot and a boot space capacity of 318 litres.",
  },

  {
    id: 6,
    brand: "Audi",
    rating: 82,
    carName: "Audi A4",
    imgUrl: img07,
    model: "Model - 2021",
    price: 50,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The A4 is a 5 seater 4 cylinder car and has length of 4762mm, width of 1847mm and a wheelbase of 2819mm.This German luxury brand is known for technology and style as much as its performance, well-crafted interiors, and its trademark Quattro all-wheel-drive system. Nearly every model is a solid performer with a high-grade interior. Ride and handling are accomplished, and the cabin is quiet.",
  },

  {
    id: 7,
    brand: "Rolls Royce",
    rating: 52,
    carName: "Rolls Royce Spofec",
    imgUrl: img08,
    model: "Model - 2019",
    price: 5000,
    speed: "200kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " SPOFEC engine tuning pumps peak power of the twin-turbo V12 in the bow to 519 kW / 706 hp and peak torque to 1,002 Nm. This engine slings the refined luxury liner from rest to 100 km/h in just 4.3 seconds. The top speed remains electronically limited to 250 km/h.",
  },

  {
    id: 8,
    brand: "Mahindra",
    rating: 112,
    carName: "Mahindra Thar",
    imgUrl: img01,
    model: "Model - 2022",
    price: 2000,
    speed: "130kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " The Mahindra Thar has 2 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2184 cc and 1497 cc while the Petrol engine is 1997 cc .As a vehicle that has evolved with time, each and every version of the Mahindra Thar did its best to provide overall safety and ruggedness. Staying true to its lineage, the 2020 Mahindra Thar too provides a 4 Star safety and proudly features on the list of GNCAP's Safer Cars for India campaign.",
  },

  {
    id: 9,
    brand: "Volvo",
    rating: 119,
    carName: "Volvo XC 90",
    imgUrl: img06,
    model: "Model-2022",
    price: 2500,
    speed: "180kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The XC90 is a 7 seater 4 cylinder car and has length of 4953mm, width of 2140mm and a wheelbase of 2984. Read More. Ad. Ad. Volvo XC90. In India, the Volvo XC90 is available in diesel and even tech-laden petrol-electric plug-in hybrid versions. Also, while seven seats are standard, the range-topping XC90 Excellence trims are unique for their four-seat and three-seat configurations.",
  },
  {
    id: 10,
    brand: "Mahindra",
    rating: 119,
    carName: "Mahindra XUV700",
    imgUrl: img10,
    model: "Model-2022",
    price: 2500,
    speed: "150kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Manual",
    description:
      " An intelligent SUV with intelligent speed. Advanced driver assist system that adapts your speed to the vehicles around you. Mahindra XUV700 High Beam Assist. The mStallion turbocharged 2.0-litre petrol engine churns out 200 hp & 380Nm of torque. Both engines are offered with a 6-speed manual/ AMT transmission. This makes it the most power-packed in the segment, and with the competitive pricing, Mahindra gained a lot of buyers.",
  },
  {
    id: 11,
    brand: "Toyota",
    rating: 189,
    carName: "Toyota Vellfire",
    imgUrl: img11,
    model: "Model-2023",
    price: 8000,
    speed: "150kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Toyota Vellfire is a 7 seater MUV with a mileage of 16.35 Kmpl depending upon it's transmission and fuel type. Vellfire's 4 cylinder, 2494 cc, Gasoline Hybrid Engine 116 PS @ 4700 rpm can generate power and 198 Nm @ 2800-4000 rpm torque.It is powered by a 2.5 litre petrol engine paired with a strong hybrid system. Just like Innova, Vellfire is also popular among buyers for its comfortable ride and space and premium features. This is one of the reason why many celebrities in India have also bought this MPV.",
  },
  {
    id: 12,
    brand: "Hyundai",
    rating: 189,
    carName: "Hyundai Kona Electric",
    imgUrl: img12,
    model: "Model-2023",
    price: 1500,
    speed: "120kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      " Seating Capacity: The Kona Electric has the capacity to seat five passengers. Battery Pack and Motor: The electric SUV gets a 39.2kWh battery pack mated to an electric motor that churns out 136PS and 395Nm. It comes with an ARAI-claimed range of 452km and has a zero to 100kmph sprint time of 9.7 seconds.",
  },
];

export default carData;
