export default  function Caricons() {

    const middle = [
        {
            id: 1,
            imageUrl: "/toyota.png",
        },
        {
            id: 2,
            imageUrl: "/tata.png",
        },
        {
            id: 3,
            imageUrl: "/suzuki.png",
        },
        {
            id:4,
            imageUrl:"/mahindra.png"
        },
        {
            id:5,
            imageUrl:"/hyndai.png"
        }
    ];

    return (
        <div className="w-full">
            
            <div className="bg-black border rounded-md p-2 flex w-[100%] justify-center items-center">
                
                {middle.map((middle) => {
                    return (
                        <div key={middle.id} className="flex-grow mt-4 flex items-center justify-center">
                            <img
                                src={middle.imageUrl}
                                alt={`Car brand ${middle.id}`}
                                className="w-full h-32 object-contain"
                            />
                        </div>
                    );
                })}
                
            </div>
        </div>
    );
}
