import banner from '../assets/resources/bg-cafe-lg.jpg'
function Hero() {
    return (
        <div className="flex w-full h-80 bg-slate-400 relative">
            <img src={banner} className="w-full"/>
        </div>
    )
}
export default Hero;