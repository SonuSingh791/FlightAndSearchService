## DB Design 

    - Airplane Table
    - Flight
    - Airport
    - City
    - 
    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airports and an airport belongs to a city (one to many relationships)
    - One airport can have many flights, but flight belongs to one airport.


## Tables

### City --> id, name, created_at, updated_at
### Airport --> id, name, address, city_id, created_at, updated_at
    Relationship --> City has many airports and an airport belongs to a city (one to many relationships)
