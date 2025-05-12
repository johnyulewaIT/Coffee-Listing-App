import RatingInfo from '../components/RatingInfo'
function Cards({ cards }) {
    return (
      <div>
        <div className="">
          <div class=" p-2 w-full">
            {/*Image*/}
            <div className="h-auto relative">
              <img src={cards.image} className="rounded-md h-full w-full" />
              <h4>{cards.status}</h4>
              {cards.popular && (
                <div className="absolute top-1 left-1 bg-yellow-500 rounded-md px-4 py-1 z-10">
                  Popular
                </div>
              )}
            </div>
            {/*Details*/}
            <div className="flex flex-col gap-3 mt-2 px-4">
              <div className="flex justify-between items-center">
                <div>{cards.name}</div>
                <div className="bg-green-300 px-2 text-green-950 rounded-md">
                  {cards.price}
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* Rating component */}
                <RatingInfo rating={cards.rating} votes={cards.votes} />
                {/* Availability */}
                <div>
                  {cards.available === false && (
                    <h4 className="text-red-500">Sold out</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Cards;