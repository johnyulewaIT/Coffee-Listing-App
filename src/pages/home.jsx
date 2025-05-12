import Hero from "../components/hero";
import Cards from "../components/cards";
import React, { useState, useEffect } from 'react';


function Home() {
  const [Card, setCard] = useState([]);
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    async function getData() {
      const url =
        "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response message: ${response.status}`);
        }
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error("Fetch error:",error.message)
      }
    }
    getData();
   
      
  }, []);
  const filteredCards = Card.filter((card) => {
    if (filter === 'available') {
      return card.available;
    }
    return true;
  })
    return (
      <div className="">
        <div className=" ">
          <Hero />
          <div className="relative  w-full flex items-center justify-center ">
            <div className=" w-full   absoloute z-10 -mt-20  text-white rounded-md">
              <div className="p-10 md:mx-5 mx-10 px-10 bg-cardBg rounded-md">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <h2 className="font-bold">Available Now</h2>
                  <p className="flex text-center w-full lg:w-1/2">
                    Introducing our Coffee Collection, a selection of unique
                    coffees from different roast types and origins, expertly
                    roasted in small batches and shipped fresh weekly.
                  </p>
                  <div className="flex gap-4">
                    <div>
                      <button
                        onClick={() => setFilter("all")}
                        style={{
                          fontWeight: filter === "all" ? "bold" : "normal",
                        }}
                        className="flex items-center bg-slate-600 p-1 rounded-md"
                      >
                        All Products
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => setFilter("available")}
                        style={{
                          fontWeight:
                            filter === "available" ? "bold" : "normal",
                        }}
                        className="p-1"
                      >
                        Our Collection
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {filteredCards.map((card) => (
                    <Cards key={card.id} cards={card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}



export default Home;