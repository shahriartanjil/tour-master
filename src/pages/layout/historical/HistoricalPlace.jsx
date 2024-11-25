import backImg from '../../../assets/Rectangle 18.png';
import imgOne from '../../../assets/Rectangle 38.png';
import imgTwo from '../../../assets/Rectangle 39.png';
import imgThree from '../../../assets/Rectangle 38 (5).png';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
const imageData = [
    { image: imgOne, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgTwo, title: 'Unveil the Historical Charm of Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgThree, title: 'Coxs Bazar: A Blend of History and Natural Beauty', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgTwo, title: 'Explore the Rich Heritage and Scenic Wonders of Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgThree, title: 'Coxs Bazar: Where History Meets the Horizon', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgThree, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgTwo, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgOne, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
    { image: imgTwo, title: 'Discover the Worlds Longest Natural Sea Beach at Coxs Bazar', smtitle: '24.OCT.2022 | BY ADMIN' },
];
const HistoricalPlace = () => {
if(backImg){
    console.log("hello")
}
    return (
        <div>
            {/* <Navbar /> */}
            <div
                style={{
                    backgroundImage: `url(${backImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="w-full h-screen flex flex-col items-center justify-center pt-24 lg:pt-0 pb-24 lg:pb-0"
            >
                <div className="w-full md:w-2/3 lg:w-3/4 mx-auto text-gray-900">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
                        Historical Place Appeared On Search
                    </h1>
                    <p className="text-center">
                        <span className="text-gray-400">Home / Pages /</span> Blog
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold text-center mb-2">POPULAR DESTINATIONS</h2>
                <p className='text-sm mt-2 text-center '>Explore our top destinations right from our beloved clients’ reviews.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-4 lg:mt-16">
                    {imageData.map((item, index) => (
                        <div key={index} className="">
                            <img src={item.image} alt={item.title} className="w-full h-44 mb-2 " />
                            <p className="text-start text-sm text-gray-400">{item.smtitle}</p>
                            <h3 className="text-lg font-medium text-start">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default HistoricalPlace;
