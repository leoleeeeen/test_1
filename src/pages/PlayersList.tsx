function PlayersList() {
    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{`Device ${0} players`} </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                <div className="py-4 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)] flex flex-col gap-2">
                    <p className="inline font-bold text-xl text-gray-800">Name</p>
                    <p>Balance: 100</p>
                    <div className="flex flex-col gap-2">
                        <input type="text" placeholder="Enter amount" className="border-2 border-gray-300 rounded-md p-2"></input>
                        <div className="flex flex-col md:flex-row justify-between gap-2">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Deposit</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full">Withdraw</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayersList
