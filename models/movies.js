const db = require('./conn');

class GaryBuseyMovies {
    constructor(id, title, year_released) {
        this.id = id;
        this.title = title;
        this.yearReleased = year_released;
    }


    static getById(id) {
        const theBusey = 'five_random_gary_busey_movies';
        return db.one(`select * from ${theBusey} where id=${id} `)
            .then((garyBuseyData) => {
                const garyBuseyMovie = new GaryBuseyMovies(
                                       garyBuseyData.id,
                                       garyBuseyData.title,
                                       garyBuseyData.year_released
                );
                return garyBuseyMovie;
            })
            .catch(() => {
                return null;
            });
    }
    static getAll() {
        const theBusey = 'five_random_gary_busey_movies';
        return db.any(`select * from ${theBusey}`)
            .then((arrayOfBusey) => {
                return arrayOfBusey.map((garyBuseyData) => {
                    const buseyMovies = new GaryBuseyMovies(
                                        garyBuseyData.id,
                                        garyBuseyData.title,
                                        garyBuseyData.year_released
                    );
                    return buseyMovies;
                });
            })
            .catch(() => {
                return null;
            });
    }
    save() {
        const theBusey = 'five_random_gary_busey_movies';
        return db.result(`update ${theBusey} set
                        title=${this.title},
                        year_released=${this.yearReleased},
                    where id=${id}
                    `);
    }
}
module.exports = GaryBuseyMovies;